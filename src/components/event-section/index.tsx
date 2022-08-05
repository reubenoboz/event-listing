import React from "react";
import EventItem from "../event-item";
import { EventT, FilterT } from "../../types/event";
import Styles from "./event-section.module.css";

type EventPropsT = {
  eventList: Array<EventT>;
  filter: FilterT;
};

const EventSection = ({ eventList, filter }: EventPropsT) => {

  let eventsData = eventList
    .filter((term) =>
      term.city.toLowerCase().includes(filter.cityFilter.toLowerCase())
    )
    .filter((price) => price.minPrice <= filter.priceFilter)


  return (
    <div className={Styles.container}>
      {eventsData.length === 0 ? (
        <div style={{textAlign: "center"}}>No event found, try again</div>
      ) : (
        <>
          {eventsData.map((event) => (
            <EventItem event={event} key={event.id} />
          ))}
        </>
      )}
    </div>
  );
};

export default EventSection;
