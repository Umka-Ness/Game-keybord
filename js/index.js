import closeModal from "./modal.js";

const backdrop = document.querySelector(".backdrop");
const closeIco = document.querySelector(".modal-btn-ico");

const btn = document.querySelector(".btn-go");
const inputText = document.querySelector(".lastText");
const inputUserText = document.querySelector(".input-text");
const btnReset = document.querySelector(".btn-reset");

const timer = document.querySelector(".timer");
const coins = document.querySelector(".coins");
const coin = document.querySelector(".slide-top");
const KEY = "coins";

let textList =
  "The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. They didn’t think they could bear it if anyone found out about the Potters. Mrs. Potter was Mrs. Dursley’s sister, but they hadn’t met for several years; in fact, Mrs. Dursley pretended she didn’t have a sister, because her sister and her good-for-nothing husband were as unDursleyish as it was possible to be. The Dursleys shuddered to think what the neighbors would say if the Potters arrived in the street. The Dursleys knew that the Potters had a small son, too, but they had never even seen him. This boy was another good reason for keeping the Potters away; they didn’t want Dudley mixing with a child like that.";
let devList =
  "The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. They didn’t think they could bear it if anyone found out about the Potters. Mrs. Potter was Mrs. Dursley’s sister, but they hadn’t met for several years; in fact, Mrs. Dursley pretended she didn’t have a sister, because her sister and her good-for-nothing husband were as unDursleyish as it was possible to be. The Dursleys shuddered to think what the neighbors would say if the Potters arrived in the street. The Dursleys knew that the Potters had a small son, too, but they had never even seen him. This boy was another good reason for keeping the Potters away; they didn’t want Dudley mixing with a child like that.";
let error = 0;
let speed = 0;
let oldSpeed = 0;

checlLocalStorage();
closeIco.addEventListener("click", (e) => {
  backdrop.classList.add("is-hidden");
});
document.body.addEventListener("keydown", (e) => {
  console.log(e);
  if (btn.disabled === true) {
    pushError(e.key);

    if (
      e.key === "CapsLock" ||
      e.key === "Shift" ||
      e.key === "Alt" ||
      e.key === "Control" ||
      e.key != textList[0]
    ) {
      return;
    } else {
      e.preventDefault;
      indexPlus(e.key);
      checText(e.key);
      oldSpeed += 1;
    }
  }
});

btnReset.addEventListener("click", reload);
function reload() {
  location.reload();
}

function checlLocalStorage() {
  if (localStorage.getItem(KEY)) {
    coins.textContent = localStorage.getItem(KEY);
    speed = JSON.parse(localStorage.getItem(KEY));
  } else {
    console.log("No");
  }
}
function checkInput() {
  if (inputUserText.value !== "") {
    devList = inputUserText.value;
    textList = inputUserText.value;
    inputText.value = inputUserText.value;
    inputUserText.value = "";
  }
  return;
}
// Only Timer
btn.addEventListener("click", (event) => {
  checkInput();
  speedTest();
  let sec = 0;
  let min = 0;
  inputText.value = devList;
  btn.disabled = true;
  const checTime = setInterval(() => {
    sec += 1;
    timer.textContent = min + "m " + sec + " sec";
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
  }, 1000);
  //End Game Function
  const checkList = setInterval(() => {
    if (textList.length === 0) {
      console.log("error: " + error);
      clearInterval(checkList);
      clearInterval(checTime);
      localStorage.setItem(KEY, coins.textContent);

      if (sec >= textList.length / 3) {
        console.log(textList.length / 3);
      }
      // меньше чем 12 и больше чем 10
      else if (sec <= textList.length / 3.5 && sec >= testList.length / 4) {
      }
      //
      else if (sec < textList.length / 4) {
      } else {
      }
      return;
    }
  }, 250);
});

// delete old text
function indexPlus(key) {
  inputText.value = devList;

  if (key === textList[0]) {
    devList = devList.slice(1);
    inputText.value = devList;

    return;
  }
}

// Push errors
function pushError(key) {
  if (
    key === "CapsLock" ||
    key === "Shift" ||
    key === "Alt" ||
    key === "Control" ||
    key === "AltGraph" ||
    key === textList[0]
  ) {
    return;
  } else {
    if (speed === 0) {
      error += 1;
      return;
    } else {
      error += 1;
      speed -= 1;
      console.log(error);
      coins.textContent = speed;
      return;
    }
  }
}
//Проверка совпадает написанная буква с ткстом или нет
function checText(key) {
  if (textList[0] === key) {
    textList = textList.slice(1);

    return;
  }
}

// Speed text
function speedTest() {
  const timeout = setInterval(() => {
    if (oldSpeed === 0) {
      console.log(oldSpeed);
      if (localStorage.getItem(KEY) != coins.textContent) {
        localStorage.setItem(KEY, speed);
      }
      return;
    } else if (oldSpeed <= 2) {
      oldSpeed = 0;
    } else if (oldSpeed === -1) {
      oldSpeed = 0;
    } else {
      oldSpeed = 0;
      speed += 1;
      coins.textContent = speed;
      console.log(oldSpeed);
      addCoin();
    }
  }, 500);
}

// add animation coin
function addCoin() {
  coin.classList.remove("slide-top");
  coin.classList.add("slide-top-null");
  coin.style.height = 50 + "px";
  coin.style.position = "absolute";
  coin.style.top = 180 + "px";
  coin.style.left = 80 + "px";
  coin.src = "img/null.png";
  setTimeout(() => {
    coin.src = "img/5a364041411e44.8325067215135048332667.png";
    coin.classList.remove("slide-top-null");
    coin.classList.add("slide-top");
  }, 0);
}
console.log("length text: " + textList.length + " words");
