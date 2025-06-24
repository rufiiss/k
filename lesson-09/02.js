document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('start');
  const cancelButton = document.getElementById('cancel');
  const countdownDisplay = document.getElementById('countdown');

  let countdownInterval;
  let currentCount = 0;

  // Function to start the countdown
  function startCountdown() {
    // Clear any existing interval to prevent multiple timers
    clearInterval(countdownInterval);

    currentCount = 3;
    countdownDisplay.textContent = currentCount;

    countdownInterval = setInterval(function() {
      currentCount--;

      if (currentCount > 0) {
        countdownDisplay.textContent = currentCount;
      } else if (currentCount === 0) {
        // Countdown finished - show rocket
        countdownDisplay.textContent = '🚀';
        clearInterval(countdownInterval);
      }
    }, 1000);
  }

  // Function to cancel the countdown
  function cancelCountdown() {
    clearInterval(countdownInterval);
    countdownDisplay.textContent = 'Отменено';
  }

  // Event listeners for buttons
  startButton.addEventListener('click', startCountdown);
  cancelButton.addEventListener('click', cancelCountdown);
});