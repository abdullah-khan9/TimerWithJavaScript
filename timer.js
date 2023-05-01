
  // get the input elements and start button
  const hoursInput = document.getElementById('hours');
  const minutesInput = document.getElementById('minutes');
  const secondsInput = document.getElementById('seconds');
  const startBtn = document.getElementById('start-timer');

  // get the audio element for the alert sound
  const alertSound = document.getElementById('alert-sound');

  // set up the timer function
  let countdown = null;
  function startTimer() {
    // disable the start button while the timer is running
    startBtn.disabled = true;

    // get the duration from the input elements
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    // update the timer display every second
    let remainingSeconds = totalSeconds;
    countdown = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds <= 0) {
        // clear the countdown interval and play the alert sound
        clearInterval(countdown);
        alertSound.play();
        // show a window alert to notify the user
        window.alert('Timer expired!');
        // re-enable the start button
        startBtn.disabled = false;
      } else {
        const hours = Math.floor(remainingSeconds / 3600);
        const minutes = Math.floor((remainingSeconds % 3600) / 60);
        const seconds = remainingSeconds % 60;
        const timeDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('time-display').textContent = timeDisplay;
      }
    }, 1000);
  }

  // add an event listener to the start button
  startBtn.addEventListener('click', startTimer);