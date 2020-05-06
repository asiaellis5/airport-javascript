describe("Plane", function () {
  let plane;
  let airport;

  beforeEach(function () {
    plane = new Plane();
    airport = jasmine.createSpyObj("airport", ["land"]);
  });

  describe("land", function () {
    it("can land at an airport", function () {
      airport.land(plane);
      expect(airport.land).toHaveBeenCalledWith(plane);
    });
  });

  describe("fuel", function () {
    it("has enough fuel to complete journey", function () {
      expect(plane.fuel).toEqual(false);
    });

    it("has fuel when refueled", function () {
      plane.reFuel();
      expect(plane.fuel).toEqual(true);
    });
  });
});
