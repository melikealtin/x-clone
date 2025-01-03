<script setup>
import { ref } from "vue";
import { usePostStore } from "@/stores/post.js";
import ImageIcon from "@/assets/icons/create-post-icons/image-icon.svg";
import GifIcon from "@/assets/icons/create-post-icons/gif-icon.svg";
import EditIcon from "@/assets/icons/create-post-icons/edit-icon.svg";
import SettingIcon from "@/assets/icons/create-post-icons/setting-icon.svg";
import SmileIcon from "@/assets/icons/create-post-icons/smile-icon.svg";
import CalendarIcon from "@/assets/icons/create-post-icons/calendar-icon.svg";
import LocationIcon from "@/assets/icons/create-post-icons/location-icon.svg";

const icons = [
  ImageIcon,
  GifIcon,
  EditIcon,
  SettingIcon,
  SmileIcon,
  CalendarIcon,
  LocationIcon,
];

const postStore = usePostStore();
const postText = ref("");
const isFocused = ref(false);

const resetForm = () => {
  postText.value = "";
  isFocused.value = false;
};

const handleCreatePost = async () => {
  const trimmedText = postText.value.trim();

  if (!trimmedText) {
    console.error("post text cannot be empty");
    return;
  }

  try {
    await postStore.createPost(trimmedText);
    resetForm();
  } catch (error) {
    console.error(error.message);
  }
};
</script>

<template>
  <div class="w-full px-4 pt-4 border-b border-neutral">
    <div class="flex space-x-3">
      <img
        src="/img/user.png"
        alt="Profile Photo"
        class="w-10 h-10 rounded-full"
      />

      <div class="flex-1">
        <div v-if="isFocused" class="text-sm">
          <button
            class="flex items-center justify-center mb-4 -mt-1 px-3 py-0.5 text-sm font-bold text-[#1C9BEF] border border-[#536371] rounded-full hover:bg-[#061119]"
          >
            Everyone
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4 ml-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <textarea
          v-model="postText"
          @focus="isFocused = true"
          @blur="isFocused = false"
          @keydown.enter="handleCreatePost"
          class="w-full mt-2 bg-transparent outline-none leading-6 border-none resize-none text-lg placeholder-secondary text-[1.344rem] overflow-hidden"
          placeholder="What is happening?!"
          rows="1"
        ></textarea>

        <div v-if="isFocused" class="flex flex-col mt-2">
          <button
            class="flex items-center justify-center -ml-2 mt-2 text-sm font-bold text-[#1C9BEF] w-[10.75rem] rounded-full hover:bg-[#061119]"
          >
            <svg
              viewBox="0 0 24 24"
              class="w-4 h-4 mr-1"
              style="color: rgb(29, 155, 240)"
            >
              <path
                fill="currentColor"
                d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"
              ></path>
            </svg>
            <span>Everyone can reply</span>
          </button>
          <div class="w-full h-px bg-neutral -ml-2 mt-4 -mb-4"></div>
        </div>

        <div class="flex items-center justify-between mt-6 -ml-2">
          <div class="flex items-center space-x-4">
            <div class="flex-1 group flex items-center">
              <div
                v-for="(Icon, index) in icons"
                :key="index"
                class="w-[2.172rem] h-[2.172rem] mb-2 transition-colors flex items-center justify-center cursor-pointer hover:bg-[#1d9bf01a] rounded-full"
              >
                <component :is="Icon" />
              </div>
            </div>
          </div>

          <button
            :disabled="!postText.trim() || postStore.isLoading"
            :class="
              postText.trim()
                ? 'bg-[#D7DBDC] text-black'
                : 'bg-[#777A7A] text-black'
            "
            class="mb-3 text-15 font-bold px-4 py-1.5 rounded-full"
            @click="handleCreatePost"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
