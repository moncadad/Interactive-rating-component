import "./App.css";
import Rate from "./components/Rate";
import Thank from "./components/Thank";
import { useState } from "react";

function App() {
  const rate = [1, 2, 3, 4, 5];
  const [updateRate, setUpdateRate] = useState(0);

  const circleRating = rate.map((num) => (
    <span className="circle" key={num} onClick={() => handleClick(num)}>
      {num}
    </span>
  ));

  const handleClick = (num) => {
    console.log(num);
    setUpdateRate(num);
  };

  const [show, setShow] = useState(true);
  function showRating() {
    if (updateRate === 0) {
      return window.alert("Please, select a rating.");
    }
    setShow(!show);
  }

  return (
    <div className="container">
      {show && <Rate circleRating={circleRating} showRating={showRating} />}
      {!show && <Thank rated={updateRate} />}
    </div>
  );
}

export default App;
