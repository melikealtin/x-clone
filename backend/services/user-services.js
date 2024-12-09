const BaseService = require("./base-service");
const PostService = require("./post-sevice");
const User = require("../models/user");

class UserService extends BaseService {
  async createPost(userId, content) {
    const user = await this.find(userId);
    if (!user) throw new Error("user not found");

    const post = await PostService.insert({
      content,
      author: userId,
    });

    user.posts.push(post._id);
    await user.save();

    return post;
  }

  async like(userId, postId) {
    const user = await this.find(userId);
    if (!user) throw new Error("user not found");

    const post = await PostService.find(postId);
    if (!post) throw new Error("post not found");

    if (!user.likedPosts.includes(post._id)) {
      user.likedPosts.push(post._id);
      post.likes.push(user._id);

      await Promise.all([user.save(), post.save()]);
    }

    return post;
  }

  async follow(followerId, followingId) {
    const follower = await User.findById(followerId);
    const following = await User.findById(followingId);

    if (!follower || !following) throw new Error("user not found");

    if (!follower.following.includes(followingId)) {
      follower.following.push(followingId);
      following.followers.push(followerId);

      await Promise.all([follower.save(), following.save()]);
    }

    return {
      message: `${follower.username} is following ${following.username}`,
    };
  }

  async repost(userId, originalPostId, content = "") {
    const user = await this.find(userId);
    if (!user) throw new Error("user not found");

    const originalPost = await PostService.find(originalPostId);
    if (!originalPost) throw new Error("original post not found");

    const repost = await PostService.insert({
      author: userId,
      content,
      originalPost: originalPostId,
    });

    user.posts.push(repost._id);
    originalPost.reposts.push(repost._id);

    await Promise.all([user.save(), originalPost.save()]);

    return {
      message: `repost created by ${user.username} for post ${originalPostId}`,
      repost,
    };
  }
}

module.exports = new UserService(User);
