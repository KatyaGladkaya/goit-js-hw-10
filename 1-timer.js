import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-BbbuE1sJ.js";l("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){f(t[0])}});const e={startBtn:document.querySelector(".button"),clockFaceSeconds:document.querySelector(".js-seconds-value"),clockFaceMinutes:document.querySelector(".js-minutes-value"),clockFaceHours:document.querySelector(".js-hours-value"),clockFaceDays:document.querySelector(".js-days-value"),datetimeInput:document.querySelector(".input")};let o=null;function f(t){t&&t<=new Date?(m.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),e.startBtn.disabled=!0):(e.startBtn.disabled=!1,o=t)}function h(t){const{days:n,hours:r,minutes:s,seconds:a}=p(t);e.clockFaceDays.textContent=n,e.clockFaceHours.textContent=r,e.clockFaceMinutes.textContent=s,e.clockFaceSeconds.textContent=a}function p(t){const c=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:String(c).padStart(2,"0"),hours:String(i).padStart(2,"0"),minutes:String(u).padStart(2,"0"),seconds:String(d).padStart(2,"0")}}const y={intervalId:null,start(){o&&(this.intervalId=setInterval(()=>{this.tick()},1e3),e.startBtn.disabled=!0)},stop(){clearInterval(this.intervalId),e.startBtn.disabled=!1,e.datetimeInput.disabled=!1},tick(){const t=Date.now(),n=o-t;n<=0?this.stop():h(n)}};e.startBtn.addEventListener("click",()=>{o&&y.start()});document.addEventListener("DOMContentLoaded",()=>{e.startBtn.disabled=!0});
//# sourceMappingURL=1-timer.js.map
