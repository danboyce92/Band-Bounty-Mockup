import React from "react";

const Timer = ({ date }) => {

const timeLeft = document.getElementById('time-left')

const deadline = new Date('02/04/23')
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timerId

function countDown() {
    const today = new Date()
    const timeSpan = deadline - today
    

    
    if (timeSpan <= 0) {
        timeLeft.innerHTML = "00:00"
        clearInterval(timerId)
        return
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeLeft.innerHTML = days + 'days' + hours + 'hours' + minutes + 'min' + seconds + "seconds"

}

timerId = setInterval(countDown, second)


return (
    <div id="time-left">
        
    </div>
)

}

export default Timer;