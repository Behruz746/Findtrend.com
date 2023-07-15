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
const card__price = document.querySelectorAll(".card__price");

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

function getDate(data) {
  card__price.forEach((item, index) => {
    if (data) {
      if (index === 0) {
        item.innerHTML = "$16<span>/Year</span>";
      } else if (index === 1) {
        item.innerHTML = "$40<span>/Year</span>";
      } else if (index === 2) {
        item.innerHTML = "$96<span>/Year</span>";
      }
    } else if (!data) {
      if (index === 0) {
        item.innerHTML = "$8<span>/Month</span>";
      } else if (index === 1) {
        item.innerHTML = "$20<span>/Month</span>";
      } else if (index === 2) {
        item.innerHTML = "$48<span>/Month</span>";
      }
    }
  });
}

checkBox.addEventListener("click", () => {
  if (!TF) {
    getDate(false);
    checkBox.style.justifyContent = "flex-end";
    TF = true;
  } else if (TF) {
    getDate(true);
    checkBox.style.justifyContent = "flex-start";
    TF = false;
  }
});
