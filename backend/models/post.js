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
    },

    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    reposts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    originalPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
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
