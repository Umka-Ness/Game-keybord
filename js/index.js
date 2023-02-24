const btn = document.querySelector(".btn-go")
const inputText = document.querySelector(".lastText")

const timer = document.querySelector(".timer")
const coins = document.querySelector(".coins")
const coin = document.querySelector(".slide-top")
const KEY = "coins"

let textList = "Привет, меня зовут Дима, я сделал эту прогу Привет, меня зовут Дима, я сделал эту прогу"
let devList = "Привет, меня зовут Дима, я сделал эту прогу Привет, меня зовут Дима, я сделал эту прогу"
let error = 0
let speed = 0
let oldSpeed = 0

checlLocalStorage()
document.body.addEventListener("keydown", e => {
    if (btn.disabled === true) {
        pushError(e.key)
        
        if (e.key === 'CapsLock' || e.key === "Shift" || e.key === "Alt" || e.key === "Control" || e.key != textList[0]) {
            return
        }
        else {
            e.preventDefault
            indexPlus(e.key)
            checText(e.key)
            oldSpeed += 1
        }
        
    }
})

function checlLocalStorage() {
    if (localStorage.getItem(KEY)) {
        coins.textContent = localStorage.getItem(KEY)
    }
    else {
        console.log("No")
    }
}

// Only Timer
btn.addEventListener("click", event => {
    speedTest()
    let sec = 0
    let min = 0
    inputText.value = devList
    btn.disabled = true
    const checTime = setInterval(() => {
        sec += 1
        timer.textContent = min + "m " + sec + " sec"
        if (sec === 60) {
            min += 1
            sec = 0
        }
        
    }, 1000)
    //End Game Function
    const checkList = setInterval(() => {
        if (textList.length === 0) {
            console.log("error: " + error)
            clearInterval(checkList)
            clearInterval(checTime)
            localStorage.setItem(KEY,coins.textContent)
            return
        }

    },250)
})

// delete old text
function indexPlus(key) {
    inputText.value = devList

    if (key === textList[0]) {

        devList = devList.slice(1)
        inputText.value = devList

        return
    }
}

// Push errors
function pushError(key) {
    if (key === 'CapsLock' || key === "Shift" || key === "Alt" || key === "Control" || key === textList[0]) {
            return
        }
    else {
        if (speed === 0) {
            error += 1;
            return
        }
        else {
            error += 1;
            speed -= 1
            console.log(error);
            coins.textContent = speed
            return
        }
        
        }
}
//Проверка совпадает написанная буква с ткстом или нет
function checText(key) {
    if (textList[0] === key) {
        textList = textList.slice(1)

        return
    }
}

// Speed text
function speedTest() {
    const timeout = setInterval(() => {
        if (oldSpeed === 0) {
            console.log("speed 0")
            return
        }
        else if (oldSpeed <= 2) {
            oldSpeed = 0
            
        }
        
        else if (oldSpeed === -1) {
            oldSpeed = 0
        }
        else {
            if (localStorage.getItem(KEY)) {
                oldSpeed = 0
                const localCoins = JSON.parse(KEY)
                console.log(localCoins)
                addCoin()
            }
            else {
                oldSpeed = 0
                speed += 1
                coins.textContent = speed
                addCoin()
            }
            
        }
    }, 500)
    
}

// add animation coin
function addCoin() {
    coin.classList.remove("slide-top")
        coin.classList.add("slide-top-null")
        coin.style.height = 50 + "px"
        coin.style.position = "absolute"
        coin.style.top = 180 + "px"
        coin.style.left = 80 + "px"
        coin.src = "img/null.png"
        setTimeout(() => {
          coin.src = "img/5a364041411e44.8325067215135048332667.png";
          coin.classList.remove("slide-top-null");
          coin.classList.add("slide-top");
        },0);
}