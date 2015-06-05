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


//jQuery
$( document ).ready(function() {
  "use strict";
});
