import React, { Fragment } from "react";
import Feature from "../meals/Feature";
import VisualMenu from "../meals/VisualMenu";
import Foooter from "./Foooter";
import Header from "./Header";

export default function Home() {
  return (
    <Fragment>
      <Header></Header>
      <Feature></Feature>
      <VisualMenu></VisualMenu>
      <Foooter></Foooter>
    </Fragment>
  );
}
