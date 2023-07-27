export default function Rate(props) {
  return (
    <div className="rate-container">
      <div className="circle">
        <img className="star" src="/assets/icon-star.svg" alt="star" />
      </div>
      <h1 className="prompt">How did we do?</h1>
      <p className="prompt-details">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="ratings">{props.circleRating}</div>
      <button className="button" onClick={props.showRating}>
        SUBMIT
      </button>
    </div>
  );
}
