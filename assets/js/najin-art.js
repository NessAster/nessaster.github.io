document.addEventListener('DOMContentLoaded', (event) => {
    let audio = document.getElementById("ost");
    audio.volume = 0.2;

    document.querySelectorAll(".artMenu").forEach((element) => {
        element.addEventListener("click", (event) => {
            let old = document.querySelector(".border-danger");
            if (old != null) {
                old.classList.remove("border-danger");
                old.classList.add("border-white");
                document.querySelector("#" + old.dataset.target).classList.add("d-none");
            }

            document.querySelector("#techniqueCard").classList.remove("d-none");

            element.classList.add("border-danger");
            element.classList.remove("border-white");
            document.querySelector("#" + element.dataset.target).classList.remove("d-none");
        });
    });
});