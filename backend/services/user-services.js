const BaseService = require("./base-service");
const PostService = require("./post-sevice");
const User = require("../models/user");

class UserService extends BaseService {
  async createPost(userId, content) {
    const user = await this._getUserOrFail(userId);

    const post = await PostService.insert({
      content,
      author: userId,
    });

    user.posts.push(post._id);
    await user.save();

    return post;
  }

  async like(userId, postId) {
    const user = await this._getUserOrFail(userId);
    const post = await PostService.find(postId);
    if (!post) throw new Error("post not found");

    const isLiked = user.likedPosts.some((id) => id.equals(post._id));

    if (isLiked) {
      user.likedPosts = this._removeId(user.likedPosts, post._id);
      post.likes = this._removeId(post.likes, user._id);
      await this._saveAll([user, post]);

      return { action: "unliked", post };
    } else {
      user.likedPosts.push(post._id);
      post.likes.push(user._id);
      await this._saveAll([user, post]);

      return { action: "liked", post };
    }
  }

  async follow(followerId, followingId) {
    const [follower, following] = await Promise.all([
      this._getUserOrFail(followerId),
      this._getUserOrFail(followingId),
    ]);

    const isFollowing = follower.following.some((id) => id.equals(followingId));

    if (isFollowing) {
      follower.following = this._removeId(follower.following, followingId);
      following.followers = this._removeId(following.followers, followerId);
      await this._saveAll([follower, following]);

      return {
        message: `${follower.username} unfollowed ${following.username}`,
      };
    } else {
      follower.following.push(followingId);
      following.followers.push(followerId);
      await this._saveAll([follower, following]);

      return {
        message: `${follower.username} is following ${following.username}`,
      };
    }
  }

  async repost(userId, originalPostId, content = "") {
    const user = await this._getUserOrFail(userId);
    const originalPost = await PostService.find(originalPostId);
    if (!originalPost) throw new Error("original post not found");

    const existingRepost = await PostService.query({
      author: userId,
      originalPost: originalPostId,
    });

    if (existingRepost.length > 0) {
      const repostId = existingRepost[0]._id;
      user.posts = this._removeId(user.posts, repostId);
      originalPost.reposts = this._removeId(originalPost.reposts, repostId);

      await Promise.all([
        user.save(),
        originalPost.save(),
        PostService.removeBy("_id", repostId),
      ]);

      return { message: "repost removed successfully" };
    }

    const repost = await PostService.insert({
      author: userId,
      content,
      originalPost: originalPostId,
    });

    user.posts.push(repost._id);
    originalPost.reposts.push(repost._id);
    await this._saveAll([user, originalPost]);

    return {
      message: `repost created by ${user.username} for post ${originalPostId}`,
      repost,
    };
  }

  async bookmarkPost(userId, postId) {
    const user = await this._getUserOrFail(userId);
    const post = await PostService.find(postId);
    if (!post) throw new Error("Post not found");

    const isBookmarked = user.bookmarkedPosts.some((id) => id.equals(postId));

    if (isBookmarked) {
      user.bookmarkedPosts = this._removeId(user.bookmarkedPosts, postId);
      post.isBookmarked = false;
      await this._saveAll([user, post]);

      return {
        message: "post removed from bookmarks",
        bookmarkedPosts: user.bookmarkedPosts,
      };
    } else {
      user.bookmarkedPosts.push(postId);
      post.isBookmarked = true;
      await this._saveAll([user, post]);

      return {
        message: "post added to bookmarks",
        bookmarkedPosts: user.bookmarkedPosts,
      };
    }
  }

  async _getUserOrFail(userId) {
    const user = await this.find(userId);
    if (!user) throw new Error("user not found");
    return user;
  }

  _removeId(array, id) {
    return array.filter((item) => !item.equals(id));
  }

  async _saveAll(models) {
    await Promise.all(models.map((model) => model.save()));
  }
}

module.exports = new UserService(User);
