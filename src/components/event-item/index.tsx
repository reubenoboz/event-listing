import React, { FC } from "react";
import Card from "../card";
import { EventT } from "../../types/event";
import Styles from "./event-item.module.css";

type EventItemT = {
  event: EventT;
};

const EventItem: FC<EventItemT> = ({ event }) => {
  const { name, city, minPrice } = event;

  return (
    <Card>
      <div className={Styles.container}>
        <div>
          <div className={Styles.name}>{name}</div>
          <div className={Styles.city}>{city}</div>
        </div>
        <div className={Styles.minPrice}>${minPrice}</div>
      </div>
    </Card>
  );
};

export default EventItem;
