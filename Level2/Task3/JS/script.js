const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  section.classList.add(
    "opacity-0",
    "translate-y-10",
    "transition",
    "duration-700"
  );
  observer.observe(section);
});
