<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "normal",
    validator: (value) => ["normal", "large"].includes(value),
  },
});

const buttonClass = computed(() => {
  return [
    "rounded-full flex items-center justify-center font-bold bg-[#EFF3F4] hover:bg-[#EFF3F4] transition-color text-[#0f1419] ",
    props.size === "normal" ? "px-4 h-9" : "px-4 h-[52px] w-full text-[17px]",
  ];
});
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
