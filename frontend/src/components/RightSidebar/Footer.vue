<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const footerLinks = [
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Imprint",
  "Accessibility",
  "Ads info",
];

const dropdownLinks = [
  "About",
  "Download the X app",
  "X for Business",
  "Developers",
];
</script>

<template>
  <footer
    class="mb-4 px-4 flex flex-wrap gap-2 items-center justify-start text-secondary text-[0.813rem] leading-3"
  >
    <template v-for="label in footerLinks" :key="label">
      <a href="/" class="hover:underline">{{ label }}</a>
    </template>

    <Popover class="relative inline-flex leading-4">
      <PopoverButton
        class="outline-none hover:underline inline-flex items-center"
      >
        More
        <svg viewBox="0 0 24 24" class="h-[1em] px-0.5">
          <path
            fill="currentColor"
            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          />
        </svg>
      </PopoverButton>

      <PopoverPanel
        class="w-[11.25rem] bg-black shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden z-10"
      >
        <template v-for="label in dropdownLinks" :key="label">
          <a
            href="/"
            class="py-3 px-4 text-white text-15 leading-5 font-bold hover:bg-[#16181c] transition-colors"
          >
            {{ label }}
          </a>
        </template>
      </PopoverPanel>
    </Popover>

    <span class="w-full text-start text-secondary">© 2024 X Corp.</span>
  </footer>
</template>
