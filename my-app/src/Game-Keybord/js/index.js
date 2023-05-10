const backdrop = document.querySelector(".backdrop");
const closeIco = document.querySelector(".modal-btn-ico");
const closeIcoError = document.querySelector(".modal-btn-ico__error");
const useModal = document.querySelector(".useModal");

const btn = document.querySelector(".btn-go");
const inputText = document.querySelector(".lastText");
const inputUserText = document.querySelector(".input-text");
const btnReset = document.querySelector(".btn-reset");

const timer = document.querySelector(".timer");
const coins = document.querySelector(".coins");
const coin = document.querySelector(".slide-top");

const recordList = document.querySelector(".error");
const timerCount = document.querySelector(".timerCount");
const countProcentDone = document.querySelector(".count-done");

const modalError = document.querySelector(".modal-error");
const trueWords = document.querySelector(".true-words");
const falseWords = document.querySelector(".false-words");
const yourErrorBtn = document.querySelector(".your-error");

const game = document.querySelector(".game");
game.style.display = "none";

const KEY = "coins";

const lengthCount = document.querySelector(".length-count");
let textList =
  "The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. They didn’t think they could bear it if anyone found out about the Potters. Mrs. Potter was Mrs. Dursley’s sister, but they hadn’t met for several years; in fact, Mrs. Dursley pretended she didn’t have a sister, because her sister and her good-for-nothing husband were as unDursleyish as it was possible to be. The Dursleys shuddered to think what the neighbors would say if the Potters arrived in the street. The Dursleys knew that the Potters had a small son, too, but they had never even seen him. This boy was another good reason for keeping the Potters away; they didn’t want Dudley mixing with a child like that.";
let devList =
  "The Dursleys had everything they wanted, but they also had a secret, and their greatest fear was that somebody would discover it. They didn’t think they could bear it if anyone found out about the Potters. Mrs. Potter was Mrs. Dursley’s sister, but they hadn’t met for several years; in fact, Mrs. Dursley pretended she didn’t have a sister, because her sister and her good-for-nothing husband were as unDursleyish as it was possible to be. The Dursleys shuddered to think what the neighbors would say if the Potters arrived in the street. The Dursleys knew that the Potters had a small son, too, but they had never even seen him. This boy was another good reason for keeping the Potters away; they didn’t want Dudley mixing with a child like that.";
let error = 0;
let speed = 0;
let oldSpeed = 0;
let allWords = 0;
let countDone = "";
let copyTextList = "";

let wordsError = {
  data: "",
  comparativeData: "",
  error: "",
  compare: "",
};

loaderModal();
function loaderModal() {
  const loader = document.querySelector(".load-modal");
  setTimeout(() => {
    loader.style.display = "none";
    game.style.display = "inherit";
  }, 5000);
}

zeroCoins();
checkLocalStorage();

closeIco.addEventListener("click", (e) => {
  backdrop.classList.add("is-hidden");
});

yourErrorBtn.addEventListener("click", (e) => {
  console.log(12312);
  modalError.classList.remove("is-hidden");
});

document.addEventListener("click", (e) => {
  if (
    e.target === closeIcoError ||
    e.target === backdrop ||
    e.target === useModal
  ) {
    modalError.classList.add("is-hidden");
  }
});

document.body.addEventListener("keydown", (e) => {
  if (btn.disabled === true) {
    pushError(e.key);

    if (
      e.key === "CapsLock" ||
      e.key === "Shift" ||
      e.key === "Alt" ||
      e.key === "Control" ||
      e.key === "AltGraph" ||
      e.key === "Tab" ||
      e.key !== textList[0]
    ) {
      return;
    } else {
      // e.preventDefault;
      indexPlus(e.key);
      checText(e.key);
      oldSpeed += 1;
    }
  }
});

btnReset.addEventListener("click", reload);
function reload() {
  window.location.reload();
}

