<script setup>
import ProfileMoreIcon from "@/assets/icons/sidebar-icons/profile-more-icon.svg";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>

<template>
  <div class="mt-auto mr-2">
    <Popover class="relative">
      <PopoverButton
        class="my-3 p-3 rounded-full hover:bg-tertiary w-full flex text-left items-center outline-none transition-colors"
      >
        <img
          src="../../assets/img/user.png"
          alt="User Photo"
          class="w-10 h-10 rounded-full"
        />

        <div class="mx-3 text-15">
          <h6 class="font-bold">Isaac Asimov</h6>
          <div class="text-secondary">@asimova</div>
        </div>
        <ProfileMoreIcon class="w-[1.125rem] ml-auto" />
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
          class="w-[18.75rem] py-3 absolute bottom-[5rem] z-[1] bg-black left-1/2 -translate-x-1/2 shadow-box rounded-2xl"
        >
          <button class="modal-btn">Add an existing account</button>
          <button class="modal-btn">Log out @asomivoa</button>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>
