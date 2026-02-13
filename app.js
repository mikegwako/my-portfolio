(function () {
  const buttons = [...document.querySelectorAll(".control")];
  const sections = [...document.querySelectorAll("section")];

  // Click buttons to scroll to section
  buttons.forEach(button => {
    button.addEventListener("click", function() {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");

      // Scroll smoothly to the section
      const section = document.getElementById(button.dataset.id);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Highlight buttons on scroll
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, i) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        buttons.forEach(btn => btn.classList.remove("active-btn"));
        buttons[i].classList.add("active-btn");
      }
    });
  });

  // Theme toggle
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
