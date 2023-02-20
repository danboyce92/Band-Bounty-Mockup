import React, { useState } from 'react';
import { useInterval } from './useInterval';
import {
  updateBountyColorGreen,
  updateBountyColorRed,
} from '../firebase/firebase';

const Timer = ({ id, date, funds, target }) => {
  let [display, setDisplay] = useState();
  let [isRunning, setIsRunning] = useState(true);
  let [time, setTime] = useState(1000);

  const deadline = date * 1000;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const dollarRemoved = funds.slice(1);
  const targetDollarRemoved = target.slice(1);
  const fundsParsed = parseInt(dollarRemoved);
  const targetParsed = parseInt(targetDollarRemoved);

  useInterval(
    () => {
      const today = new Date();
      const timeSpan = deadline - today;

      if (fundsParsed > targetParsed) {
        setDisplay('Bounty target has been met');
        setIsRunning(false);
        updateBountyColorGreen(id);
        return;
      }

      if (timeSpan <= 0) {
        setDisplay('Bounty has expired');
        setIsRunning(false);
        updateBountyColorRed(id);
        return;
      }

      const days = Math.floor(timeSpan / day);
      const hours = Math.floor((timeSpan % day) / hour);
      const minutes = Math.floor((timeSpan % hour) / minute);
      const seconds = Math.floor((timeSpan % minute) / second);

      if (days > 0) {
        setDisplay(days + ' Days ' + hours + ' Hours');
        setTime(15000);
      }
      if (days < 0 && hours > 0) {
        setDisplay(hours + ':' + minutes + ':' + seconds);
        setTime(1000);
      }
      if (hours < 0 && seconds > 0) {
        setDisplay(minutes + ':' + seconds);
        setTime(1000);
      }
    },
    isRunning ? time : null
  );

  return <div>{display}</div>;
};

export default Timer;
