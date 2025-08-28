document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.locker').forEach(locker => {
    const door = locker.querySelector('.locker__door');
    door.addEventListener('click', () => {
      locker.classList.toggle('is-open');
      locker.setAttribute('aria-expanded', locker.classList.contains('is-open'));
    });
  });

  const zoom = document.querySelector('.zoom');

  document.querySelectorAll('.id-card').forEach(box => {
    box.addEventListener('click', () => {
      const clone = box.cloneNode(true)
      box.classList.add('invisible');
      zoom.innerHTML = "";
      zoom.appendChild(clone);
    });
  });

    zoom.addEventListener('click', () => {
      document.querySelectorAll('.id-card.invisible').forEach(card => {card.classList.remove("invisible")});
      zoom.innerHTML = ""
    });

  // const locker = document.querySelector('.locker');
  // const door = document.querySelector('.locker__door');
  // door.addEventListener('click', () => {
  //   locker.classList.toggle('is-open');
  //   locker.setAttribute('aria-expanded', locker.classList.contains('is-open'));
  // });
});