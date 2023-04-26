import { getCites } from "./src/functions/getCites.js";

const numbCite = document.querySelector(".modal__numb");
const modalCite = document.querySelector(".modal__cite");
const azarBtn = document.querySelector(".modal__azar");
let canClick = true;
const url = "https://api.adviceslip.com/advice"

function callback(elm = {}) {
   numbCite.textContent = elm.id ? `Advice #${elm.id}` : "Advice #404";
   modalCite.innerHTML = elm.advice || "Se ha producido un error <br> Intentelo mas tarde";
}

document.addEventListener("DOMContentLoaded", () => {
   getCites(url, callback)
      .catch(() => {
         callback()
         azarBtn.disabled = true;
         canClick = false;
      })
});

document.addEventListener("click", (e) => {
  if (
    e.target.matches(".modal__azar") ||
    e.target.matches(".modal__azar-icon")
  ) {
    if (canClick) {
      azarBtn.disabled = true;
      canClick = false;
      
      getCites(url, callback)
         .then(() => setTimeout(() => {
            azarBtn.disabled = false;
            canClick = true;
         }, 1500))
    }
  }
});

