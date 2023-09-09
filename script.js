let seconds = 0;
let s = 0;
let m = 0;
let stopWatchStatus = false;
let stopWatch;

//On Start button event run the runStopWatch Function
const runStopWatch = () => {
  if (!stopWatchStatus) {
    stopWatchStatus = true;
    stopWatch = setInterval(() => {
        seconds = seconds + 1;
        if (seconds < 60) {
          document.getElementById("stop-watch-time").innerHTML = `00:${
            seconds < 10 ? "0" + seconds : seconds
          }`;
        } else if (seconds > 59) {
          m = Math.floor(seconds / 60);
          s = seconds % 60;
          m = m < 10 ? "0" + m : m;
          s = s < 10 ? "0" + s : s;
          document.getElementById("stop-watch-time").innerHTML = `${m}:${s}`;
        }
      }, 1000)
  }
};

//On Stop button event run the stopStopWatch Function
const stopStopWatch = () => {
  clearInterval(stopWatch);
  stopWatchStatus = false;
};

//On Reset button event run the resetStopWatch Function
const resetStopWatch = () => {
    seconds = 0;
    s = 0;
    m = 0;
    stopWatchStatus = false;
    clearInterval(stopWatch);
    document.getElementById("stop-watch-time").innerHTML = `00:00`;
};
