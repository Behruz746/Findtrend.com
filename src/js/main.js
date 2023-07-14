/* eslint-disable import/no-unresolved */
import "./export";
import "../sass/main.css";
import "../sass/_fonts.scss";

const svg = document.querySelectorAll(".btn__svg");
const listItem = document.querySelectorAll(".list__item");
const audio = document.querySelector(".audio");

const pricingContent = document.querySelector(".pricing__content");
const pricingIcons = document.querySelectorAll(".pricing__icon");

svg.forEach((i, index) => i.addEventListener("click", () => {
  listItem.forEach((item, id) => {
    if (index === id) {
      item.remove();
      audio.play();
    }
  });
}));

pricingIcons.forEach((i, index) => {
  i.addEventListener("click", () => {
    pricingContent.classList.remove("dis--hidden");

    function getImages(num, num2, link) {
      pricingContent.innerHTML = `
        <a href='${link}'>
          <img src='images/${num}.png' alt='✖️'>
          <img src='images/${num2}.png' alt='✖️'>
          <img src='images/${num}.png' alt='✖️'>
        </a>
      `;
    }

    switch (index) {
      case 0:
        getImages("tweet01", "tweetr02", "https://ru-ru.facebook.com/");
        break;
      case 1:
        getImages("tweet01", "tweetr02", "https://twitter.com/home?lang=ru");
        break;

      case 2:
        getImages("tweet01", "tweetr02", "https://twitter.com/home?lang=ru");
        break;

      case 3:
        getImages("tweet01", "tweetr02", "https://twitter.com/home?lang=ru");
        break;

      case 4:
        getImages("tweet01", "tweetr02", "https://twitter.com/home?lang=ru");
        break;

      case 5:
        getImages("tweet01", "tweetr02", "https://twitter.com/home?lang=ru");
        break;

      case 6:
        getImages("tweet01", "tweetr02", "https://twitter.com/home?lang=ru");
        break;

      case 7:
        getImages("tweet01", "tweetr02", "https://twitter.com/home?lang=ru");
        break;

      default:
        break;
    }
  });
});
