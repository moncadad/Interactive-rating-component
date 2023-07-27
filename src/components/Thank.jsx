export default function Thank(props) {
  return (
    <div className="ty-container">
      <img
        className="image"
        src="/assets/illustration-thank-you.svg"
        alt="Thank You Illustration"
      />
      <p className="rated">You selected {props.rated} out of 5</p>
      <h1 className="prompt">Thank You!</h1>
      <p className="prompt-details">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
