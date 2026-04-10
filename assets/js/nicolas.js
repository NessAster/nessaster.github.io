document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector("#formAuth");
    const modalElement = document.querySelector('#authModal');
    const modal = bootstrap.Modal.getOrCreateInstance(modalElement);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if(document.querySelector('#user').value.toLowerCase() == "ness" && document.querySelector('#password').value.toLowerCase() == "pute") {
            let elements = document.querySelectorAll(".censored, .pub");
            elements.forEach((el) => {
                el.classList.add("auth");
            });

            const audio = document.querySelector('#ost');
            const source = audio.querySelector('source');
            console.log(source);
            source.src = source.dataset.src;
            console.log(source);
            audio.load();
        }
        modal.hide();
    })
});