export function formatDate() {
  const date = new Date();
  return new Intl.DateTimeFormat("default", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
