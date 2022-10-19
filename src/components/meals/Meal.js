import React from "react";
import classes from "./Meal.module.css";

export default function Meal(props) {
  return (
    <div className={classes.container}>
      <img
        src={props.image}
        alt="Food Image"
        className={classes.mealImage}
      ></img>

      <div>
        <h1>{props.disk}</h1>
        <p>{props.description}</p>
      </div>
      <div className={classes.priceStyle}>
        <h2>{props.price}</h2>
        <h3 className={classes.featurePriceStyle}>{props.featurePrice}</h3>
      </div>
    </div>
  );
}
