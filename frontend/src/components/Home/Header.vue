<script setup>
import { ref } from "vue";

const tabs = ["For you", "Following", "AI"];
const tabContents = {
  Following: "Following.",
  AI: "AI.",
};

const activeTab = ref("For you");

const setActiveTab = (tabName) => {
  activeTab.value = tabName;
};

function autoResize(event) {
  const textarea = event.target;
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}
</script>

<template>
  <header class="sticky top-0 z-10 bg-black/[.45] backdrop-blur-md">
    <div class="flex text-[15px]">
      <button
        v-for="tab in tabs"
        :key="tab"
        type="button"
        :class="[
          'flex-auto text-center hover:bg-[#eff3f41a]',
          activeTab === tab ? 'text-white font-bold' : 'text-gray-500',
        ]"
        @click="setActiveTab(tab)"
      >
        <span class="inline-flex h-[3.333rem] items-center relative">
          {{ tab }}

          <span
            v-if="activeTab === tab"
            class="absolute left-0 bottom-0 h-[4px] w-full bg-[#1C9BEF] rounded-full"
          ></span>
        </span>
      </button>
    </div>
    <div class="border-b border-[#2f3336] sticky top-[3.313rem] z-10"></div>
  </header>

  <!-- <main class="p-4">
    <h2 class="text-lg font-bold mb-4">Current Tab: "{{ activeTab }}"</h2>
    <p class="text-gray-400">
      {{ tabContents[activeTab] || "no content found" }}
    </p>
  </main> -->
</template>
