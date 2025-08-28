document.addEventListener('DOMContentLoaded', (event) => {
    let audio = document.getElementById("ost");
    if (audio) {
        audio.volume = 0.2;
    }

    const lecteur = document.querySelector(".lecteur");

    if(!lecteur) return;

    const player = document.querySelector("#player");
    const music = document.querySelector("#ost");
    const discMp3 = document.querySelector("#discMp3");
    let played = false;

    if(!player) return;

    function toggleNext() {
        let source = music.querySelector("source");
        let tmpSource = source.src;
        let tmpDisc = discMp3.src;
        source.src = source.dataset.src;
        discMp3.src = discMp3.dataset.src;

        source.dataset.src = tmpSource;
        discMp3.dataset.src = tmpDisc;
        music.load();
        if(played) {
            music.play();
        }
    }

    document.querySelectorAll(".toggleNext").forEach((toggle) => {
        toggle.addEventListener("click", toggleNext);
    });

    player.addEventListener('click', function(e) {
        if (played) {
        discMp3.classList.remove("animate");
        music.pause();
        } else {
        discMp3.classList.add("animate");
        music.play();
        }
        played = !played;
    });
});