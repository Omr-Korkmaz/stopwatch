import React from "react";
import './WatchDisplay.css'

function WatchDisplay({time}) {
  const h = () => {
    if (time.h === 0) {
      return "";
    } else {
      return (
        <span>{time.h >= 10 ? time.h : "0" + time.h}</span>
      );
    }
  };
  return (
    <div className="stopwatch">
      {h()}&nbsp;&nbsp;
      <span className="stopwatch__item">{time.m >= 10 ? time.m : "0" + time.m}</span>
      &nbsp;:&nbsp;
      <span className="stopwatch__item">{time.s >= 10 ? time.s : "0" + time.s}</span>
      &nbsp;.&nbsp;
      <span className="stopwatch__item">{time.ms >= 10 ? time.ms : "0" + time.ms}</span>
    </div>
  );
}

export default WatchDisplay;
