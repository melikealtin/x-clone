<script setup>
import { ref } from "vue";
import Tabs from "../Share/Tabs.vue";

const tabs = ["Posts", "Replies", "Highlights", "Articles", "Media", "Likes"];
const activeTab = ref("Posts");
</script>

<template>
  <Tabs
    class="mt-4"
    :tabs="tabs"
    v-model:activeTab="activeTab"
    :defaultActiveTab="activeTab"
  />
</template>
