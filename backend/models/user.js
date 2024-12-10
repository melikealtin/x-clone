const mongoose = require("mongoose");
const autopopulate = require("mongoose-autopopulate");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "please enter a valid email address",
      ],
    },

    profilePicture: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      maxlength: 160,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    websiteURL: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    accountType: {
      type: String,
      enum: ["standard", "premium"],
      default: "standard",
    },

    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        autopopulate: { select: "username name", maxDepth: 1 },
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        autopopulate: { select: "username name", maxDepth: 1 },
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        autopopulate: { select: "content author", maxDepth: 2 },
      },
    ],
    likedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        autopopulate: { select: "content author", maxDepth: 1 },
      },
    ],
    bookmarkedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        autopopulate: { select: "content author", maxDepth: 1 },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(autopopulate);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
