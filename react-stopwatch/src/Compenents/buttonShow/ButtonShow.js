import React from "react";
import './ButtonShow.css'

function ButtonShow({ status, resume, reset, stop, start }) {
  return (
    <div className="Btn-container">
      {status === 0 ? <button className="btn-container__start" onClick={start}>Start</button> : ""}

      {status === 1 ? (
        <div className="Btn-container__status-1">
          <button onClick={stop}>Stop</button>

          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div className="Btn-container__status-2">
          <button onClick={resume}>Resume</button>
          <button onClick={reset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ButtonShow;
