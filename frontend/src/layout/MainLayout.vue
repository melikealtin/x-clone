<script setup>
import RightSidebar from "@/components/RightSidebar/RightSidebar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="w-[79.063rem] mx-auto flex">
    <Sidebar />
    <main class="flex-1 flex gap-[1.875rem]">
      <section class="flex-1 max-w-[37.5rem] border-x border-neutral">
        <router-view />
      </section>
      <RightSidebar />
    </main>
  </div>
</template>
