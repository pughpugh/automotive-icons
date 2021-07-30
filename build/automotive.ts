export type AutomotiveId =
  | "automatic"
  | "bike"
  | "calendar"
  | "car"
  | "clock"
  | "donutchart"
  | "door"
  | "electric"
  | "grid"
  | "home"
  | "linechart"
  | "list-alternative"
  | "list"
  | "manual"
  | "nozzle"
  | "odometer"
  | "people"
  | "person"
  | "piechart"
  | "plug"
  | "search"
  | "setting"
  | "van";

export type AutomotiveKey =
  | "Automatic"
  | "Bike"
  | "Calendar"
  | "Car"
  | "Clock"
  | "Donutchart"
  | "Door"
  | "Electric"
  | "Grid"
  | "Home"
  | "Linechart"
  | "ListAlternative"
  | "List"
  | "Manual"
  | "Nozzle"
  | "Odometer"
  | "People"
  | "Person"
  | "Piechart"
  | "Plug"
  | "Search"
  | "Setting"
  | "Van";

export enum Automotive {
  Automatic = "automatic",
  Bike = "bike",
  Calendar = "calendar",
  Car = "car",
  Clock = "clock",
  Donutchart = "donutchart",
  Door = "door",
  Electric = "electric",
  Grid = "grid",
  Home = "home",
  Linechart = "linechart",
  ListAlternative = "list-alternative",
  List = "list",
  Manual = "manual",
  Nozzle = "nozzle",
  Odometer = "odometer",
  People = "people",
  Person = "person",
  Piechart = "piechart",
  Plug = "plug",
  Search = "search",
  Setting = "setting",
  Van = "van",
}

export const AUTOMOTIVE_CODEPOINTS: { [key in Automotive]: string } = {
  [Automotive.Automatic]: "61697",
  [Automotive.Bike]: "61698",
  [Automotive.Calendar]: "61699",
  [Automotive.Car]: "61700",
  [Automotive.Clock]: "61701",
  [Automotive.Donutchart]: "61702",
  [Automotive.Door]: "61703",
  [Automotive.Electric]: "61704",
  [Automotive.Grid]: "61705",
  [Automotive.Home]: "61706",
  [Automotive.Linechart]: "61707",
  [Automotive.ListAlternative]: "61708",
  [Automotive.List]: "61709",
  [Automotive.Manual]: "61710",
  [Automotive.Nozzle]: "61711",
  [Automotive.Odometer]: "61712",
  [Automotive.People]: "61713",
  [Automotive.Person]: "61714",
  [Automotive.Piechart]: "61715",
  [Automotive.Plug]: "61716",
  [Automotive.Search]: "61717",
  [Automotive.Setting]: "61718",
  [Automotive.Van]: "61719",
};
