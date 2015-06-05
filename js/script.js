// pizza object
var Pizza = function(size) {
  "use strict";
  this.toppings = [];
  this.size = size;
  switch(size) {
    case "large":
      this.price = 15.00;
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
    console.log( "jQuery Ready" );

    $("#jqtest").text("jQuery Ready");
});
