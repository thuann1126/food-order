import React from "react";
import classes from "./DishTypeCard.module.css";

export default function DishTypeCard({ type, image }) {
  return (
    <div
      className={classes.cardStyle}
      style={{ backgroundImage: `url(${image})` }}
    >
      {type}
    </div>
  );
}
