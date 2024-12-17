<script setup>
import Logo from "@/assets/icons/logo.svg";
</script>

<template>
  <div class="py-0.5">
    <router-link :to="{ name: 'home' }">
      <Logo
        class="w-[50px] h-[50px] p-2 rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-colors"
      />
    </router-link>
  </div>
</template>
