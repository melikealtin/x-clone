<script setup>
import { ref } from "vue";
import MoreIcon from "@/assets/icons/sidebar-icons/trend-more-icon.svg";

const topics = ref([
  {
    title: "TchiboSurprizi",
    type: "tag",
    description: "Great Deals December 17-19",
    promoted: "Promoted by Tchibo Türkiye",
  },
  {
    title: "faiz",
    type: "tag",
    posts: "2,205",
    trendingIn: "Trending in Turkey",
  },
  {
    title: "TUSAŞ",
    posts: "1,136",
    trendingIn: "Business & finance · Trending",
  },
  {
    title: "Angelino",
    posts: "1,103",
    trendingIn: "Sports · Trending",
  },
]);
</script>

<template>
  <div
    v-for="(topic, index) in topics"
    :key="index"
    class="py-3 px-4 transition-colors hover:bg-white/[0.03] relative cursor-pointer"
  >
    <div v-if="index === 0" class="relative text-[0.813rem] leading-4">
      <div class="text-15 font-bold leading-5">
        <span v-if="topic.type === 'tag'">#</span>{{ topic.title }}
      </div>
      <button class="more-icon-btn">
        <MoreIcon />
      </button>
    </div>

    <div v-else class="relative text-[0.813rem] text-secondary leading-4">
      <span>{{ topic.trendingIn }}</span>
      <button class="more-icon-btn">
        <MoreIcon />
      </button>
    </div>

    <div v-if="index !== 0" class="text-15 font-bold leading-5 mt-0.5">
      <span v-if="topic.type === 'tag'">#</span>{{ topic.title }}
    </div>

    <div v-if="topic.description" class="text-15 text-secondary leading-4 mt-1">
      {{ topic.description }}
    </div>

    <div
      v-if="topic.posts"
      class="text-[0.813rem] text-secondary mt-1 leading-4"
    >
      {{ topic.posts }} posts
    </div>

    <div
      v-if="topic.promoted"
      class="text-[0.813rem] text-secondary flex items-center gap-1 mt-1 leading-4"
    >
      <svg viewBox="0 0 24 24" width="13" height="13">
        <path
          fill="currentColor"
          d="M19.498 3h-15c-1.381 0-2.5 1.12-2.5 2.5v13c0 1.38 1.119 2.5 2.5 2.5h15c1.381 0 2.5-1.12 2.5-2.5v-13c0-1.38-1.119-2.5-2.5-2.5zm-3.502 12h-2v-3.59l-5.293 5.3-1.414-1.42L12.581 10H8.996V8h7v7z"
        ></path>
      </svg>
      {{ topic.promoted }}
    </div>
  </div>

  <div
    class="py-3 px-4 hover:bg-white/[0.03] transition-colors text-[#1d9bf0] text-15 cursor-pointer"
  >
    Show more
  </div>
</template>
