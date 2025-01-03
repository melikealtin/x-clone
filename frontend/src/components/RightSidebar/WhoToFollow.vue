<script setup>
import { onMounted, ref } from "vue";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const toggleFollow = async (user) => {
  try {
    const response = await userStore.followUser(user._id);
    console.log("error", response);

    if (response) {
      user.isFollowing = !user.isFollowing;
    }
  } catch (error) {
    console.error("error", error);
  }
};

onMounted(async () => {
  try {
    await userStore.fetchAllUsers();
  } catch (error) {
    console.error("error", error);
  }
});
</script>

<template>
  <section class="mb-4 rounded-2xl border border-neutral">
    <h5
      class="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#e7e9ea]"
    >
      Who to follow
    </h5>

    <div v-for="(user, index) in userStore.users.slice(1)" :key="user.username">
      <div
        class="py-3 px-4 flex items-center gap-3 transition-colors hover:bg-white/[0.03] w-full"
      >
        <img
          :src="`/img/user${index + 1}.png`"
          class="w-10 h-10 rounded-full object-cover"
          alt="Profile picture"
        />
        <div class="flex-1 max-w-full flex flex-col text-left">
          <div
            class="text-15 text-[#e7e9ea] leading-5 font-bold flex items-center"
          >
            {{ user.name }}
          </div>
          <div class="text-15 text-secondary">@{{ user.username }}</div>
        </div>
        <div class="pl-10">
          <button
            @click.stop="toggleFollow(user)"
            :class="[
              'px-4 py-1.5 rounded-full text-sm font-bold transition-colors duration-200',
              user.isFollowing
                ? 'bg-transparent border border-[#536370] text-white hover:bg-[#210C0D] hover:border-[#670710] hover:text-[#F4212D]'
                : 'bg-[#EFF3F4] border border-[#EFF3F4] text-[#0f1419] hover:bg-[#D7DBDC]',
            ]"
            class="group"
          >
            <span class="group-hover:hidden" v-if="user.isFollowing"
              >Following</span
            >
            <span class="hidden group-hover:block" v-if="user.isFollowing"
              >Unfollow</span
            >
            <span v-else>Follow</span>
          </button>
        </div>
      </div>
    </div>

    <div
      class="py-3 px-4 hover:bg-white/[0.03] transition-colors text-[#1d9bf0] text-15 font-bold cursor-pointer"
    >
      Show more
    </div>
  </section>
</template>
