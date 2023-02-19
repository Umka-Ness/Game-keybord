const btn = document.querySelector(".btn-go")
const inputText = document.querySelector(".lastText")

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


// Only Timer
btn.addEventListener("click", event => {
    let time = 0
    inputText.value = devList
    btn.disabled = true
    const checTime = setInterval(() => {
        time += 1
        timer.textContent = time + " sec"
        
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
