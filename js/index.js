const btn = document.querySelector(".btn-go")
const inputText = document.querySelector(".lastText")

const timer = document.querySelector(".timer")


let textList = "Набери"
let devList = "Набери"
let index = 0
let error = 0

document.body.addEventListener("keydown", e => {
    console.log("Keydown: ", e);
    if (btn.disabled === true) {
        e.preventDefault
        indexPlus(e.key)
        checText(e.key)
    }
})

// Only Timer
btn.addEventListener("click", event => {
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
    
}

function checText(key) {
    if (textList[0] === key) {
        textList = textList.slice(1)

        return
    }
}