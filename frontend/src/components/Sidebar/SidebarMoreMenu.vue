<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import MoreIcon from "@/assets/icons/sidebar-icons/more-icon.svg";
import ListIcon from "@/assets/icons/more-menu-icons/lists-icon.svg";
import BookmarksIcon from "@/assets/icons/more-menu-icons/bookmarks-icon.svg";
import MonetizationIcon from "@/assets/icons/more-menu-icons/monetization-icon.svg";
import VerifiedOrgsIcon from "@/assets/icons/more-menu-icons/verified-icon.svg";
import AdsIcon from "@/assets/icons/more-menu-icons/ads-icon.svg";
import JobsIcon from "@/assets/icons/more-menu-icons/jobs-icon.svg";
import SpaceIcon from "@/assets/icons/more-menu-icons/space-icon.svg";
import SettingsIcon from "@/assets/icons/more-menu-icons/settings-icon.svg";

const menuItems = [
  { name: "Lists", icon: ListIcon },
  { name: "Bookmarks", icon: BookmarksIcon },
  { name: "Monetization", icon: MonetizationIcon },
  { name: "Verified Orgs", icon: VerifiedOrgsIcon },
  { name: "Ads", icon: AdsIcon },
  { name: "Jobs", icon: JobsIcon },
  { name: "Create your Space", icon: SpaceIcon },
  { name: "Settings and privacy", icon: SettingsIcon },
];
</script>

<template>
  <Popover class="relative">
    <PopoverButton class="block group outline-none">
      <div
        class="px-3 py-2 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-tertiary cursor-pointer"
      >
        <component :is="MoreIcon" class="w-6 h-6" />
        <div class="pr-4 text-xl">More</div>
      </div>
    </PopoverButton>

    <PopoverPanel
      class="w-[19.875rem] absolute bottom-0 left-0 bg-black shadow-box rounded-xl overflow-hidden"
    >
      <button
        v-for="item in menuItems"
        :key="item.name"
        class="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-tertiary cursor-pointer"
      >
        <component :is="item.icon" class="w-6 h-6" />
        <div class="pr-4 text-xl font-bold">{{ item.name }}</div>
      </button>
    </PopoverPanel>
  </Popover>
</template>

<style scoped></style>
