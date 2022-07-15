import React, { useState } from "react";
import WatchDisplay from "./Compenents/watchDisplay/WatchDisplay";
import ButtonShow from "./Compenents/buttonShow/ButtonShow";
import "./App.css";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [stopWatch, setStopWatch] = useState();
  const [status, setStatus] = useState(0);
 

  const start = () => {
    run();
    setStatus(1);
    setStopWatch(setInterval(run, 10));
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(stopWatch);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(stopWatch);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => start();

  return (
    <div className="main-section">

        <div className="stopwatch">
          <WatchDisplay time={time} />
          <ButtonShow
            status={status}
            resume={resume}
            reset={reset}
            stop={stop}
            start={start}
          />
        </div>
   
    </div>
  );
}

export default App;
