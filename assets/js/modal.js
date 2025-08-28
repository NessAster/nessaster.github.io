document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("zoomModal");
    const openBtn = document.getElementById("openZoom");

    // ouvrir
    openBtn.addEventListener("click", () => {
        modal.style.display = "flex"; // flex pour centrer
    });

    // fermer si on clique dehors
    modal.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});