"use strict";

class Airport {
  constructor(capacity = 20) {
    this.hangar = [];
    this.capacity = capacity;
    this.weather = new Weather();
  }

  land = (plane) => {
    if (!this.isStormy()) {
      if (this.isNotFull()) {
        this.hangar.push(plane);
        this.noFuel(plane);
      } else {
        throw new Error("Airport full");
      }
    } else {
      throw new Error("Unable to land in stormy weather");
    }
  };

  takeOff = () => {
    if (!this.isStormy()) {
      if (this.isNotEmpty()) {
        this.reFuel();
        this.hangar.pop();
        return "Plane has taken off";
      } else {
        throw new Error("Sorry no planes available");
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

  isNotFull = () => {
    return this.hangar.length < this.capacity;
  };

  noFuel = (plane) => {
    return (plane.fuel = false);
  };

  reFuel = () => {
    this.hangar.slice(-1)[0].reFuel();
  };
}
