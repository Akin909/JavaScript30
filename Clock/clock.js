function setTime(){
const now = new Date();
const seconds = now.getSeconds()
const secondsDegrees = ((seconds/60)*360) + 90;
const secondHand = document.getElementById('second-hand')
secondHand.style.transform = "rotate("+secondsDegrees+"deg)"
//Get current minutes with JS date function the calculate the change in as a percentage of 360 degrees
const minutes = now.getMinutes();
const minutesDegrees = ((minutes/60)*360) + 90;
const minuteHand = document.getElementById('minute-hand');
minuteHand.style.transform = `rotate(${minutesDegrees}deg`;


const hours = now.getHours();
const hourDegrees = ((hours/12)*360) + 90;
const hourHand = document.getElementById('hour-hand');
hourHand.style.transform = `rotate(${hourDegrees}deg)`
}
//Set Interval calls the setTime function every second
setInterval(setTime,1000)
