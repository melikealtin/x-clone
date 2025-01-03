<script setup>
import { ref, onMounted, computed } from "vue";
import { usePostStore } from "@/stores/post";

import Tabs from "../Share/Tabs.vue";
import Post from "@/components/Share/Post.vue";
import CreatePost from "@/components/Home/CreatePost.vue";

const tabs = ["For you", "Following", "AI"];
const activeTab = ref("For you");

const postStore = usePostStore();

const sortedPosts = computed(() => {
  const posts = postStore.posts || [];

  const mainPosts = posts.filter((post) => {
    return !posts.some((p) =>
      p.replies?.some((reply) => reply._id === post._id)
    );
  });

  return [...mainPosts].reverse();
});

onMounted(async () => {
  await postStore.fetchAllPosts();
});
</script>

<template>
  <Tabs
    :tabs="tabs"
    v-model:activeTab="activeTab"
    :defaultActiveTab="activeTab"
  />

  <CreatePost />

  <div v-if="activeTab === 'For you'">
    <Post v-for="post in sortedPosts" :key="post._id" :post="post" />
  </div>
</template>
