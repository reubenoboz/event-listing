import { EventT } from "../types/event";

type ArrayT = {
  array: Array<EventT>;
};

export const getMaxPrice = (array: ArrayT["array"]) => {
  let greatest = -Infinity;

  array.forEach((x) => {
    if (x.minPrice > greatest) {
      greatest = x["minPrice"];
    }
  });
  return greatest;
};