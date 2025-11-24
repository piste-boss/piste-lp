document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");

  const toggleNav = () => {
    nav.classList.toggle("open");
  };

  navToggle?.addEventListener("click", toggleNav);

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
});
