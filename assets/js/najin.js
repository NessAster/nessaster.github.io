document.addEventListener('DOMContentLoaded', (event) => {
    let profileImage = document.querySelector("#profileImage");
    let memeImage    = document.querySelector("#memeImage");

    profileImage.addEventListener('click', (event) => {
        profileImage.classList.add("d-none");
        memeImage.classList.remove("d-none");
    });
    memeImage.addEventListener('click', (event) => {
        memeImage.classList.add("d-none");
        profileImage.classList.remove("d-none");
    });
})