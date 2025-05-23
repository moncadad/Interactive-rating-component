export default function Thank(props) {
  return (
    <div className="ty-container card" id="response">
      <img
        className="image card__img"
        src="/assets/illustration-thank-you.svg"
        alt="Figure of a mobile device"
      />
      <p className="rated card__rate-selection">
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
