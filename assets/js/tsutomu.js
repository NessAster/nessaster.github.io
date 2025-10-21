document.addEventListener('DOMContentLoaded', () => {
    const source = document.querySelector("#ost");
    const rick = document.querySelector("#rick");
    const roll = document.querySelector("#roll");

    rick.addEventListener('click', (e) => {
        e.preventDefault();
        let tmpSource = source.src;
        source.src = source.dataset.src;
        source.dataset.src = tmpSource;

        source.load();
        source.play();

        roll.classList.toggle("d-none");
    });

    const link = document.querySelector('#lec-ca');
    const door = document.querySelector('#lec-door');
    let target = null;

    document.querySelectorAll(".cassette").forEach(element => {
        element.addEventListener('click', (e) => {
            if (target) {
                document.querySelector(`#${target}-img`).classList.add("d-none");
            }
            link.setAttribute("href", "")
            link.style.pointerEvents = "none";
            door.setAttribute('fill', '#434343')
            if (target != element.dataset.target) {
                target = element.dataset.target;
                if (target != "profile") {
                    link.style.pointerEvents = "auto";
                    door.setAttribute('fill', '#b67821')
                    link.setAttribute("href", `./${element.dataset.target}.html`)
                }
                document.querySelector(`#${target}-img`).classList.remove("d-none");
            } else {
                target = null;
            }
        });
    });
});