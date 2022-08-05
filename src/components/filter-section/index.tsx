import React from "react";
import { FilterT } from "../../types/event";
import Styles from "./filter-section.module.css";

type PropsT = {
  filter: FilterT;
  handleChange: Function
};


const FilterSection = ({filter, handleChange}: PropsT) => {

  return (
    <div className={Styles.container}>
      <input
        className={Styles.filterInput}
        type="text"
        placeholder="Filter by City"
        name="cityFilter"
        value={filter.cityFilter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
        autoFocus
      />
      <input
        className={Styles.filterInput}
        type="number"
        placeholder="Filter by Price"
        name="priceFilter"
        value={filter.priceFilter}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => handleChange(e)}
      />
      <button className={`${Styles.lowestButton} ${filter.lowestFilter && Styles.activeButton}`} type="button">
        Lowest Price
      </button>
    </div>
  );
};

export default FilterSection;
