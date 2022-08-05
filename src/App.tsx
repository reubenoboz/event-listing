import React, { useState } from "react";
import Styles from "./styles.module.css";
import events from "./events.json";
import Header from "./components/header";
import { EventListT, FilterT } from "./types/event";
import FilterSection from "./components/filter-section";
import EventSection from "./components/event-section";
import { getMaxPrice } from "./utils/functions";


export default function App() {
  const [eventList] = useState<EventListT["events"]>(events);
  const [filter, setFilter] = useState<FilterT>({
    cityFilter: "",
    priceFilter: getMaxPrice(eventList),
    lowestFilter: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className={Styles.app}>
      <Header />
      <FilterSection filter={filter} handleChange={handleChange} />
      <EventSection eventList={eventList} filter={filter} />
    </div>
  );
}
