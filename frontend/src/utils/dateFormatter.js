export function formatDate(createdAt) {
  const postDate = new Date(createdAt);
  const now = new Date();
  const diffInSeconds = Math.floor((now - postDate) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  return postDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}
