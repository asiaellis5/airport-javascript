"use strict";

class Airport {
  constructor() {
    this.hangar = [];
  }

  land = (plane) => {
    this.hangar.push(plane);
  };

  takeOff = () => {
    this.hangar.pop();
    return "Plane has taken off";
  };
}
