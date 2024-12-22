<script setup>
import { ref } from "vue";

const props = defineProps({
  tabs: { type: Array, required: true },
  defaultActiveTab: { type: String, default: "" },
});
const emit = defineEmits(["update:activeTab"]);

const activeTab = ref(props.defaultActiveTab);

const setActiveTab = (tabName) => {
  activeTab.value = tabName;
  emit("update:activeTab", tabName);
};
</script>

<template>
  <header class="sticky top-0 z-10 bg-black/[.45] backdrop-blur-md">
    <div class="flex text-15">
      <button
        v-for="tab in tabs"
        :key="tab"
        type="button"
        :class="[
          'flex-auto text-center hover:bg-tertiary',
          activeTab === tab
            ? 'text-white font-bold'
            : ' font-medium text-secondary',
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
    <div class="border-b border-neutral sticky top-[3.313rem] z-10"></div>
  </header>
</template>
