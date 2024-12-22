<script setup>
import Logo from "@/components/Sidebar/Logo.vue";
import SidebarMenu from "@/components/Sidebar/SidebarMenu.vue";
import SidebarProfile from "./SidebarProfile.vue";
</script>

<template>
  <aside
    class="w-[17.188rem] max-h-screen min-h-screen flex flex-col sticky top-0 pl-2"
  >
    <Logo />
    <SidebarMenu />
    <SidebarProfile />
  </aside>
</template>
