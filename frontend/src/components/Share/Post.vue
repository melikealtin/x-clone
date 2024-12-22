<script setup>
import { ref } from "vue";
import CommentIcon from "@/assets/icons/content-icons/comment-icon.svg";
import RepostIcon from "@/assets/icons/content-icons/repost-icon.svg";
import LikeIcon from "@/assets/icons/content-icons/like-icon.svg";
import BarChartIcon from "@/assets/icons/content-icons/bar-chart-icon.svg";
import BookmarkIcon from "@/assets/icons/content-icons/bookmark-icon.svg";
import ShareIcon from "@/assets/icons/content-icons/share-icon.svg";
import MoreIcon from "@/assets/icons/sidebar-icons/trend-more-icon.svg";

const postContent = ref(
  "“Knowledge does not guarantee happiness, but without it, happiness is impossible.”"
);
</script>

<template>
  <div
    class="px-4 py-3 gap-3 border-b border-[#2f3336] flex relative before:absolute before:z-[-1] before:transition-colors before:opacity-20 before:inset-0 before:hover:bg-[#2f3336] cursor-pointer"
  >
    <img
      src="../../assets/img/user.png"
      alt="User Photo"
      class="w-10 h-10 rounded-full object-cover"
    />

    <div class="flex-1">
      <header class="leading-5 flex items-center gap-2 mb-0.5">
        <a
          href="#"
          class="hover:underline flex items-center font-semibold font-15"
        >
          Isaac asimov
          <svg class="h-[1.172rem] ml-0.5" viewBox="0 0 22 22">
            <path
              fill="#1C9BEF"
              d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
            ></path>
          </svg>
        </a>
        <div class="text-15 text-[#71767b] flex items-center gap-1.5">
          <div>@asimova</div>
          <div class="w-0.5 h-0.5 rounded-full bg-[#71767b]"></div>
          <div>25s</div>
        </div>

        <button
          class="ml-auto absolute top-0.5 right-1.5 outline-none w-[2.172rem] h-[2.172rem] rounded-full flex items-center justify-center transition-colors text-[#71767b] hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]"
        >
          <MoreIcon />
        </button>
      </header>

      <div>
        <div>{{ postContent }}</div>

        <div class="flex -ml-1.5 mt-1.5">
          <div class="flex-1 group flex items-center gap-px">
            <div
              class="icon-bg group-hover:bg-[#1d9bf01a] group-hover:text-[#1d9bf0]"
            >
              <CommentIcon />
            </div>
            <span
              class="text-[0.813rem] transition-colors text-[#71767b] group-hover:text-[#1d9bf0]"
              >5</span
            >
          </div>
          <div class="flex-1 group flex items-center gap-px">
            <div
              class="icon-bg group-hover:bg-[#00ba7c1a] group-hover:text-[#00ba7c]"
            >
              <RepostIcon />
            </div>
            <span
              class="text-[0.813rem] transition-colors text-[#71767b] group-hover:text-[#00ba7c]"
              >6</span
            >
          </div>
          <div class="flex-1 group flex items-center gap-px">
            <div
              class="icon-bg group-hover:bg-[#f918801a] group-hover:text-[#f91880]"
            >
              <LikeIcon />
            </div>
            <span
              class="text-[0.813rem] transition-colors text-[#71767b] group-hover:text-[#f91880]"
              >7</span
            >
          </div>
          <div class="flex-1 group flex items-center gap-px">
            <div
              class="icon-bg group-hover:bg-[#1d9bf01a] group-hover:text-[#1d9bf0]"
            >
              <BarChartIcon />
            </div>
            <span
              class="text-[0.813rem] transition-colors text-[#71767b] group-hover:text-[#1d9bf0]"
              >8</span
            >
          </div>

          <div class="flex -mr-2">
            <div class="icon-bg hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]">
              <BookmarkIcon />
            </div>
            <div class="icon-bg hover:bg-[#1d9bf01a] hover:text-[#1d9bf0]">
              <ShareIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
