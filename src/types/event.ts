export type EventT = {
    id: number;
    name: string;
    city: string;
    minPrice: number;
  }

  export type EventListT = {
    events: Array<EventT>
  }

  export type FilterT = {
    cityFilter: string;
    priceFilter: number;
    lowestFilter: boolean;
  };