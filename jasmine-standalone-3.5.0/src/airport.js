"use strict";

class Airport {
  constructor(capacity = 20) {
    this.hangar = [];
    this.capacity = capacity;
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
