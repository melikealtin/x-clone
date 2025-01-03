<script setup>
import { useUserStore } from "@/stores/user";
import { usePostStore } from "@/stores/post";
import { ref, onMounted, computed } from "vue";
import Tabs from "../Share/Tabs.vue";
import Post from "../Share/Post.vue";

const tabs = ["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"];
const activeTab = ref("Posts");

const userStore = useUserStore();
const postStore = usePostStore();

const sortedPosts = computed(() => {
  const allPosts = postStore.posts || [];

  const userPosts = allPosts.filter(
    (post) => post.author._id === userStore.currentUserId
  );

  const mainPosts = userPosts.filter((post) => !post.originalPost);

  return [...mainPosts].reverse();
});

onMounted(async () => {
  await Promise.all([userStore.fetchUser(), postStore.fetchAllPosts()]);
});
</script>

<template>
  <Tabs
    class="mt-4"
    :tabs="tabs"
    v-model:activeTab="activeTab"
    :defaultActiveTab="activeTab"
  />

  <div class="mt-2" v-if="activeTab === 'Posts'">
    <Post v-for="post in sortedPosts" :key="post._id" :post="post" />
  </div>
</template>
