document.addEventListener('DOMContentLoaded', () => {
    const groups  = document.querySelectorAll('.clickable-animation');
    groups.forEach((group) => {
        const droite  = group.querySelector('.droite');
        const gauche  = group.querySelector('.gauche');
        const haut    = group.querySelector('.haut');
        const bas     = group.querySelector('.bas');
        const fond    = group.querySelector('.fond');
        const symbole = group.querySelector('.symbole');

        // centre de rotation
        const cx = 529, cy = 113;

        [droite, gauche, haut, bas].forEach(el => {
            el.style.transition = "transform 1s ease";
            el.style.transformOrigin = `${cx}px ${cy}px`; // important !
        });

        group.addEventListener('click', async (e) => {
            e.preventDefault();

            if (!group.dataset.used) {
                group.dataset.used = true;
                // 1. droite -> bas, gauche -> haut
                droite.style.transform = `rotate(90deg)`;
                gauche.style.transform = `rotate(90deg)`;
                await wait(1500);
    
                // 2. ceux en haut -> droite, ceux en bas -> gauche
                droite.style.transform = `rotate(180deg)`;
                gauche.style.transform = `rotate(180deg)`;
                haut.style.transform   = `rotate(90deg)`;
                bas.style.transform    = `rotate(90deg)`;
                await wait(1500);
    
                // 3. éloigner (ici en pixels, pas en %)
                droite.style.transform = `rotate(180deg) translateX(10%)`;
                gauche.style.transform = `rotate(180deg) translateX(-10%)`;
                haut.style.transform   = `rotate(90deg) translateY(-25%)`;
                bas.style.transform    = `rotate(90deg) translateY(25%)`;
                await wait(1000);
    
                // 4. disparition
                fond.style.transition = "opacity 1s ease";
                symbole.style.transition = "opacity 1s ease";
                fond.style.opacity = 0;
                symbole.style.opacity = 0;
            }
        });

    });

    window.addEventListener("keyup", bufferKeyCheck)
    window.addEventListener("keydown", () => {buffer = []; pressed += 1})
});

function wait(ms){ return new Promise(r => setTimeout(r, ms)); }

function haveSameValues(a, b) {
    if (a.length !== b.length) return false;
    return a.slice().sort().every((val, i) => val === b.slice().sort()[i]);
}

let result = [['ArrowUp'], ['ArrowUp', 'ArrowLeft'], ['ArrowDown', 'ArrowRight'], ['ArrowLeft'], ['ArrowDown']]
let buffer = []
let pressed = 0
let indice = 0

function bufferKeyCheck(e) {
    buffer.push(e.key)

    if (pressed !== buffer.length) return;

    if (haveSameValues(result[indice], buffer)) {
        indice +=1;
    } else if (haveSameValues(result[0], buffer)) {
        indice = 1;
    } else {
        indice = 0;
    }
    pressed = 0;

    if (indice >= result.length) {
        document.querySelector("#ost").play()
        document.querySelector(".custom-player").classList.remove("invisible")
    }
}

