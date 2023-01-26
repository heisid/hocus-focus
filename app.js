let timer;
let target = null;

function start() {
    document.getElementById('startBtn').disabled = true;
    let remaining = target ?? "0:2:10";

    timer = setInterval(function() {
        document.getElementById('display').innerHTML = remaining;
        if (remaining === '0:0:0') {
            stop();
        }

        const remainingArr = remaining.split(':');
        let hour = parseInt(remainingArr[0]);
        let minute = parseInt(remainingArr[1]);
        let second = parseInt(remainingArr[2]);

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