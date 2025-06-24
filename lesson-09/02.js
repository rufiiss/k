// document.addEventListener('DOMContentLoaded', function() {
//   const startButton = document.getElementById('start');
//   const cancelButton = document.getElementById('cancel');
//   const countdownDisplay = document.getElementById('countdown');

//   let countdownInterval = null;
//   let currentCount = 0;
//   let isCountdownRunning = false;

//   // Function to start the countdown
//   function startCountdown() {
//     // If countdown is already running, do nothing
//     if (isCountdownRunning) return;

//     // Reset state
//     clearInterval(countdownInterval);
//     isCountdownRunning = true;
//     currentCount = 3;
//     countdownDisplay.textContent = currentCount;

//     countdownInterval = setInterval(function() {
//       currentCount--;

//       if (currentCount > 0) {
//         countdownDisplay.textContent = currentCount;
//       } else if (currentCount === 0) {
//         // Countdown finished - show rocket
//         countdownDisplay.textContent = '🚀';
//         clearInterval(countdownInterval);
//         isCountdownRunning = false;
//       }
//     }, 1000);
//   }

//   // Function to cancel the countdown
//   function cancelCountdown() {
//     // Only cancel if countdown is running
//     if (!isCountdownRunning) return;

//     clearInterval(countdownInterval);
//     countdownDisplay.textContent = 'Отменено';
//     isCountdownRunning = false;
//   }

//   // Event listeners for buttons
//   startButton.addEventListener('click', startCountdown);
//   cancelButton.addEventListener('click', cancelCountdown);
// });