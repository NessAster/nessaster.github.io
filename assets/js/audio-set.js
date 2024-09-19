document.addEventListener('DOMContentLoaded', (event) => {
    let audio = document.getElementById("ost");
    if (audio) {
        audio.volume = 0.2;
        audio.play();
    }
});