describe("pizza", function() {
  "use strict";
  describe("size", function() {
    it("has a size", function() {
      var pizza1 = new Pizza("large");
      expect(pizza1.size).to.equal("large");
    });
  });
  describe("price", function() {
    it("has a base price (for a given size)", function() {
      var pizza1 = new Pizza("large");
      expect(pizza1.price).to.equal(15.00);
    });
    it("increases in price as toppings are added", function() {
      var pizza1 = new Pizza("large");
      pizza1.addTopping("mushroom");
      pizza1.addTopping("ham");
      expect(pizza1.price).to.equal(16.00);
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
