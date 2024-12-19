<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "normal",
    validator: (value) =>
      ["normal", "medium", "large", "small"].includes(value),
  },
});

const buttonClass = computed(() => {
  return [
    "rounded-full flex items-center justify-center font-bold transition-color",
    props.size === "normal"
      ? "px-4 h-9 bg-[#EFF3F4] hover:bg-[#EFF3F4] text-[#0f1419]"
      : props.size === "large"
      ? "px-4 h-[52px] w-full text-[17px] bg-[#EFF3F4] hover:bg-[#EFF3F4] text-[#0f1419]"
      : props.size === "medium"
      ? "min-h-[36px] w-[106px] bg-[#1d9bf0] text-[#ffffff] hover:bg-[#1d9bf0]"
      : props.size === "small"
      ? "px-4 h-8 text-sm bg-[#EFF3F4] hover:bg-[#EFF3F4] text-[#0f1419]"
      : "",
  ];
});
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
