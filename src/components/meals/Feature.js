import React, { Fragment } from "react";
import classes from "./Feature.module.css";
import Meal from "./Meal";

export default function Feature() {
  const DUMMY_MEALS = [
    {
      id: "m1",
      type: "Appetizer",
      image:
        "https://www.happyfoodstube.com/wp-content/uploads/2016/03/homemade-sushi-image.jpg",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      featuresPrice: 29.99,
    },
    {
      id: "m2",
      type: "Main",
      image:
        "https://mydinner.co.uk/wp-content/uploads/2022/02/cordon-blue-schnitzel-1.jpg",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
      featuresPrice: 19.99,
    },
    {
      id: "m3",
      type: "Dessert",
      image:
        "https://dempsters.ca/sites/default/files/styles/recipes_full_467x341_/public/2021-04/121917%20Spicy%20BBQ%20Burger-028_V3_1x1.jpg?itok=NEZFPVIx",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
      featuresPrice: 15.99,
    },
    {
      id: "m4",
      image:
        "https://bio-c-bon.eu/sites/default/files/styles/visuel_detail/public/module/bio_push/recettes/green-bowl.png?itok=HxYJvb71",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
      featuresPrice: 24.99,
    },
  ];

  const featureList = DUMMY_MEALS.map((meal) => (
    <li>
      <Meal
        key={meal.id}
        image={meal.image}
        disk={meal.name}
        description={meal.description}
        price={meal.price}
        featurePrice={meal.featuresPrice}
      ></Meal>
    </li>
  ));

  return (
    <Fragment>
      <div className={classes.summary}>
        <h1 className={classes.h2}>Feature</h1>
        <ul className={classes.featureList}>{featureList}</ul>
      </div>
    </Fragment>
  );
}
