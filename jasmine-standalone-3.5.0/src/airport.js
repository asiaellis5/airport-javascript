"use strict";

class Airport {
  constructor(capacity = 20) {
    this.hangar = [];
    this.capacity = capacity;
    this.weather = new Weather();
  }

  land = (plane) => {
    if (!this.isStormy()) {
      if (this.isFull()) {
        this.hangar.push(plane);
      } else {
        return "Airport full";
      }
    } else {
      throw new Error("Unable to land in stormy weather");
    }
  };

  takeOff = () => {
    if (!this.isStormy()) {
      if (this.isNotEmpty()) {
        this.hangar.pop();
        return "Plane has taken off";
      } else {
        return "Sorry no planes available";
      }
    } else {
      throw new Error("Unable to take off in stormy weather");
    }
  };

  isStormy = () => {
    return this.weather.generateWeather();
  };

  isNotEmpty = () => {
    return this.hangar.length > 0;
  };

  isFull = () => {
    return this.hangar.length < this.capacity;
  };
}
