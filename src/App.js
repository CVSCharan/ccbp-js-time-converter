import { useState } from "react";
import "./App.css";

function App() {
  const [errMsg, setErrMsg] = useState("");
  const [result, setResult] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  const renderRes = result === "" ? "d-none" : "seconds";
  const renderErr = errMsg === "" ? "d-none" : "errormsg";

  const onChangeHours = (e) => {
    setHours(e.target.value);
  };

  const onChangeMinutes = (e) => {
    setMinutes(e.target.value);
  };

  const onClickButton = () => {
    if (hours === "" && minutes === "") {
      setErrMsg("Please enter a valid number of hours");
    } else if (hours !== "" && minutes === "") {
      setErrMsg("Please enter a valid number of minutes.");
    } else {
      setErrMsg("");
      const resValue = parseInt(hours) * 3600 + parseInt(minutes) * 60;
      setResult(resValue + " s");
    }
  };

  return (
    <div
      id="bgContainer"
      className="bg-container d-flex flex-column justify-content-center"
    >
      <h1 className="heading">Time Converter</h1>
      <p className="para">
        Enter hours and minutes <br />
        to convert into
        <br /> seconds
      </p>
      <label for="hoursInput" className="hours">
        Hours *
      </label>
      <input
        id="hoursInput"
        type="text"
        className="input"
        placeholder="Enter Time in Hours"
        onChange={onChangeHours}
      />
      <label for="minutesInput" className="minutes">
        Minutes *
      </label>
      <input
        id="minutesInput"
        type="text"
        className="input"
        placeholder="Enter Time in Minutes"
        onChange={onChangeMinutes}
      />
      <button id="convertBtn" className="button btn" onClick={onClickButton}>
        Convert to Seconds
      </button>
      <p className={renderErr}>{errMsg}</p>
      <p className={renderRes}>{result}</p>
    </div>
  );
}

export default App;
