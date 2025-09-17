document.addEventListener('DOMContentLoaded', () => {
  const porte = document.querySelector("#porte");
  const serrure = document.querySelector("#serrure");
  const keyToOpen = document.querySelector("#keyToOpen");
  const key = document.querySelector("#key");
  const poignet = document.querySelector("#poignet");
  const player = document.querySelector(".custom-player");
  const ost = document.querySelector("#ost");

  let keyGet = false;
  let keyPlaced = false;
  let opened = false;

  key.addEventListener('click', (e) => {
    if(!keyGet) {
      keyGet = true;
      key.classList.add("d-none");
    }
  });

  serrure.addEventListener('click', (e) => {
    if(keyGet && !keyPlaced) {
      keyPlaced = true;
      keyToOpen.classList.remove("d-none");
    }
  });

  poignet.addEventListener('click', (e) => {
    if(keyPlaced && !opened) {
      opened = true;
      porte.classList.add("open");
      player.classList.remove("invisible");
      ost.play();
    }
  });
});