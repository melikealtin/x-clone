const BaseService = require("./base-service");
const Post = require("../models/post");

class PostService extends BaseService {
  async reply(postId, content, author) {
    const parentPost = await this.find(postId);
    if (!parentPost) throw new Error("parent post not found");

    const reply = await this.insert({
      content,
      author,
      originalPost: postId,
    });

    parentPost.replies.push(reply._id);
    await parentPost.save();

    return reply;
  }
}

module.exports = new PostService(Post);
