import React from "react";
import Style from "./card.module.css";

type Props = {
  children: JSX.Element;
};

const Card = ({ children }: Props) => {
  return <div className={Style.card}>{children}</div>;
};

export default Card;
