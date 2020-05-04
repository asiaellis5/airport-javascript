"use strict";

describe("Airport", function () {
  let airport;

  beforeEach(function () {
    airport = new Airport();
  });

  describe("land", function () {
    it("lets a plane land", function () {
      airport.land("plane");
      expect(airport.hangar.length).toEqual(1);
    });
  });

  describe("takeOff", function () {
    it("allows a plane to take off", function () {
      airport.land("plane");
      airport.land("plane");
      airport.takeOff();
      expect(airport.hangar.length).toEqual(1);
    });

    it("confirms that a plane has take off", function () {
      airport.land("plane");
      expect(airport.takeOff()).toEqual("Plane has taken off");
    });

    it("doesnt allow a plane to take off if there isnt one", function () {
      expect(airport.takeOff()).toEqual("Sorry no planes available");
    });
  });

  describe("capacity", function () {
    it("has a default capacity of 20", function () {
      expect(airport.capacity).toEqual(20);
    });

    it("allows the default capacity to be overwritten", function () {
      var airportOne = new Airport(40);
      expect(airportOne.capacity).toEqual(40);
    });

    it("doesnt allow a plane to land if the hangar is full", function () {
      for (let i = 0; i <= 20; i++) {
        airport.land("plane");
      }
      expect(airport.land("plane")).toEqual("Airport full");
    });

    it("doesnt allow a plane to land if the hangar is full and capacity isnt the deafult", function () {
      var airportOne = new Airport(40);
      for (let i = 0; i < 40; i++) {
        airportOne.land("plane");
      }
      console.log(airportOne);
      expect(airportOne.land("plane")).toEqual("Airport full");
    });
  });
});
