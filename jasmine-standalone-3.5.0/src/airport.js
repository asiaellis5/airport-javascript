"use strict";

class Airport {
  constructor() {
    this.hangar = [];
    this.capacity = 20;
  }

  land = (plane) => {
    if (this.hangar.length < this.capacity) {
      this.hangar.push(plane);
    } else {
      return "Airport full";
    }
  };

  takeOff = () => {
    this.hangar.pop();
    return "Plane has taken off";
  };
}
