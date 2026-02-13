(function () {
    const buttons = [...document.querySelectorAll(".control")];
    const sections = [...document.querySelectorAll("section")];

    let isScrolling = false; // flag to prevent click conflict

    // Click behavior
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove active from all buttons
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            // Remove active from all sections
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");

            // Prevent scroll from overriding immediately
            isScrolling = true;
            setTimeout(() => { isScrolling = false; }, 100);
        });
    });

    // Theme toggle
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Scroll detection
    window.addEventListener("scroll", () => {
        if (isScrolling) return; // skip if recently clicked

        let current = sections[0].id;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.id;
            }
        });

        buttons.forEach(button => {
            button.classList.remove("active-btn");
            if (button.dataset.id === current) {
                button.classList.add("active-btn");
            }
        });
    });
})();
