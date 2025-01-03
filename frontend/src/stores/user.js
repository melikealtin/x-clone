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

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    currentUserId: "676bca776c22d412b8f02a89",
    users: [],
    isLoading: false,
    error: null,
  }),

  actions: {
    fetchUser: handleAsync(async function () {
      const response = await axiosInstance.get(`/users/${this.currentUserId}`);
      this.user = response.data;
    }),

    fetchAllUsers: handleAsync(async function () {
      const response = await axiosInstance.get(`/users`);
      this.users = response.data;
    }),

    followUser: handleAsync(async function (followingId) {
      const response = await axiosInstance.post(
        `/users/${this.currentUserId}/follow/${followingId}`
      );

      return response.data;
    }),
  },
});
