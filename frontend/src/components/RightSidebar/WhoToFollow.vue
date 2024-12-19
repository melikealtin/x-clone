<script setup>
import whoToFollow from "@/data/whoToFollow.json";
import Button from "@/components/Share/Button.vue";
</script>

<template>
  <section class="mb-4 rounded-2xl border border-[#2f3336]">
    <h5
      class="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]"
    >
      Who to follow
    </h5>

    <div v-for="user in whoToFollow" :key="user.username">
      <button
        class="py-3 px-4 flex items-center gap-3 transition-colors hover:bg-white/[0.03] w-full"
      >
        <img
          :src="user.profileImage"
          class="w-10 h-10 rounded-full object-cover"
          alt="Profile picture"
        />
        <div class="flex-1 max-w-full flex flex-col text-left">
          <div
            class="text-[15px] text-[#e7e9ea] leading-5 font-bold flex items-center"
          >
            {{ user.name }}
          </div>
          <div class="text-[15px] text-[#71767b]">
            {{ user.username }}
          </div>
        </div>
        <div class="pl-10">
          <Button size="small"> Follow </Button>
        </div>
      </button>
    </div>

    <div
      class="py-3 px-4 hover:bg-white/[0.03] transition-colors text-[#1d9bf0] text-[15px] font-bold cursor-pointer"
    >
      Show more
    </div>
  </section>
</template>
