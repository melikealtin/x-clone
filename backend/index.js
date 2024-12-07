class User {
  constructor(name, username, email) {
    this.name = name;
    this.username = username;
    this.mail = email;

    this.profilePicture = "";
    this.bio = "";
    this.location = "";
    this.websiteURL = "";
    this.createdAt = new Date();
    this.isVerified = false;
    this.accountType = "";

    this.followers = [];
    this.following = [];
    this.posts = [];
    this.likedPosts = [];
    this.bookmarkedPosts = [];
  }

  follow(user) {
    this.following.push(user);
    user.followers.push(this);
  }

  createPost(post) {
    this.posts.push(post);
  }

  like(post) {
    if (!this.likedPosts.includes(post)) {
      this.likedPosts.push(post);
      post.likes.push(this);
    }
  }

  repost(originalPost, content = "") {
    const repost = new Post(content, this);
    repost.originalPost = originalPost;
    this.posts.push(repost);
    originalPost.reposts.push(repost);
  }
}

class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;

    this.createdAt = new Date();
    this.replies = [];
    this.likes = [];
    this.reposts = [];
    this.originalPost = null;
    this.isBookmarked = false;
    this.attachments = [];
  }

  reply(post) {}
  like(user) {}
  repost(user) {}
}

const melike = new User("Melike Altın", "spirple", "spirple@test.com");
const asimov = new User("Asimov", "asimovoa", "asimov@test.com");

const post1 = new Post("have a sweet day <3", melike);
const post2 = new Post(
  "if (day.isSweet) { mood = 'awesome'; } else { mood = 'whatever, next!'; } :) ",
  asimov
);

melike.createPost(post1);
asimov.createPost(post2);

melike.repost(post2, "Hahah yes, next one please :d");
melike.like(post2);

// console.log(melike, asimov);
