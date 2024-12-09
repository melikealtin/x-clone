const BaseService = require("./base-service");
const Post = require("../models/post");

class PostService extends BaseService {}

module.exports = new PostService(Post);
