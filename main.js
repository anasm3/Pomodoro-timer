let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// Updating the timer on the screen.
let updateDisplay = () => {
    // Checking that minutes and seconds will always show two digits
    const minStr = minutes.toString().padStart(2, '0');
    const secStr = seconds.toString().padStart(2, '0');
    timerDisplay.textContent = `${minStr}:${secStr}`;
}

// Start Timer Logic:
let startTimer = () => {
    if (isRunning) return;
    isRunning = true;
    // Set an interval to update the timer every second
    timer = setInterval(() => {
        // when seconds will reach 0, it will then handle minute decrement
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timer);
                isRunning = false;
                // Will notify that time is up!
                alert('Time is up!');
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

// Stop Timer Logic:
let stopTimer = () => {
    clearInterval(timer);
    isRunning = false;
}

// Reset Function Logic
let resetTimer = () => {
    stopTimer();
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();