describe("order", function() {
  "use strict";

  it("contains a number of items", function() {
    var order = new Order();
    var pizza1 = new Pizza("large");
    var pizza2 = new Pizza("small");
    order.items.push(pizza1);
    order.items.push(pizza2);
    expect(order.items).to.eql([pizza1, pizza2]);
  });

  it("calculates the total price of all items", function() {
    var order = new Order();
    var pizza1 = new Pizza("large");
    var pizza2 = new Pizza("small");
    order.items.push(pizza1);
    order.items.push(pizza2);
    expect(order.total()).to.equal(25.00);
  });

  it("returns the total price in a dollar formatted string", function() {
    var order = new Order();
    var pizza1 = new Pizza("large");
    var pizza2 = new Pizza("small");
    order.items.push(pizza1);
    order.items.push(pizza2);
    expect(order.totalFormatted()).to.equal("$25.00");
  });
});

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

    it("decreases in price as toppings are removed", function() {
      var pizza1 = new Pizza("large");
      pizza1.addTopping("mushroom");
      pizza1.addTopping("ham");
      pizza1.removeTopping("mushroom");
      expect(pizza1.price).to.equal(15.50);
    });
  });

  describe("priceFormatted", function() {
    it("returns a string representaion of the current price in dollar format", function() {
      var pizza1 = new Pizza("large");
      expect(pizza1.priceFormatted()).to.equal("$15.00");
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

    it("can remove toppings", function() {
      var pizza1 = new Pizza("large");
      pizza1.addTopping("mushroom");
      pizza1.addTopping("ham");
      pizza1.removeTopping("mushroom");
      expect(pizza1.toppings).to.eql(["ham"]);
    });
  });
});
