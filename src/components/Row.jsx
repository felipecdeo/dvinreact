import react from "react";

  export default props =>
      <div className="container__block">
        <div className="container__image container__image--about"></div>
        <h1 className="container__title font--medium no-margin">{props.title}</h1>
        <p className="container__desc no-margin">{props.desc}</p>
      </div>

