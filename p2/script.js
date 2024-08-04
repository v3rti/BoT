const currentTime = new Date();
const hands = document.querySelectorAll('.hand');

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

let hourDeg = 0;
let minuteDeg = 0;
let secondDeg = 0;


setInterval(() => {
  let hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  if (hours >= 12){
    hours = hours - 12;
    hourDeg = 30 * hours;
  }

  minuteDeg = 360 / 60 * minutes;
  secondDeg = 360 / 60 * seconds;

  hourHand.style.transform = `rotate(${hourDeg}deg)`
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`
  secondHand.style.transform = `rotate(${secondDeg}deg)`

}, 500);
