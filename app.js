(function () {

    const controls = document.querySelectorAll(".control");

    controls.forEach(button => {
        button.addEventListener("click", function () {

            // Remove active state from buttons
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");

            // Scroll to section instead of switching visibility
            const section = document.getElementById(this.dataset.id);
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Highlight buttons automatically while scrolling
    const sections = document.querySelectorAll("header, section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                controls.forEach(btn => {
                    btn.classList.remove("active-btn");
                    if (btn.dataset.id === entry.target.id) {
                        btn.classList.add("active-btn");
                    }
                });
            }
        });
    }, { threshold: 0.6 });

    sections.forEach(section => observer.observe(section));

    // Theme toggle
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });

})();
