document.addEventListener('DOMContentLoaded', () => {
    const source = document.querySelector("#ost");
    const easter = document.querySelector(".easter");
    const chaine = document.querySelector("#chaine");

    easter.addEventListener('click', (e) => {
        e.preventDefault();
        let tmpSource = source.src;
        source.src = source.dataset.src;
        source.dataset.src = tmpSource;

        source.load();
        source.play();

        void chaine.offsetWidth;
        chaine.classList.add("d-none");
        easter.classList.add("d-none");

        document.querySelector(".card-container").classList.add("rick")
    });

    chaine.addEventListener('click', (e) => {
        const el = easter;
        const container = document.querySelector(".card-container");

        const distance = container.clientHeight - el.getBBox().height;
        el.style.setProperty("--fall-distance", `${distance}px`);

        // Force le navigateur à prendre en compte la variable
        void el.offsetWidth;

        // Ajout de la classe pour lancer l'animation
        el.classList.add("falling");

        window.addEventListener("resize", () => {
            el.style.animation = "none";
            void el.offsetWidth;
            el.style.animation = "";
        });
    });
});