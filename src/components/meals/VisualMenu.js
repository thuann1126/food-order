import React from "react";
import DishTypeCard from "./DishTypeCard";
import classes from "./VisualMenu.module.css";

export default function VisualMenu() {
  return (
    <div className={classes.container}>
      <DishTypeCard
        type="Appetizer"
        image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fall-appetizers-buffalo-dip-1661448460.jpg?crop=0.849xw:0.679xh;0.0529xw,0.138xh&resize=640:*"
      ></DishTypeCard>
      <DishTypeCard
        type="Main"
        image="https://images.immediate.co.uk/production/volatile/sites/2/2019/10/134_Roma_9780451497017_art_r1-facac84.jpg?quality=90&resize=700,466"
      ></DishTypeCard>
      <DishTypeCard
        type="Dessert"
        image="https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg"
      ></DishTypeCard>
    </div>
  );
}
