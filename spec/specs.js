describe("pizza", function() {
  "use strict";
  describe("size", function() {
    it("has a size", function() {
      var pizza1 = new Pizza("large");
      expect(pizza1.size).to.eql("large");
    });
  });

  describe("toppings", function() {
    it("has toppings", function() {
      var pizza1 = new Pizza("large");
      expect(pizza1.toppings).to.eql([]);
    });
    it("can add toppings", function() {
      var pizza1 = new Pizza("large");
      pizza1.addTopping("mushroom");
      pizza1.addTopping("ham");
      expect(pizza1.toppings).to.eql(["mushroom", "ham"]);
    });
  });
});