function checkLocalStorage() {
  if (localStorage.getItem(KEY)) {
    coins.textContent = localStorage.getItem(KEY);
    speed = JSON.parse(localStorage.getItem(KEY));
  } else {
    console.log("No");
  }
}
function checkInput() {
  if (inputUserText.value !== "") {
    inputUserText.value = inputUserText.value.trim();
    devList = inputUserText.value;
    textList = inputUserText.value;
    allWords = inputUserText.value;
    inputText.value = inputUserText.value;
    inputUserText.value = "";
    copyTextList = textList.length;
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
  inputUserText.disabled = true;
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
      wordsError.data = wordsError.data.trim();
      findErrors();
      console.log("error: " + error);

      clearInterval(checkList);
      clearInterval(checTime);
      localStorage.setItem(KEY, coins.textContent);
      backdrop.classList.remove("is-hidden");
      lengthCount.textContent = allWords.length;
      recordList.textContent = error;
      timerCount.textContent = timer.textContent;
      console.log(wordsError);
      counterDoneWords();
      grade();

      addErrorsInModalErrors();
      if (sec >= textList.length / 3) {
        console.log(textList.length / 3);
      }
      // меньше чем 12 и больше чем 10
      else if (sec <= textList.length / 3.5 && sec >= textList.length / 4) {
      }
      //
      else if (sec < textList.length / 4) {
      } else {
      }
      return;
    }
  }, 250);
});

function addErrorsInModalErrors() {
  for (const i of wordsError.compare) {
    trueWords.textContent += i;
    console.log(wordsError.compare);
  }

  for (const i of wordsError.error) {
    falseWords.textContent += i;
  }
}

// delete old text
function indexPlus(key) {
  inputText.value = devList;
  if (key === textList[0]) {
    wordsError.data += textList[0];

    devList = devList.slice(1);
    inputText.value = devList;
    // когда закончил писать слово или нажал пробел
    if (key === " " || textList.length === 0) {
      wordsError.data = wordsError.data.trim();

      findErrors();
    } else {
      wordsError.comparativeData += key;
    }
  }
}
// Тут сравнивает правильное слово и не правильно и кидает по своим словарям
function findErrors() {
  if (wordsError.data === wordsError.comparativeData) {
    wordsError.data = "";
    wordsError.comparativeData = "";
  } else {
    wordsError.compare += wordsError.data;
    wordsError.compare += ", ";

    wordsError.error += wordsError.comparativeData;
    wordsError.data = "";
    wordsError.comparativeData = "";
    wordsError.error += ", ";
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
    key === "Tab" ||
    key === textList[0]
  ) {
    return;
  } else {
    error += 1;
    speed -= 1;
    console.log(error);

    wordsError.comparativeData += key;

    coins.textContent = speed;

    return;
  }
}

//Проверка совпадает написанная буква с тeкстом или нет
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
      if (localStorage.getItem(KEY) !== coins.textContent) {
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
console.log("length text: " + textList.length + " sumbols");

function zeroCoins() {
  setInterval(() => {
    if (coins.textContent < 0) {
      coins.textContent = 0;
      localStorage.setItem(KEY, coins.textContent);
      return;
    } else {
      return;
    }
  });
}

function counterDoneWords() {
  countDone = Math.round(((copyTextList - error) * 100) / copyTextList);
  if (countDone <= 0) {
    countProcentDone.textContent = 0 + " %";
  } else {
    countProcentDone.textContent = countDone + " %";
  }
  console.log(countDone);
}

function grade() {
  const progress = document.querySelector(".Progress");
  if (countDone >= 95) {
    progress.textContent = "Awesome";
  } else if (countDone <= 94 && countDone >= 80) {
    progress.textContent = " Super";
  } else if (countDone <= 79 && countDone >= 60) {
    progress.textContent = "Not bad";
  } else if (countDone <= 59 && countDone >= 30) {
    progress.textContent = "You need more training";
  } else if (countDone <= 29 && countDone >= 0) {
    progress.textContent = "Try again";
  } else if (countDone < 0) {
    progress.textContent = "Try again";
  }
  console.log(countDone);
}
