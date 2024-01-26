export function formatDate() {
  const date = new Date();
  return new Intl.DateTimeFormat("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}
