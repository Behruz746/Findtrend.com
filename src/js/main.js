/* eslint-disable import/no-unresolved */
import "./export";
import "../sass/main.css";
import "../sass/_fonts.scss";

const svg = document.querySelectorAll(".btn__svg");
const listItem = document.querySelectorAll(".list__item");
const audio = document.querySelector(".audio");

svg.forEach((i, index) => i.addEventListener("click", () => {
  listItem.forEach((item, id) => {
    if (index === id) {
      item.remove();
      audio.play();
    }
  });
}));
