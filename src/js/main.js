/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import "./export";
import "../sass/main.css";
import "../sass/_fonts.scss";

const headerBtn = document.querySelector(".header__btn a");
const audioFire = document.querySelector("#audio--fire");

const svg = document.querySelectorAll(".btn__svg");
const listItem = document.querySelectorAll(".list__item");
const audio = document.querySelector(".audio");

const pricingContent = document.querySelector(".pricing__content");
const pricingIcons = document.querySelectorAll(".pricing__icon");

const checkBox = document.querySelector(".check--box");
const cardPrice = document.querySelectorAll(".card__price");
const solutionMonth = document.querySelector(".solution__month");
const solutionYear = document.querySelector(".solution__year");

audioFire.loop = true;
audioFire.volume = 0.3;

headerBtn.addEventListener("mouseover", () => {
  audioFire.play();
});

headerBtn.addEventListener("mouseout", () => {
  audioFire.pause();
});

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

let TF = false;

function getDate(data1, data2, data3, date) {
  cardPrice.forEach((item, index) => {
    if (index === 0) {
      item.innerHTML = `$${data1}<span>/${date}</span>`;
    } else if (index === 1) {
      item.innerHTML = `$${data2}<span>/${date}</span>`;
    } else {
      item.innerHTML = `$${data3}<span>/${date}</span>`;
    }
  });
}

checkBox.addEventListener("click", () => {
  if (!TF) {
    getDate(16, 40, 96, "Year");
    solutionMonth.classList.add("opcity-child");
    solutionYear.classList.remove("opcity-child");
    checkBox.style.justifyContent = "flex-end";
    TF = true;
  } else if (TF) {
    getDate(8, 20, 48, "Month");
    solutionMonth.classList.remove("opcity-child");
    solutionYear.classList.add("opcity-child");
    checkBox.style.justifyContent = "flex-start";
    TF = false;
  }
});
