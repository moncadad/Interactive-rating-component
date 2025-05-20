import "./App.css";
import Rate from "./components/Rate";
// import Thank from "./components/Thank";
import Response from "./components/Response";

import { useState } from "react";

function App() {
  const rate = [1, 2, 3, 4, 5];
  const [updateRate, setUpdateRate] = useState(0);

  const circleRating = rate.map((num) => (
    <li className="rating__wrapper" key={num} onClick={() => handleClick(num)}>
      {num}
    </li>
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
    <main className="container">
      {show && <Rate circleRating={circleRating} showRating={showRating} />}
      {!show && <Response rated={updateRate} />}
    </main>
  );
}

export default App;
