<script setup>
import Logo from "@/components/Sidebar/Logo.vue";
import SidebarMenu from "@/components/Sidebar/SidebarMenu.vue";
import SidebarProfile from "./SidebarProfile.vue";
</script>

<template>
  <aside class="w-[275px] max-h-screen min-h-screen flex flex-col">
    <Logo />
    <SidebarMenu />
    <SidebarProfile />
  </aside>
</template>
