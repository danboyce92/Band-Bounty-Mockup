import React, { useState } from "react"
import { useInterval } from "./useInterval"

const Timer = ({ date }) => {

    let [ display, setDisplay ] = useState()
    let [ isRunning, setIsRunning ] = useState(true)


    const deadline = date * 1000
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    useInterval(() => {
        
        const today = new Date()
        const timeSpan = deadline - today
           
        if (timeSpan <= 0) {
            setDisplay("Bounty has expired")
            setIsRunning(false)
            return
        }
    
        const days = Math.floor(timeSpan / day)
        const hours = Math.floor((timeSpan % day) / hour)
        const minutes = Math.floor((timeSpan % hour) / minute)
        const seconds = Math.floor((timeSpan % minute) / second)
    
        if(days > 0){
             setDisplay(days + ' days ' + hours + 'hours')
        } if (days <= 0 && hours > 0) {
            setDisplay(hours + ':' + minutes + ':' + seconds)
        } if (hours <= 0 && seconds > 0) {
            setDisplay(minutes + ':' + seconds)
        }
    
    }, isRunning ? 1000 : null);




// const deadline = date * 1000
// const second = 1000;
// const minute = second * 60;
// const hour = minute * 60;
// const day = hour * 24;
// let timerId

// const countDown = () => {
//     const today = new Date()
//     const timeSpan = deadline - today
    

    
//     if (timeSpan <= 0) {
//         timeLeft.innerHTML = "Bounty has expired"
//         clearInterval(timerId)
//         return
//     }

//     const days = Math.floor(timeSpan / day)
//     const hours = Math.floor((timeSpan % day) / hour)
//     const minutes = Math.floor((timeSpan % hour) / minute)
//     const seconds = Math.floor((timeSpan % minute) / second)

//     if(days > 0){
//         timeLeft.innerHTML = days + ' days ' + hours + 'hours'
//     } if (days <= 0 && hours > 0) {
//         timeLeft.innerHTML = hours + ':' + minutes + ':' + seconds
//     } if (hours <= 0 && seconds > 0) {
//         timeLeft.innerHTML = minutes + ':' + seconds
//     }

// }


return (
    <div>
        {display}
    </div>
)

}

export default Timer;