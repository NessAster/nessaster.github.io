document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
    let currentPage = 0;
    let isAnimating = false; // Empêche les clics pendant l'animation

    function updateZIndexAfterAnimation() {
      pages.forEach((page, index) => {
        if (index < currentPage) {
          page.style.zIndex = 0; // Les pages déjà tournées passent derrière
        } else if (index === currentPage) {
          page.style.zIndex = pages.length - index; // Page active
        } else {
          page.style.zIndex = pages.length - index; // Pages suivantes
        }
      });
    }

    pages.forEach((page) => {
      // Écoute la fin de la transition
      page.addEventListener('transitionend', () => {
        isAnimating = false; // Animation terminée, on autorise les clics
        updateZIndexAfterAnimation(); // Met à jour les z-index
      });
    });

    document.getElementById('nextPage').addEventListener('click', () => {
      if (currentPage < pages.length && !isAnimating) {
        isAnimating = true; // Bloque les clics pendant l'animation
        pages[currentPage].style.transform = 'rotateY(-180deg)'; // Tourne la page
        currentPage++;
      }
    });

    document.getElementById('prevPage').addEventListener('click', () => {
      if (currentPage > 0 && !isAnimating) {
        isAnimating = true; // Bloque les clics pendant l'animation
        currentPage--;
        pages[currentPage].style.transform = 'rotateY(0deg)'; // Remet la page en place
        updateZIndexAfterAnimation();
      }
    });

    // Initialiser les z-index au chargement
    updateZIndexAfterAnimation();
})