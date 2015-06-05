describe("pizza", function() {
  "use strict";

  describe("toppings", function() {
    it("has toppings", function() {
      var pizza = new Pizza();
      expect(pizza.toppings).to.eql([]);
    });
  });
});
