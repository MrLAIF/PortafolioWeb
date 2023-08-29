document.addEventListener("DOMContentLoaded", function() {
  const showButton = document.getElementById("showElementButton");
  const hiddenElement = document.getElementById("hiddenElement");
  const buttondiv = document.getElementById("buttondiv");
  const hiddengif = document.querySelector(".centerGIF");
  
  showButton.addEventListener("click", function() {
    hiddenElement.style.display = "flex"; // Change to "block" to make it visible
    buttondiv.style.display = "none"; // Change to "block" to make it visible
  });
});