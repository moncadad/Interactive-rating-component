import React from "react";
export default function Response(props) {
  return (
    <div className="card response__card" id="response">
      <img
        className="card__img"
        src="/assets/illustration-thank-you.svg"
        alt="Figure of a mobile device"
      />
      <p className="rated card__rate--selected">
        You selected {props.rated} out of 5
      </p>
      <h1 className="prompt card__heading">Thank You!</h1>
      <p className="prompt-details card__text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
