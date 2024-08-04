const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

let hourDeg = 0;

setInterval(() => {
  let hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  if (hours >= 12){
    hours = hours - 12;
    hourDeg = 30 * hours;
  }

  hourHand.style.transform = `rotate(${hourDeg}deg)`
  minuteHand.style.transform = `rotate(${(360 / 60) * minutes}deg)`
  secondHand.style.transform = `rotate(${(360 / 60) * seconds}deg)`
}, 500);
