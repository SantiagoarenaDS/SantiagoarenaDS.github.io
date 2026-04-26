const toggle = document.getElementById("theme-toggle");

toggle?.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = !html.classList.contains("dark");

  html.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
