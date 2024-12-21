<script setup>
import { ref } from "vue";
import Tabs from "../Share/Tabs.vue";

const tabs = ["For you", "Following", "AI"];
const activeTab = ref("For you");
</script>

<template>
  <Tabs
    :tabs="tabs"
    v-model:activeTab="activeTab"
    :defaultActiveTab="activeTab"
  />
</template>
