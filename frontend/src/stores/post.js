import { defineStore } from "pinia";
import axiosInstance from "@/lib/axios";

function handleAsync(fn) {
  return async function (...args) {
    this.isLoading = true;
    this.error = null;

    try {
      return await fn.apply(this, args);
    } catch (error) {
      this.error = error.message;
    } finally {
      this.isLoading = false;
    }
  };
}

export const usePostStore = defineStore("post", {
  state: () => ({
    currentUserId: "676bca776c22d412b8f02a89",
    posts: [],
    selectedPost: null,
    isLoading: false,
    error: null,
  }),

  actions: {
    fetchAllPosts: handleAsync(async function () {
      const { data } = await axiosInstance.get("/posts");
      this.posts = data;
    }),

    fetchPostById: handleAsync(async function (postId) {
      const { data } = await axiosInstance.get(`/posts/${postId}`);
      this.selectedPost = data;
      return data;
    }),

    createPost: handleAsync(async function (content) {
      const { data } = await axiosInstance.post(
        `/users/${this.currentUserId}/posts`,
        {
          content,
        }
      );
      await this.fetchAllPosts();
      return data;
    }),

    likePost: handleAsync(async function (postId) {
      const { data } = await axiosInstance.post(
        `/users/${this.currentUserId}/posts/${postId}/like`
      );

      const updatedPost = data.post;
      const postIndex = this.posts.findIndex((post) => post._id === postId);

      if (postIndex !== -1) {
        this.posts[postIndex] = updatedPost;
      }

      return updatedPost;
    }),

    repost: handleAsync(async function (originalPostId, content = "") {
      const { data } = await axiosInstance.post(
        `/users/${this.currentUserId}/repost/${originalPostId}`,
        { content }
      );

      await this.fetchAllPosts();
      return data;
    }),

    bookmarkPost: handleAsync(async function (postId) {
      const { data } = await axiosInstance.post(
        `/users/${this.currentUserId}/bookmark/${postId}`
      );

      const updatedPosts = this.posts.map((post) => {
        if (post.originalPost?._id === postId) {
          post.originalPost.isBookmarked = !post.originalPost.isBookmarked;
        }

        if (post._id === postId) {
          post.isBookmarked = !post.isBookmarked;
        }
        return post;
      });

      this.posts = updatedPosts;

      return data;
    }),

    replyToPost: handleAsync(async function (postId, content) {
      const { data } = await axiosInstance.post(`/posts/${postId}/reply`, {
        author: this.currentUserId,
        content,
      });

      await this.fetchPostById(postId);

      return data;
    }),
  },
});
