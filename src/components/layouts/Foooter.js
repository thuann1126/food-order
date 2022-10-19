import React from "react";
import classes from "./Footer.module.css";
import { GrApple } from "react-icons/gr";
import { RiGooglePlayFill } from "react-icons/ri";
import {
  AiFillPhone,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillCopyrightCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export default function Foooter() {
  return (
    <div className={classes.container}>
      <div className={classes.footerLabel}>
        <h2>Food Ninja</h2>
        <div className={classes.downloadIconContainer}>
          <RiGooglePlayFill className={classes.downloadIcon}></RiGooglePlayFill>
          <GrApple className={classes.downloadIcon}></GrApple>
        </div>
      </div>

      <div>
        <h2>Location</h2>
        <p>123 Queen st, Brampton, Ontario, CA</p>
        <h2>Contact</h2>
        <ul>
          <li>
            <AiFillPhone></AiFillPhone>
            {" 0946107119"}
          </li>
          <li>
            <BsFacebook></BsFacebook>
            {" facebook link"}
          </li>
          <li>
            <AiFillInstagram></AiFillInstagram> {" Instagram link"}
          </li>

          <li>
            <AiFillTwitterCircle></AiFillTwitterCircle> {" Twitter link"}
          </li>
        </ul>
      </div>

      <div className={classes.footerCopyRight}>
        <div className={classes.coppyRightItem}>Terms of Service</div>
        <div className={classes.coppyRightItem}>Delivery Locations</div>
        <div className={classes.coppyRightItem}>
          <AiFillCopyrightCircle></AiFillCopyrightCircle> 2022 Food Ninja
        </div>
      </div>
    </div>
  );
}
