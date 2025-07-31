const sidebar = document.getElementById("sidebar");

const toggleBtn = document.getElementById("toggleBtn");
const mobileToggle = document.getElementById("mobileToggle");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

mobileToggle.addEventListener("click", () => {
  sidebar.classList.toggle("mobile-open");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("collapsed");
  }
});
