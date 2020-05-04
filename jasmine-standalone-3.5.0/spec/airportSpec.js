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
  });
});
