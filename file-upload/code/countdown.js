const countdownSecondsElement = document.getElementById('countdownSeconds');
let countdownSeconds = 10;

const countdownInterval = setInterval(() => {
  countdownSeconds--;
  countdownSecondsElement.textContent = countdownSeconds;
  
  if (countdownSeconds <= 0) {
    clearInterval(countdownInterval);
    // Set state countdownFinished to true after countdown is finished
    parent.postMessage({action: 'countdownFinished'}, '*');
  }
}, 1000);
