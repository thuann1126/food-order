import React, { Fragment } from "react";
import Style from "./Header.module.css";

export default function Header() {
  return (
    <Fragment>
      <nav className={Style.nav}>
        <h1>Food Ninja</h1>
        <ul className={Style.navGroup}>
          <li>Menu</li>
          <li>Cart</li>
          <li>Account</li>
        </ul>
      </nav>
      <div>
        <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"></img>
      </div>
    </Fragment>
  );
}
