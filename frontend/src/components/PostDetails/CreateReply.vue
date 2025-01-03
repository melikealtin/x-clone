<script setup>
import { ref } from "vue";
import { usePostStore } from "@/stores/post.js";
import ImageIcon from "@/assets/icons/create-post-icons/image-icon.svg";
import GifIcon from "@/assets/icons/create-post-icons/gif-icon.svg";
import EditIcon from "@/assets/icons/create-post-icons/edit-icon.svg";
import SmileIcon from "@/assets/icons/create-post-icons/smile-icon.svg";
import LocationIcon from "@/assets/icons/create-post-icons/location-icon.svg";

const icons = [ImageIcon, GifIcon, EditIcon, SmileIcon, LocationIcon];

const props = defineProps({
  postId: {
    type: String,
    required: true,
  },
});

const postStore = usePostStore();
const postText = ref("");
const isFocused = ref(false);

const resetForm = () => {
  postText.value = "";
  isFocused.value = false;
};

const handleCreateReply = async () => {
  const trimmedText = postText.value.trim();

  if (!trimmedText) {
    console.error("Reply text cannot be empty");
    return;
  }

  try {
    await postStore.replyToPost(props.postId, trimmedText);
    resetForm();
  } catch (error) {
    console.error("Error posting reply:", error.message);
  }
};
</script>

<template>
  <div class="w-full px-4 pb-4">
    <div class="flex space-x-3">
      <img
        src="/img/user.png"
        alt="Profile Photo"
        class="w-10 h-10 rounded-full"
      />

      <div class="flex-1">
        <textarea
          v-model="postText"
          @focus="isFocused = true"
          @blur="isFocused = false"
          @keydown.enter="handleCreateReply"
          class="w-full mt-2 bg-transparent outline-none leading-6 border-none resize-none text-xl placeholder-secondary text-[1.344rem] overflow-hidden"
          placeholder="Post your reply"
          rows="1"
        ></textarea>

        <div v-if="isFocused" class="flex mt-8 -ml-2">
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
        </div>

        <div class="flex items-center justify-between relative my-2">
          <button
            :disabled="!postText.trim() || postStore.isLoading"
            :class="
              postText.trim()
                ? 'bg-[#D7DBDC] text-black'
                : 'bg-[#777A7A] text-black'
            "
            class="mb-3 text-15 font-bold px-4 py-1.5 rounded-full ml-auto absolute right-0 -top-10"
            @click="handleCreatePost"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
