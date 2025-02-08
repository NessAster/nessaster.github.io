document.addEventListener('DOMContentLoaded', () => {
  let menuElementContainer = document.querySelector("#menuElementContainer");
  let selected   = menuElementContainer.dataset.selected.split(" ");
  let unselected = menuElementContainer.dataset.unselected.split(" ");

  menuElementContainer.querySelectorAll(".menuElement").forEach((element) => {
    
    element.addEventListener("click", (event) => {
        let old = menuElementContainer.querySelector("."+selected.join("."));
        if (old != null) {
            old.classList.remove(...selected);
            old.classList.add(...unselected);
            document.querySelector("#" + old.dataset.target).classList.add("d-none");
        }

        element.classList.add(...selected);
        element.classList.remove(...unselected);
        let target = document.querySelector("#" + element.dataset.target);
        target.classList.remove("d-none");
    });
  });
});