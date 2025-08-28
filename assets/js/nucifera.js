document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll("g.clickable-element").forEach(g => {
    const box = g.getBBox();
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    g.style.transformOrigin = `${cx}px ${cy}px`;
  });

  const wrapper = document.querySelector('.svg-wrapper');
  const svg = wrapper.querySelector('.svg-bg');
  
  wrapper.style.height = svg.querySelector('g').getBoundingClientRect().height + "px";
  window.addEventListener('resize', () => {wrapper.style.height = svg.querySelector('g').getBoundingClientRect().height + "px"});

  document.querySelectorAll('.clickable-element').forEach((groupe) => {
    groupe.addEventListener("mouseenter", () => {
      groupe.closest("svg").classList.add("hovered");
    });
    groupe.addEventListener("mouseleave", () => {
      groupe.closest("svg").classList.remove("hovered");
    });
  });

  const source = document.querySelector("#ost");
  const poissons = document.querySelectorAll(".FishSwim");

  document.querySelector(".easter").addEventListener('click', (e) => {
    e.preventDefault();
    let tmpSource = source.src;
    source.src = source.dataset.src;
    source.dataset.src = tmpSource;
    
    poissons.forEach((poi) => {
      let son = poi.src;
      poi.src = poi.dataset.src;
      poi.dataset.src = son;
    });

    source.load();
    source.play();
  });

  const audio = document.getElementById("ost");
  const play = document.getElementById("play");
  const pause = document.getElementById("pause");
  const progress = document.querySelector(".progress");
  const progressBar = document.querySelector(".progress-bar");
  const current = document.getElementById("current");
  const duration = document.getElementById("duration");

  volume.value = audio.volume;
  // Play / Pause
  play.addEventListener("click", () => audio.play());
  pause.addEventListener("click", () => audio.pause());

  // Format mm:ss
  function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  // Mettre à jour la durée quand les métadonnées sont chargées
  audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
  });

  // Mettre à jour le timer et la barre de progression
  audio.addEventListener("timeupdate", () => {
    current.textContent = formatTime(audio.currentTime);
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + "%";
  });

  // Sauter quand on clique dans la barre de progression
  progress.addEventListener("click", (e) => {
    const rect = progress.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audio.duration;
    audio.currentTime = newTime;
  });

  volume.addEventListener("input", () => {
    audio.volume = volume.value; // valeur entre 0 et 1
  });
});