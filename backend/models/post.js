const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      autopopulate: { select: "username" },
    },

    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        autopopulate: { maxDepth: 1 },
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        autopopulate: { select: "username" },
      },
    ],
    reposts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        autopopulate: { maxDepth: 1 },
      },
    ],
    originalPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      autopopulate: { maxDepth: 1 },
    },
    isBookmarked: {
      type: Boolean,
      default: false,
    },
    attachments: [],
  },
  {
    timestamps: true,
  }
);

postSchema.plugin(autopopulate);

const PostModel = mongoose.model("Post", postSchema);

module.exports = PostModel;
