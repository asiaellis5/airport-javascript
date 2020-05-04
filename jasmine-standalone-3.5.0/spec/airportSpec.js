"use strict";

describe ("Airport", function() {
  let airport; 

  beforeEach(function() {
    airport = new Airport()
  })
  
  describe("land", function() {
    it("lets a plane land", function(){
      airport.land("plane")
      expect(airport.hangar.length).toEqual(1)
    })
  })
})