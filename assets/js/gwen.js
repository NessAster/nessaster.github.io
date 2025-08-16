document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  const book = document.querySelector('#book');
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

  book.addEventListener("click", (e) => {
    if (isMobile()) return;

    if (e.clientX < window.innerWidth / 2) {
      if (currentPage > 0 && !isAnimating) {
        isAnimating = true; // Bloque les clics pendant l'animation
        currentPage--;
        pages[currentPage].style.transform = 'rotateY(0deg)'; // Remet la page en place
        updateZIndexAfterAnimation();
      }
    } else {
      if (currentPage < pages.length && !isAnimating) {
        isAnimating = true; // Bloque les clics pendant l'animation
        pages[currentPage].style.transform = 'rotateY(-180deg)'; // Tourne la page
        currentPage++;
      }
    }
  });

  //-----------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------

  let isLeftPage = true;

  function isMobile() {
    return window.innerWidth <= 768;
  }

  // function updateMobileView() {
  //   pages.forEach((page, index) => {
  //     if (index === currentPage) {
  //       page.style.display = 'block';
  //       page.style.transform = isLeftPage ? 'rotateY(0deg)' : 'rotateY(-180deg)';
  //       page.style.left = isLeftPage ? '0' : '50vw'; // Décale à droite pour verso
  //     } else {
  //       page.style.display = 'none';
  //     }
  //   });
  // }

  // Gestion du swipe mobile
  let touchStartX = 0;
  let touchEndX = 0;

  function handleSwipe() {
    if (!isMobile() || isAnimating) return;

    const swipeDistance = touchEndX - touchStartX;

    // Seuil minimal pour un vrai swipe (ex : 50px)
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        if (isLeftPage) {
          if (currentPage > 0) {
              isAnimating = true; // Bloque les clics pendant l'animation
              currentPage--;
              pages[currentPage].style.transform = 'rotateY(0deg)'; // Remet la page en place
              book.style.transform = "translate(0%)"
              isLeftPage = !isLeftPage;
              updateZIndexAfterAnimation();
            }
        } else {
          book.style.transform = "translate(100%)"
          isLeftPage = !isLeftPage;
        }
      } else {
        if (isLeftPage) {
          book.style.transform = "translate(0%)"
          isLeftPage = !isLeftPage;
        } else {
          if (currentPage < pages.length) {
            isAnimating = true; // Bloque les clics pendant l'animation
            pages[currentPage].style.transform = 'rotateY(-180deg)'; // Tourne la page
            currentPage++;
            book.style.transform = "translate(100%)"
            isLeftPage = !isLeftPage;
          }
        }
      }
    }
  }

  document.addEventListener('touchstart', (e) => {
    if (!isMobile()) return;
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    if (!isMobile()) return;
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  //-----------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------------------------------

  const player = document.querySelector("#player");
  const music = document.querySelector("#ost");
  const discMp3 = document.querySelector("#discMp3");
  let played = false;

  function toggleNext() {
    let source = music.querySelector("source");
    console.log(source, music)
    let tmpSource = source.src;
    let tmpDisc = discMp3.src;
    source.src = source.dataset.src;
    discMp3.src = discMp3.dataset.src;

    source.dataset.src = tmpSource;
    discMp3.dataset.src = tmpDisc;
    music.load();
    if(played) {
      music.play();
    }
  }

  document.querySelectorAll(".toggleNext").forEach((toggle) => {
    toggle.addEventListener("click", toggleNext);
  });

  player.addEventListener('click', function(e) {
    if (played) {
      discMp3.classList.remove("animate");
      music.pause();
    } else {
      discMp3.classList.add("animate");
      music.play();
    }
    played = !played;
  });


  // Initialiser les z-index au chargement
  updateZIndexAfterAnimation();
});

function ajusterHauteurParent() {
  const parent = document.getElementById("book");
  const enfants = parent.querySelectorAll(".page");

  let maxBottom = 0;
  const parentRect = parent.getBoundingClientRect();

  enfants.forEach(child => {
    // Trouver le descendant le plus bas
    const descendants = child.querySelectorAll(".content");
    descendants.forEach(el => {
      const descendantsSecond = el.querySelectorAll("*");
        descendantsSecond.forEach(elSec => {
        const rect = elSec.getBoundingClientRect();
        const bottom = rect.bottom - parentRect.top;
        if (bottom > maxBottom) {
          maxBottom = bottom;
        }
      });
    });
  });

  parent.style.height = (maxBottom+15) + "px";
}

window.addEventListener("load", ajusterHauteurParent);
let timeout;
window.addEventListener("resize", () => {
  clearTimeout(timeout);
  timeout = setTimeout(ajusterHauteurParent, 100);
});