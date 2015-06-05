// order object
var Order = function() {
  "use strict";
  this.items = [];
};

Order.prototype.total = function() {
  "use strict";
  var total = 0;
  this.items.forEach(function (item) {
    total += item.price;
  });
  return total;
};

// pizza object
var Pizza = function(size) {
  "use strict";
  this.toppings = [];
  this.size = size;
  switch(size) {
    case "large":
      this.price = 15.00;
      break;
    case "medium":
      this.price = 12.00;
      break;
    case "small":
      this.price = 10.00;
      break;
  }
};

Pizza.prototype.addTopping = function(toppingName) {
  "use strict";
  this.toppings.push(toppingName);
  this.price += 0.50;
};

//update the toppings panel
var updateToppingPanel = function(pizza) {
  "use strict";
  $("div#price-with-toppings").text("Price: $" + pizza.price);
};

//jQuery
$( document ).ready(function() {
  "use strict";

  var ORDER = new Order();
  $("div#topping-panel").hide();
  $("div#checkout-panel").hide();

  // add a pizza
  $("span#add-to-order").click(function() {
    var pizza = new Pizza($("select#select-size").val());
    ORDER.items.push(pizza);
    //close the new pizza panel, open the toppings panel
    $("div#topping-panel").show();
    $("div#size-panel").hide();
    updateToppingPanel(pizza);
  });

  // update pizza cost when toppings are added
  $("input").checked(function () {
    // todo
  });

  // add customized pizza
  $("span#submit-to-order").click(function() {
    // todo
  });
});
