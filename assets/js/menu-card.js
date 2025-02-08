document.addEventListener('DOMContentLoaded', (event) => {
    let targetCards = document.querySelectorAll(".targetCard");

    targetCards.forEach((targetCard) => {
        let selected    = targetCard.dataset.selected.split(" ");
        let unselected  = targetCard.dataset.unselected.split(" ");
        targetCard.querySelectorAll(".cardMenu").forEach((element) => {
    
            element.addEventListener("click", (event) => {
                let old = targetCard.querySelector("."+selected.join("."));
                if (old != null) {
                    old.classList.remove(...selected);
                    old.classList.add(...unselected);
                    targetCard.querySelector("#" + old.dataset.target).classList.add("d-none");
                }
    
                targetCard.classList.remove("d-none");
    
                element.classList.add(...selected);
                element.classList.remove(...unselected);
                let target = targetCard.querySelector("#" + element.dataset.target);
                target.classList.remove("d-none");
                target.animate(
                    [
                        // étapes/keyframes
                        { transform: "translateY(-100%)"   },
                        { transform: "translateY(0px)" },
                    ],
                    {
                        // temporisation
                        duration: 500,
                        iterations: 1,
                    },
                );
            });
        });
    });
});