<script setup>
import RightSidebar from "@/components/RightSidebar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="w-[1265px] mx-auto flex">
    <Sidebar />
    <main class="flex-1 flex gap-[30px]">
      <section class="flex-1 max-w-[600px] border-x border-[#2f3336]">
        <router-view />
      </section>
      <RightSidebar />
    </main>
  </div>
</template>
