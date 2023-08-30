document.addEventListener("DOMContentLoaded", function () {
  const showButton = document.getElementById("showElementButton");
  const content = document.getElementById("content");
  
  const buttondiv = document.getElementById("buttondiv");
  
  showButton.addEventListener("click", function() {
    document.body.style.animation="backflash 0.5s forwards";
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
    
    content.style.display = "flex";
    buttondiv.style.display="none";
  });
  
  const moveCover = document.getElementById("moveCover");

  const buttonCover = document.getElementById("buttonCover");

  moveCover.addEventListener("click", function() {
    buttonCover.style.animation=("slideOut 1s forwards")
  });
});