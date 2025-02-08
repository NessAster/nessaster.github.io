document.addEventListener('DOMContentLoaded', (event) => {
    let profileImage = document.querySelector("#profileImage");
    let memeImage    = document.querySelector("#memeImage");
    let psychoDiv    = document.querySelector("#psychoDiv");
    let psychoBtn    = document.querySelector("#psychoBtn");
    let psychoClose  = document.querySelector("#psychoClose");

    if (profileImage && memeImage) {
        profileImage.addEventListener('click', (event) => {
            profileImage.classList.add("d-none");
            memeImage.classList.remove("d-none");
        });
        memeImage.addEventListener('click', (event) => {
            memeImage.classList.add("d-none");
            profileImage.classList.remove("d-none");
        });
    }

    if (psychoBtn) {
        psychoBtn.addEventListener('click', (event) => {
            psychoDiv.classList.toggle("d-none");
            event.preventDefault();
            let paddingLeft = window.getComputedStyle(psychoDiv.parentElement, null).getPropertyValue('padding-left')
            console.log(paddingLeft);
            psychoDiv.style.transform = `translateX(calc(0% - ${paddingLeft}))`;
        });
    }

    if (psychoBtn) {
        psychoClose.addEventListener('click', (event) => {
            event.preventDefault();
            let paddingLeft = window.getComputedStyle(psychoDiv.parentElement, null).getPropertyValue('padding-left')
            psychoDiv.style.transform = `translateX(calc(-100% - ${paddingLeft}))`;
            setTimeout(() => {
                psychoDiv.classList.toggle("d-none");
            }, 500);
        });
    }

    function showRandomGif(gif) {
        let img = gif.querySelector("img");

        const maxWidth = window.innerWidth - 100;
        const maxHeight = window.innerHeight - 100;
        
        const randomX = Math.random() * maxWidth;
        const randomY = Math.random() * maxHeight;
        const randomRotation = Math.random() * 360;
        
        gif.style.left = `${randomX}px`;
        gif.style.top = `${randomY}px`;
        gif.style.transform = `rotate(${randomRotation}deg)`;
        let imageUrl = `../../assets/img/najin/kd/eyesOne.gif?timestamp=${new Date().getTime()}`;
        img.src = imageUrl;
        gif.style.display = "block";
        
        setTimeout(() => {
            gif.style.display = "none";
        }, 2400);
    }

    const gifs = document.querySelectorAll(".randomGif");
    gifs.forEach((gif) => {
        let rand = Math.random() * (6000 - 2500) + 2500;
        setInterval(showRandomGif, rand, gif);
    });
})