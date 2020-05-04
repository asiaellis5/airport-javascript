"use strict";

class Airport {
  constructor(capacity = 20) {
    this.hangar = [];
    this.capacity = capacity;
    this.weather = new Weather();
  }

  land = (plane) => {
    if (this.hangar.length < this.capacity) {
      this.hangar.push(plane);
    } else {
      return "Airport full";
    }
  };

  takeOff = () => {
    if (!this.isStormy()) {
      if (this.hangar.length > 0) {
        this.hangar.pop();
        return "Plane has taken off";
      } else {
        return "Sorry no planes available";
      }
    } else {
      return "Unable to take off in stormy weather";
    }
  };

  isStormy = () => {
    this.weather.generateWeather();
  };
}
