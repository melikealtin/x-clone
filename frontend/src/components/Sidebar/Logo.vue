<script setup>
import Logo from "@/assets/icons/logo.svg";
</script>

<template>
  <div class="py-0.5">
    <router-link :to="{ name: 'home' }">
      <Logo
        class="w-[3.125rem] h-[3.125rem] p-2.5 rounded-full flex items-center justify-center hover:bg-tertiary transition-colors"
      />
    </router-link>
  </div>
</template>
