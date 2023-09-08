let timerId = null;
let timeCount = document.querySelector("#timeCount");
let NowTime = document.querySelector("#current-time");

timeCount.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    clearInterval(timerId);
    let inputTime = Math.floor(parseFloat(timeCount.value));
    if (isNaN(inputTime)) {
      inputTime = 0;
    }
    NowTime.textContent = inputTime;
    timerId = setInterval(function () {
      inputTime--;
      if (inputTime < 0) {
        clearInterval(timerId);
        NowTime.textContent = 0;
      } else {
        NowTime.textContent = inputTime;
      }
    }, 1000);
  }
});
