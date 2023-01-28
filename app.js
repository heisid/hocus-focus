let timer;
let target;

// elements
let startBtn;
let setBtn;
let display;
let modal;
let hourInput;
let minuteInput;
let secondInput;
let audio;


document.addEventListener('DOMContentLoaded', function(event) {
    target = "0:2:10";

    // elements
    startBtn = document.getElementById('startBtn');
    setBtn = document.getElementById('setBtn');
    display = document.getElementById('display');
    modal = document.querySelector('.modal');
    hourInput = document.getElementById('hourInput');
    minuteInput = document.getElementById('minuteInput');
    secondInput = document.getElementById('secondInput');
    audio = new Audio('assets/Nyan Cat Sound Effect.mp3');

    display.innerHTML = target;
});
window.addEventListener('click', windowOnClick)


function start() {
    startBtn.disabled = true;
    setBtn.disabled = true;
    let remaining = target;

    timer = setInterval(function() {
        document.getElementById('display').innerHTML = remaining;

        const remainingArr = remaining.split(':');
        let hour = parseInt(remainingArr[0]);
        let minute = parseInt(remainingArr[1]);
        let second = parseInt(remainingArr[2]);
        if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(timer);
            audio.play();
        }

        if (second === 0) {
            second = 59;
            minute--;
        } else {
            second--;
        }

        if (minute < 0) {
            minute = 59;
            hour--;
        }

        remaining = hour + ':' + minute + ':' + second;
    }, 1000);
}

function toggleModal() {
    modal.classList.toggle('show-modal');
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

function isValidInput(input) {
    return !isNaN(input) && input >= 0;
}

function setTime() {
    const hour = parseInt(hourInput.value);
    const minute = parseInt(minuteInput.value);
    const second = parseInt(secondInput.value);

    if ([hour, minute, second].every(isValidInput)) {
        target = hour + ':' + minute + ':' + second;
        display.innerHTML = target;
        toggleModal();
    }
}

function reset() {
    clearInterval(timer);
    display.innerHTML = target;
    startBtn.disabled = false;
    setBtn.disabled = false;
}