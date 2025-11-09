document.addEventListener('DOMContentLoaded', () => {
    const lampe = document.querySelectorAll(".lampe");
    const twisted = document.querySelectorAll(".twisted");
    const lampeTrigger = document.querySelector("#lampeTrigger");
    const source = document.querySelector("#ost")

    lampeTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        lampe.forEach((element) => {element.classList.add('d-none')})
        twisted.forEach((element) => {element.classList.remove('d-none')})

        source.pause();

        let audio = new Audio(source.dataset.metal);
        audio.addEventListener('ended', function() {
            let tmpSource = source.src;
            source.src = source.dataset.src;
            source.dataset.src = tmpSource;

            source.load();
            source.play();
        });
        audio.play();
    });
});