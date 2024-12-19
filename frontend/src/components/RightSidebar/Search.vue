<script setup>
import { ref } from "vue";
import SearchIcon from "@/assets/icons/search-icon.svg";
import CloseIcon from "@/assets/icons/close-icon.svg";

const searchInputValue = ref("");

const clearSearchInput = () => {
  searchInputValue.value = "";
};
</script>

<template>
  <div
    class="min-h-[32px] h-[53px] mb-3 flex items-center bg-black sticky top-0 z-10"
  >
    <label
      class="h-[43px] rounded-full bg-[#202327] w-full relative group border border-transparent focus-within:bg-black focus-within:border-[#1d9bf0]"
    >
      <div
        class="absolute w-[56px] h-full flex items-center justify-center top-0 left-0 pointer-events-none"
      >
        <SearchIcon />
      </div>

      <input
        v-model="searchInputValue"
        type="text"
        placeholder="Search"
        class="w-full h-full bg-transparent outline-none rounded-full placeholder-[#71767b] text-[15px] pl-[56px]"
      />

      <button
        v-if="searchInputValue"
        @click="clearSearchInput"
        class="w-[22px] h-[22px] bg-[#1d9bf0] rounded-full flex items-center justify-center min-w-[22px] absolute top-1/2 -translate-y-1/2 right-3 invisible group-focus-within:visible"
      >
        <CloseIcon />
      </button>

      <div
        class="absolute w-[350px] min-h-[100px] top-full w-full translate-y-px bg-black shadow-box max-h-[calc(80vh-53px)] text-center rounded-lg transition-all duration-100 opacity-0 scale-95 group-focus-within:opacity-100 group-focus-within:scale-100"
      >
        <p class="p-3 pt-5 text-[#71767b] text-[15px] leading-5">
          Try searching for people, lists, or keywords
        </p>
      </div>
    </label>
  </div>
</template>
