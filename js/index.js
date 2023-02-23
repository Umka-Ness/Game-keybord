const btn = document.querySelector(".btn-go")
const inputText = document.querySelector(".lastText")

const timer = document.querySelector(".timer")
const coins = document.querySelector(".coins")


let textList = "Привет, меня зовут Дима, я сделал эту прогу Привет, меня зовут Дима, я сделал эту прогу"
let devList = "Привет, меня зовут Дима, я сделал эту прогу Привет, меня зовут Дима, я сделал эту прогу"
let index = 0
let error = 0
let speed = 0
let oldSpeed = 0
let countCoins = 0


document.body.addEventListener("keydown", e => {
    if (btn.disabled === true) {
        if (e.key === 'CapsLock' || e.key === "Shift" || e.key === "Alt" || e.key === "Control" || e.key != textList[0]) {
        return
        }
        else {
        console.log(textList[0])
        e.preventDefault
        indexPlus(e.key)
        checText(e.key)
        oldSpeed += 1
    }}
})

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
    const checkList = setInterval(() => {
        if (textList.length === 0) {
            console.log("error: " + error)
            clearInterval(checkList)
            clearInterval(checTime)
            return
        }

    },250)
})

// replace color in Input
function indexPlus(key) {
    inputText.value = devList
    if (key === 'CapsLock' || key === "Shift" || key === "Alt" || key === "Control") {
        return
    }
    else if (key === textList[index]) {

        devList = devList.slice(1)
        inputText.value = devList

        return
    }
    else {
        error += 1
        console.log(error)
    }
    return
    
}

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
        else if (oldSpeed <= 4) {
            oldSpeed = 0
            console.log("speed -1")
            console.log(speed)
            
        }
        
        else if (oldSpeed === -1) {
            oldSpeed = 0
        }
        else {
            oldSpeed = 0
            speed += 1
            console.log("speed +1")
            console.log(speed)
        }
        
        coins.textContent = speed
        console.log("lalala")
    }, 1000)
    
}