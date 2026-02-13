(function () {
  const buttons = [...document.querySelectorAll(".control")];

  // Map buttons to their sections
  const buttonSectionMap = buttons.map(btn => {
    const section = document.getElementById(btn.dataset.id);
    return { btn, section };
  });

  // Click buttons to scroll smoothly to the section
  buttonSectionMap.forEach(({ btn, section }) => {
    btn.addEventListener("click", () => {
      // Activate button
      buttons.forEach(b => b.classList.remove("active-btn"));
      btn.classList.add("active-btn");

      // Scroll to section
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Highlight buttons based on scroll
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    buttonSectionMap.forEach(({ btn, section }) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPos >= top && scrollPos < bottom) {
        buttons.forEach(b => b.classList.remove("active-btn"));
        btn.classList.add("active-btn");
      }
    });
  });

  // Theme toggle
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
