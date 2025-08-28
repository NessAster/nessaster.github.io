document.addEventListener('DOMContentLoaded', (event) => {
    let detailBtn    = document.querySelectorAll(".detailBtn");
    // let detailBox    = document.querySelector(".detailBox");
    let detailClose  = document.querySelectorAll(".detailClose");

    detailBtn.forEach(btn => {
        btn.addEventListener('click', (event) => {
            let box = document.querySelector("#"+btn.dataset.target);

            box.classList.toggle("d-none");
            event.preventDefault();
            let paddingLeft = window.getComputedStyle(box.parentElement, null).getPropertyValue('padding-left')

            box.style.transform = `translateX(calc(0% - ${paddingLeft}))`;
        });
    });

    detailClose.forEach(btn => {
        btn.addEventListener('click', (event) => {
            let box = document.querySelector("#"+btn.dataset.target);
            event.preventDefault();
            let paddingLeft = window.getComputedStyle(box.parentElement, null).getPropertyValue('padding-left')
            box.style.transform = `translateX(calc(-100% - ${paddingLeft}))`;
            setTimeout(() => {
                box.classList.toggle("d-none");
            }, 500);
        });
    });
})