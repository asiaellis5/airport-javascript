"use strict";

describe("Airport", function () {
  let airport;

  beforeEach(function () {
    airport = new Airport();
  });

  describe("land", function () {
    it("lets a plane land", function () {
      spyOn(airport, "isStormy").and.returnValue(false);
      airport.land("plane");
      expect(airport.hangar.length).toEqual(1);
    });

    it("doesnt allow a plane to land if the weather is stormy", function () {
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function () {
        airport.land("plane");
      }).toThrowError("Unable to land in stormy weather");
    });
  });

  describe("takeOff", function () {
    it("allows a plane to take off", function () {
      spyOn(airport, "isStormy").and.returnValue(false);
      airport.land("plane");
      airport.land("plane");
      airport.takeOff();
      expect(airport.hangar.length).toEqual(1);
    });

    it("confirms that a plane has take off", function () {
      spyOn(airport, "isStormy").and.returnValue(false);
      airport.land("plane");
      expect(airport.takeOff()).toEqual("Plane has taken off");
    });

    it("doesnt allow a plane to take off if there isnt one", function () {
      spyOn(airport, "isStormy").and.returnValue(false);
      expect(airport.takeOff()).toEqual("Sorry no planes available");
    });

    it("doesnt allow a plane to take off if the weather is stormy", function () {
      spyOn(Math, "random").and.returnValue(1);
      airport.land("plane");
      spyOn(airport, "isStormy").and.returnValue(true);
      expect(function () {
        airport.takeOff();
      }).toThrowError("Unable to take off in stormy weather");
      expect(airport.hangar.length).toEqual(1);
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
      spyOn(airport, "isStormy").and.returnValue(false);
      for (let i = 0; i <= 20; i++) {
        airport.land("plane");
      }
      expect(airport.land("plane")).toEqual("Airport full");
    });

    it("doesnt allow a plane to land if the hangar is full and capacity isnt the deafult", function () {
      var airportOne = new Airport(40);
      spyOn(airportOne, "isStormy").and.returnValue(false);
      for (let i = 0; i < 40; i++) {
        airportOne.land("plane");
      }
      console.log(airportOne);
      expect(airportOne.land("plane")).toEqual("Airport full");
    });
  });
});
