<script setup>
import ArrowLeftIcon from "@/assets/icons/profile-icons/arrow-left.svg";
import CalendarIcon from "@/assets/icons/profile-icons/calendar-icon.svg";
</script>

<template>
  <div class="flex flex-col">
    <div class="flex h-[53px] gap-7 px-2 py-2 items-center">
      <a
        href="/"
        class="flex items-center justify-center rounded-full hover:bg-[#181919] hover:text-[#1d9bf0] transition-colors w-[34.75px] h-[34.75px]"
      >
        <ArrowLeftIcon />
      </a>
      <div class="flex flex-col">
        <p class="font-bold text-xl text-[#E6E9EA]">Isaac Asimov</p>
        <span class="text-[13px] text-[#71767A]">45 posts</span>
      </div>
    </div>

    <div class="relative group/cover">
      <img
        src="../../assets/img/user.png"
        class="h-[199px] w-full object-cover"
        alt="cover image"
      />

      <div class="avatar absolute -bottom-16 left-4">
        <div
          class="w-32 h-32 rounded-full border-4 border-black overflow-hidden relative"
        >
          <img
            src="../../assets/img/user.png"
            class="object-cover"
            alt="User Avatar"
          />
        </div>
      </div>
    </div>

    <div class="flex justify-end px-4 mt-3">
      <button
        class="px-4 py-1.5 text-[15px] font-bold text-[#EFF3F4] border border-[#6A7280] rounded-full hover:bg-[#eff3f41a] transition duration-300"
      >
        Edit profile
      </button>
    </div>

    <div class="flex flex-col gap-4 mt-8 px-4">
      <div class="flex flex-col">
        <span class="font-extrabold text-xl text-[#E6E9EA]">Isaac Asimov</span>
        <span class="text-sm text-[#71767A] text-[15px]">@asimova</span>
        <span class="flex items-center mt-3">
          <CalendarIcon />
          <span class="ml-1 text-[#71767A] text-[15px]">Joined April 2018</span>
        </span>
      </div>

      <div class="flex gap-5 text-sm -mt-1">
        <div class="flex gap-0.5 items-center">
          <span class="font-bold text-[#E6E9EA]">164</span>
          <span class="text-[#71767A]">Following</span>
        </div>
        <div class="flex gap-0.5 items-center">
          <span class="font-bold text-[#E6E9EA]">27</span>
          <span class="text-[#71767A]">Followers</span>
        </div>
      </div>
    </div>
  </div>
</template>
