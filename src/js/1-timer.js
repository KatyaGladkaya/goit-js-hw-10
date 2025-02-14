import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

let userSelectedDate = null;
const datetimePicker = document.querySelector('#datetime-picker');
const flatpickrInstance = flatpickr(datetimePicker, {
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    validateDate(userSelectedDate);
  },
});





const refs = {
  startBtn: document.querySelector('[data-start]'),
  clockFaceSeconds: document.querySelector('.js-seconds-value'),
  clockFaceMinutes: document.querySelector('.js-minutes-value'),
  clockFaceHours: document.querySelector('.js-hours-value'),
  clockFaceDays: document.querySelector('.js-days-value'),
};

const timer = {

    
  intervalId: null,
  initTime: userSelectedDate,

  start() {
    console.log('START');
    this.initTime = new Date();
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
      refs.startBtn.disabled = true;
  },

  tick() {
    const currentTime = Date.now();
    const diff = this.initTime - currentTime;
    const str = updateTimer(diff);

    if (currentTime > this.initTime) {
      this.stop();
    }
  },
};

refs.startBtn.addEventListener('click', () => {
  timer.start();
});

function updateTimer(ms) {
  const days = String(Math.floor(ms / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(
    Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, '0');
  const minutes = String(
    Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, '0');
  const seconds = String(Math.floor((ms % (1000 * 60)) / 1000)).padStart(
    2,
    '0'
  );

  refs.clockFaceDays.textContent = days;
  refs.clockFaceHours.textContent = hours;
  refs.clockFaceMinutes.textContent = minutes;
    refs.clockFaceSeconds.textContent = seconds;
    
    function validateDate(date) {
  const currentDate = new Date();

  if (date && date <= currentDate) {
    alert('Please choose a date in the future');
    startBtn.disabled = true;
  } else {
    startBtn.disabled = false;
  }
};
}


