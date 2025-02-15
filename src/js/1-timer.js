
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const datetimePicker = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    validateDate(selectedDates[0]);
  }
});

const refs = {
  startBtn: document.querySelector('[data-start]'),
  clockFaceSeconds: document.querySelector('.js-seconds-value'),
  clockFaceMinutes: document.querySelector('.js-minutes-value'),
  clockFaceHours: document.querySelector('.js-hours-value'),
  clockFaceDays: document.querySelector('.js-days-value'),
};

let initTime = null;

function validateDate(date) {
  const currentDate = new Date();
  if (date && date <= currentDate) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
      position: 'topRight'
    });
    refs.startBtn.disabled = true;
  } else {
    refs.startBtn.disabled = false;
    initTime = date; 
  }
}

function updateTimer(ms) {
  const { days, hours, minutes, seconds } = convertMs(ms);
  refs.clockFaceDays.textContent = days;
  refs.clockFaceHours.textContent = hours;
  refs.clockFaceMinutes.textContent = minutes;
  refs.clockFaceSeconds.textContent = seconds;
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % day % hour) / minute);
  const seconds = Math.floor((ms % day % hour % minute) / second);

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0')
  };
}

const timer = {
  intervalId: null,

  start() {
    if (!initTime) return;
    this.intervalId = setInterval(() => {
      this.tick();
    }, 1000);
    refs.startBtn.disabled = true;
  },

  tick() {
    const currentTime = Date.now(); 
    const diff = initTime - currentTime; 

    if (diff <= 0) {
      this.stop();
    } else {
      updateTimer(diff); 
    }
  },
};

refs.startBtn.addEventListener('click', () => {
  if (initTime) {
    timer.start();
  }
});
