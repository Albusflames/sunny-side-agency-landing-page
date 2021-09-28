const btnCon = document.querySelector(".btnCon");
const menu = document.querySelector(".menu");

btnCon.addEventListener("click", function () {
  if (menu.style.display == "none") {
    menu.style.display = "flex";
    console.log("console message");
  } else {
    menu.style.display = "none";
  }
});
