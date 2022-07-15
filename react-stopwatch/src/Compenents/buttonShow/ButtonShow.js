import React from "react";
import './ButtonShow.css'

function ButtonShow({ status, resume, reset, stop, start }) {
  return (
    <div className="Btn-container">
      {status === 0 ? <button className="btn-container__btn" onClick={start}>Start</button> : ""}

      {status === 1 ? (
        <div className="Btn-container__status-1">
          <button className="btn-container__btn" onClick={stop}>Stop</button>

          <button className="btn-container__btn" onClick={reset}>Reset</button>
        </div>
      ) : (
        ""
      )}

      {status === 2 ? (
        <div className="Btn-container__status-2">
          <button className="btn-container__btn" onClick={resume}>Resume</button>
          <button className="btn-container__btn" onClick={reset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ButtonShow;
