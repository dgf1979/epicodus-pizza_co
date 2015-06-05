//raw js
var Pizza = function(size) {
  "use strict";
  this.toppings = [];
  this.size = size;
};

Pizza.prototype.addTopping = function(toppingName) {
  "use strict";
  this.toppings.push(toppingName);
};


//jQuery
$( document ).ready(function() {
  "use strict";
    console.log( "jQuery Ready" );

    $("#jqtest").text("jQuery Ready");
});
