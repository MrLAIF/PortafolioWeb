document.addEventListener("DOMContentLoaded", function() {
  const showButton = document.getElementById("showElementButton");
  const buttondiv = document.getElementById("buttondiv");
  const presentacionTitulo =document.getElementById("principal")
  const presentacionDes =document.getElementById("principal-des")
  const catGIF=document.getElementById("catJAMGif")
  const barThing=document.getElementById("bar")
  

  showButton.addEventListener("click", function() {
    document.body.style.animation="backflash 0.5s forwards";
    document.body.style.overflow = 'auto';
    buttondiv.style.display="none";


    
    presentacionTitulo.style.animation = "backflash-text 0.5s forwards, slideInLeft 0.5s ease-in-out 0.3s 1 normal both";
    presentacionDes.style.animation = "backflash-text 0.5s forwards, slideInLeft 0.5s ease-in-out 0.8s 1 normal both";
    catGIF.style.animation="transparent 2.5s forwards";
    barThing.style.animation="transparent 2.5s forwards";

  });
});