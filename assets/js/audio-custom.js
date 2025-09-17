document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById("ost");
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");
    const progress = document.querySelector(".progress");
    const progressBar = document.querySelector(".progress-bar");
    const current = document.getElementById("current");
    const duration = document.getElementById("duration");

    volume.value = audio.volume;
    // Play / Pause
    play.addEventListener("click", () => audio.play());
    pause.addEventListener("click", () => audio.pause());

    // Format mm:ss
    function formatTime(sec) {
        const minutes = Math.floor(sec / 60);
        const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    // Mettre à jour la durée quand les métadonnées sont chargées
    audio.addEventListener("loadedmetadata", () => {
        duration.textContent = formatTime(audio.duration);
    });

    // Mettre à jour le timer et la barre de progression
    audio.addEventListener("timeupdate", () => {
        current.textContent = formatTime(audio.currentTime);
        const percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + "%";
    });

    // Sauter quand on clique dans la barre de progression
    progress.addEventListener("click", (e) => {
        const rect = progress.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * audio.duration;
        audio.currentTime = newTime;
    });

    volume.addEventListener("input", () => {
        audio.volume = volume.value; // valeur entre 0 et 1
    });
});