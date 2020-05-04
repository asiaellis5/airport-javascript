describe("Weather", function () {
  var weather;

  beforeEach(function () {
    weather = new Weather();
  });

  describe("generateWeather", function () {
    it("returns true when it is stormy", function () {
      spyOn(weather, "generateWeather").and.returnValue(true);
      expect(weather.generateWeather()).toEqual(true);
    });

    it("returns false when weather isnt stormy", function () {
      spyOn(weather, "generateWeather").and.returnValue(false);
      expect(weather.generateWeather()).toEqual(false);
    });
  });
});
