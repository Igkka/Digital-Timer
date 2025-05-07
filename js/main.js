const mins = document.querySelector("#mins")
const secs = document.querySelector("#secs")
const startBtn = document.querySelector(".btn")
const timerDisplay = document.querySelector(".timer")

let timer
let totalSeconds = 0


function startTimer(){
    let minutes = Number(mins.value)
    let seconds = Number(secs.value)
    totalSeconds = (minutes * 60) + seconds
    console.log(totalSeconds)

    //проверка на валидность

    if(totalSeconds <= 0 || isNaN(totalSeconds) ){
        alert("Введите корректное время")
    }

    if(timer){
        clearInterval(timer)
    }
    timer = setInterval(() => {
        updateTimer()
    },1000)
}

function updateTimer(){
    if(totalSeconds >= 0){
        totalSeconds--
        timerDisplay.innerHTML = formatTime(totalSeconds)
    }else{
        stopTimer()

    }
}

function formatTime(time){
    let minute = String( Math.floor(time / 60)).padStart(2,"0")
    let second = String(time % 60).padStart(2,"0")
    return `00 : ${minute} : ${second}` 
}

function stopTimer(){
    clearInterval(timer)
    timer = null
    timerDisplay.innerHTML = "00:00:00"
}

startBtn.addEventListener("click",startTimer)