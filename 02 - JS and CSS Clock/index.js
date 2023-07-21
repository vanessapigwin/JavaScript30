const now = new Date();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    seconds += 1;
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    minutes += 1/60;
    const minuteDegrees = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    hours += 1/3600;
    const hourDegrees = (hours/12 * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;    
}

setInterval(setDate, 1000)