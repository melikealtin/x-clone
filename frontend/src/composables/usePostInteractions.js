import { computed } from "vue";
import { usePostStore } from "@/stores/post";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { formatDate } from "@/utils/dateFormatter";

export function usePostInteractions(props) {
  const postStore = usePostStore();
  const userStore = useUserStore();
  const router = useRouter();

  const displayPost = computed(() => props.post.originalPost || props.post);
  const isRepost = computed(() => !!props.post.originalPost);
  const authorUsername = computed(() => displayPost.value.author.username);
  const authorName = computed(() => displayPost.value.author.name);
  const postContent = computed(() => displayPost.value.content);
  const postDate = computed(() => formatDate(displayPost.value.createdAt));
  const repliesCount = computed(() => displayPost.value.replies.length);
  const repostsCount = computed(() => displayPost.value.reposts.length);
  const likesCount = computed(() => displayPost.value.likes.length);
  const userAvatar = computed(() =>
    authorUsername.value === "asimova" ? "/img/user.png" : "/img/user1.png"
  );

  const isLiked = computed(() =>
    displayPost.value.likes.some((like) => like._id === userStore.currentUserId)
  );

  const isReposted = computed(() => {
    if (isRepost.value) return true;

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
    return (
      props.post.isBookmarked ||
      false ||
      props.post.originalPost?.isBookmarked ||
      false
    );
  });

  const handleLike = async (event, postId) => {
    event.stopPropagation();
    try {
      await postStore.likePost(postId);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleRepost = async (event, postId) => {
    event.stopPropagation();
    try {
      await postStore.repost(postId);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleBookmark = async (event, postId) => {
    event.stopPropagation();
    try {
      await postStore.bookmarkPost(postId);
      await postStore.fetchAllPosts();
    } catch (error) {
      console.error("error post", error);
    }
  };

  const handlePostClick = (postId) => {
    router.push({ name: "postDetails", params: { id: postId } });
  };

  return {
    displayPost,
    isRepost,
    authorUsername,
    authorName,
    postContent,
    postDate,
    repliesCount,
    repostsCount,
    likesCount,
    userAvatar,
    isLiked,
    isReposted,
    isBookmarked,
    handleLike,
    handleRepost,
    handleBookmark,
    handlePostClick,
  };
}
