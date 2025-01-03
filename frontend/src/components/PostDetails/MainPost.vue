<script setup>
import CommentIcon from "@/assets/icons/content-icons/comment-icon.svg";
import RepostIcon from "@/assets/icons/content-icons/repost-icon.svg";
import FocusRepostIcon from "@/assets/icons/content-icons/focus-repost-icon.svg";
import LikeIcon from "@/assets/icons/content-icons/like-icon.svg";
import FocusLikeIcon from "@/assets/icons/content-icons/focus-like-icon.svg";
import BookmarkIcon from "@/assets/icons/content-icons/bookmark-icon.svg";
import FocusBookmarkIcon from "@/assets/icons/content-icons/focus-bookmark-icon.svg";
import ShareIcon from "@/assets/icons/content-icons/share-icon.svg";
import EditIcon from "@/assets/icons/content-icons/edit-icon.svg";
import MoreIcon from "@/assets/icons/sidebar-icons/trend-more-icon.svg";

const props = defineProps({
  displayPost: { type: Object, required: true },
  authorUsername: { type: String, required: true },
  authorName: { type: String, required: true },
  postContent: { type: String, required: true },
  postDate: { type: String, required: true },
  repliesCount: { type: Number, required: true },
  repostsCount: { type: Number, required: true },
  likesCount: { type: Number, required: true },
  userAvatar: { type: String, required: true },
  isLiked: { type: Boolean, required: true },
  isReposted: { type: Boolean, required: true },
  isBookmarked: { type: Boolean, required: true },
  handleLike: { type: Function, required: true },
  handleRepost: { type: Function, required: true },
  handleBookmark: { type: Function, required: true },
});
</script>

<template>
  <div class="px-4 py-3">
    <div class="flex justify-between">
      <div class="flex items-start gap-2">
        <img
          :src="userAvatar"
          :alt="`${authorName}'s Photo`"
          class="w-10 h-10 rounded-full object-cover"
        />
        <div class="flex flex-col">
          <div class="flex items-center">
            <span class="font-bold text-15 hover:underline">{{
              authorName
            }}</span>
            <svg class="h-[1.172rem] ml-0.5" viewBox="0 0 22 22">
              <path
                fill="#1C9BEF"
                d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
              />
            </svg>
          </div>
          <span class="text-[#71767b] -mt-1">@{{ authorUsername }}</span>
        </div>
      </div>

      <div class="flex items-center text-[#71767b] -mr-2">
        <button
          class="p-2 -mr-2 hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] rounded-full transition-colors"
        >
          <EditIcon class="w-5 h-5" />
        </button>
        <button
          class="p-2 hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] rounded-full transition-colors"
        >
          <MoreIcon class="w-5 h-5" />
        </button>
      </div>
    </div>

    <p class="mt-3 text-[17px] whitespace-pre-wrap">{{ postContent }}</p>

    <div class="flex items-center mt-3 text-[#71767b] text-15">
      <time>{{ postDate }}</time>
      <span class="px-1">·</span>
      <span>Oct 27, 2024 </span>
    </div>

    <div
      class="flex items-center justify-between py-1 mt-3 text-[#71767b] border-y border-[#2f3336]"
    >
      <button
        class="p-2 hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] rounded-full transition-colors flex items-center gap-1"
      >
        <CommentIcon class="w-5 h-5" />
        <span class="font-bold hover:text-[#1d9bf0]">{{ repliesCount }}</span>
      </button>

      <button
        class="p-2 rounded-full transition-colors flex items-center gap-1"
        :class="
          isReposted
            ? 'text-[#00BA7C] hover:bg-[#00ba7c1a]'
            : 'hover:bg-[#00ba7c1a] hover:text-[#00ba7c]'
        "
        @click="handleRepost"
      >
        <component
          :is="isReposted ? FocusRepostIcon : RepostIcon"
          class="w-5 h-5"
        />
        <span class="font-bold" :class="isReposted ? 'text-[#00BA7C]' : ''">{{
          repostsCount
        }}</span>
      </button>

      <button
        class="p-2 rounded-full transition-colors flex items-center gap-1"
        :class="
          isLiked
            ? 'text-[#F91880] hover:bg-[#f918801a]'
            : 'hover:bg-[#f918801a] hover:text-[#f91880]'
        "
        @click="handleLike"
      >
        <component :is="isLiked ? FocusLikeIcon : LikeIcon" class="w-5 h-5" />
        <span class="font-bold" :class="isLiked ? 'text-[#F91880]' : ''">{{
          likesCount
        }}</span>
      </button>

      <button
        class="p-2 rounded-full transition-colors flex items-center gap-1"
        :class="
          isBookmarked
            ? 'text-[#1d9bf0] hover:bg-[#1d9bf01a]'
            : 'hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]'
        "
        @click="handleBookmark"
      >
        <component
          :is="isBookmarked ? FocusBookmarkIcon : BookmarkIcon"
          class="w-5 h-5"
        />
      </button>

      <button
        class="p-2 hover:bg-[#1d9bf01a] hover:text-[#1d9bf0] rounded-full transition-colors flex items-center gap-1"
      >
        <ShareIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
