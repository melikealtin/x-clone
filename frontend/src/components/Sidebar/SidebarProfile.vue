<script setup>
import ProfileMoreIcon from "@/assets/icons/sidebar-icons/profile-more-icon.svg";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>

<template>
  <div class="mt-auto mr-2">
    <Popover class="relative">
      <PopoverButton
        class="my-3 p-3 rounded-full hover:bg-[#eff3f41a] w-full flex text-left items-center outline-none"
      >
        <img
          src="../../assets/img/user.png"
          alt="User Photo"
          class="w-10 h-10 rounded-full"
        />

        <div class="mx-3 text-[15px]">
          <h6 class="font-bold">Isaac Asimov</h6>
          <div class="text-[#71767b]">@asimova</div>
        </div>
        <ProfileMoreIcon class="w-[18px] ml-auto" />
      </PopoverButton>
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="w-[300px] py-3 absolute bottom-[80px] z-[1] bg-black left-1/2 -translate-x-1/2 shadow-box rounded-2xl"
        >
          <button
            class="py-3 px-4 text-left w-full hover:bg-[#eff3f41a] transition-colors text-[#E6E9EA] text-[15px] leading-[20px]"
          >
            Add an existing account
          </button>
          <button
            class="py-3 px-4 text-left w-full hover:bg-[#eff3f41a] transition-colors text-[#E6E9EA] text-[15px] leading-[20px]"
          >
            Log out @asomivoa
          </button>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
