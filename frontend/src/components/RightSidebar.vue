<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <aside class="w-[275px] min-h-screen">
    <h2 class="text-2xl font-bold mb-4">X clone</h2>
    <nav class="flex flex-col space-y-2">
      <RouterLink to="/" class="text-gray-700 hover:text-blue-500 font-medium"
        >home</RouterLink
      >
      <RouterLink
        to="/notifications"
        class="text-gray-700 hover:text-blue-500 font-medium"
        >notifications</RouterLink
      >
    </nav>
  </aside>
</template>
