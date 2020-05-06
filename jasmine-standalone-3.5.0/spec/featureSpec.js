describe("feature", function () {
  let plane;
  let airport;

  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
  });

  describe("land", function () {
    it("lands a plane at an airport", function () {
      spyOn(airport, "isStormy").and.returnValue(false);
      airport.land(plane);
      expect(airport.hangar[0]).toEqual(plane);
      expect(plane.fuel).toBe(false);
    });

    describe("land and takeOff", function () {
      it("lands and plane and then takes that plane off", function () {
        spyOn(airport, "isStormy").and.returnValue(false);
        airport.land(plane);
        airport.takeOff();
        expect(airport.hangar).not.toContain(plane);
        expect(plane.fuel).toBe(true);
      });
    });
  });
});
