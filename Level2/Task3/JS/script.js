// Scroll animation functionality
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  const fadeInObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  fadeElements.forEach((element) => {
    fadeInObserver.observe(element);
  });

  // Mobile menu toggle (optional)
  const mobileMenuButton = document.querySelector("button.md\\:hidden");
  const mobileMenu = document.querySelector(".hidden.md\\:flex");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      mobileMenu.classList.toggle("flex-col");
      mobileMenu.classList.toggle("absolute");
      mobileMenu.classList.toggle("top-16");
      mobileMenu.classList.toggle("left-0");
      mobileMenu.classList.toggle("right-0");
      mobileMenu.classList.toggle("bg-white");
      mobileMenu.classList.toggle("p-4");
      mobileMenu.classList.toggle("shadow-md");
      mobileMenu.classList.toggle("space-y-4");
      mobileMenu.classList.toggle("space-x-0");
    });
  }
});
