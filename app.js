(function () {
    const buttons = [...document.querySelectorAll(".control")];
    const sections = [...document.querySelectorAll("section")];

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        });
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

    // Scroll detection
    window.addEventListener("scroll", () => {
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
