const path = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.getAttribute("href") === path) {
    link.classList.add("active");
  }
});

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});
