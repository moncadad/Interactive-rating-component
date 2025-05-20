export default function Rate(props) {
  return (
    <div className="card" id="rate">
      {/* <figure className="circle"> */}
      <img
        className=" card__logo"
        id="starIcon"
        src="/assets/icon-star.svg"
        alt="Decorative Star Icon"
      />
      {/* </figure> */}
      <h1 className=" card__heading ">How did we do?</h1>
      <p className=" card__text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className=" card__ratings">{props.circleRating}</ul>
      <button
        type="button"
        className="button"
        id="submitButton"
        onClick={props.showRating}
      >
        SUBMIT
      </button>
    </div>
  );
}
