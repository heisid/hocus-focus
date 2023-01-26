let timer;
let target = "0:2:10";

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('display').innerHTML = target;
});

function start() {
    document.getElementById('startBtn').disabled = true;
    let remaining = target ?? "0:5:10";

    timer = setInterval(function() {
        document.getElementById('display').innerHTML = remaining;

        const remainingArr = remaining.split(':');
        let hour = parseInt(remainingArr[0]);
        let minute = parseInt(remainingArr[1]);
        let second = parseInt(remainingArr[2]);
        if (hour === 0 && minute === 0 && second === 0) {
            clearInterval(timer);
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

function reset() {
    clearInterval(timer);
    document.getElementById('display').innerHTML = target;
    document.getElementById('startBtn').disabled = false;
}