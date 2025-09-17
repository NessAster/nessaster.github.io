document.addEventListener('DOMContentLoaded', () => {
  const lflame = document.querySelector("#lflame");
  const mflame = document.querySelector("#mflame");
  const rflame = document.querySelector("#rflame");
  const glow = document.querySelector(".glow");
  const memeImage    = document.querySelector("#memeImage");

  console.log(lflame, mflame,rflame)
  
  let lvalue = false;
  let mvalue = false;
  let rvalue = false;

  lflame.addEventListener('click', (e) => {
    if(rvalue) {
      lvalue = true;
      lflame.classList.add("d-none");
    }
  });

  mflame.addEventListener('click', (e) => {
    if(rvalue && lvalue) {
      mvalue = true;
      mflame.classList.add("d-none");
      glow.classList.add('d-none');
      memeImage.classList.remove('d-none')
    } else {
      rvalue = false;
      rflame.classList.remove("d-none");
    }
  });

  rflame.addEventListener('click', (e) => {
    rvalue = true;
    rflame.classList.add("d-none");
  });
});