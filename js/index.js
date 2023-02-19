const btn = document.querySelector(".btn-go")
const inputText = document.querySelector(".lastText")
const inputHidden = document.querySelector(".input-absolute")

const timer = document.querySelector(".timer")


let textList = "Набери небольшой текст. Проверь, сколько знаков в минуту ты печатаешь на русском, украинском или английском языке, и порази друзей или работодателей сертификатом скорости печати"
let devList = "Набери небольшой текст. Проверь, сколько знаков в минуту ты печатаешь на русском, украинском или английском языке, и порази друзей или работодателей сертификатом скорости печати"
let index = 0

document.body.addEventListener("keydown", e => {
    console.log("Keydown: ", e);
    if (btn.disabled === true) {
        e.preventDefault
        indexPlus(e.key)
        checText(e.key)
    }
})

inputHidden.addEventListener("keydown", e => {
    console.log("Keydown: ", e);
    if (btn.disabled === true) {
        e.preventDefault
        indexPlusMob(e.key)
    }
})

function indexPlusMob(key) {
    inputHidden.value = devList
    if (key === textList[index]) {

        devList = devList.slice(1)
        inputHidden.value = devList

        return
    }
    
}


// Only Timer
btn.addEventListener("click", event => {
    inputHidden.focus()
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
            console.log("list === 0")
            clearInterval(checkList)
            clearInterval(checTime)
            return
        }

    },250)
})

// replace color in Input
function indexPlus(key) {
    inputText.value = devList
    if (key === textList[index]) {

        devList = devList.slice(1)
        inputText.value = devList

        return
    }
    
}

function checText(key) {
    if (textList[0] === key) {
        textList = textList.slice(1)
        return
    }
}
