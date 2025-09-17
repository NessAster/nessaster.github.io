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
});