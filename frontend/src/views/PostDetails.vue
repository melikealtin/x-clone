<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { usePostStore } from "@/stores/post";
import { useUserStore } from "@/stores/user";
import BackIcon from "@/assets/icons/content-icons/back-icon.svg";
import { formatDate } from "@/utils/dateFormatter";
import CreateReply from "@/components/PostDetails/CreateReply.vue";
import CommentList from "@/components/PostDetails/CommentList.vue";
import MainPost from "@/components/PostDetails/MainPost.vue";

const route = useRoute();
const postStore = usePostStore();
const userStore = useUserStore();

const displayPost = computed(
  () => postStore.selectedPost?.originalPost || postStore.selectedPost
);
const isRepost = computed(() => !!postStore.selectedPost?.originalPost);
const authorUsername = computed(
  () => displayPost.value?.author?.username || ""
);
const authorName = computed(() => displayPost.value?.author?.name || "");
const postContent = computed(() => displayPost.value?.content || "");
const postDate = computed(() =>
  displayPost.value?.createdAt ? formatDate(displayPost.value.createdAt) : ""
);
const repliesCount = computed(() => displayPost.value?.replies?.length || 0);
const repostsCount = computed(() => displayPost.value?.reposts?.length || 0);
const likesCount = computed(() => displayPost.value?.likes?.length || 0);
const userAvatar = computed(() =>
  authorUsername.value === "asimova" ? "/img/user.png" : "/img/user1.png"
);

const isLiked = computed(() => {
  if (!displayPost.value?.likes) return false;
  return displayPost.value.likes.some(
    (like) => like._id === userStore.currentUserId
  );
});

const isReposted = computed(() => {
  if (!displayPost.value?.reposts) return false;
  return displayPost.value.reposts.some((repost) => {
    if (typeof repost === "string") {
      return repost === userStore.currentUserId;
    }
    return (
      repost._id === userStore.currentUserId ||
      repost.author?._id === userStore.currentUserId
    );
  });
});

const isBookmarked = computed(() => {
  return displayPost.value?.isBookmarked || false;
});

const handleLike = async () => {
  if (!displayPost.value?._id) return;
  try {
    await postStore.likePost(displayPost.value._id);
    await postStore.fetchPostById(displayPost.value._id);
  } catch (error) {
    console.error("error", error);
  }
};

const handleRepost = async () => {
  if (!displayPost.value?._id) return;
  try {
    await postStore.repost(displayPost.value._id);
    await postStore.fetchPostById(displayPost.value._id);
  } catch (error) {
    console.error("error", error);
  }
};

const handleBookmark = async () => {
  if (!displayPost.value?._id) return;
  try {
    await postStore.bookmarkPost(displayPost.value._id);
    await postStore.fetchPostById(displayPost.value._id);
  } catch (error) {
    console.error("error", error);
  }
};

onMounted(async () => {
  const postId = route.params.id;
  try {
    await postStore.fetchPostById(postId);
  } catch (error) {
    console.error("error", error);
  }
});
</script>

<template>
  <div class="min-h-screen">
    <header
      class="sticky top-0 z-10 px-2 py-2 backdrop-blur-md bg-black/80 flex items-center gap-6"
    >
      <button
        class="w-9 h-9 flex items-center justify-center hover:bg-[#181818] rounded-full"
        @click="$router.back()"
      >
        <BackIcon class="w-5 h-5" />
      </button>
      <h2 class="text-xl font-bold ml-1 text-[#E6E9EA]">Post</h2>
    </header>

    <MainPost
      v-if="displayPost"
      :display-post="displayPost"
      :author-username="authorUsername"
      :author-name="authorName"
      :post-content="postContent"
      :post-date="postDate"
      :replies-count="repliesCount"
      :reposts-count="repostsCount"
      :likes-count="likesCount"
      :user-avatar="userAvatar"
      :is-liked="isLiked"
      :is-reposted="isReposted"
      :is-bookmarked="isBookmarked"
      :handle-like="handleLike"
      :handle-repost="handleRepost"
      :handle-bookmark="handleBookmark"
    />

    <div class="border-b border-[#2f3336]">
      <CreateReply :post-id="route.params.id" />
    </div>

    <div>
      <CommentList :post-id="route.params.id" />
    </div>
  </div>
</template>
