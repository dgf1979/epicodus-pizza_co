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

Order.prototype.totalFormatted = function() {
  "use strict";
  return "$" + this.total().toFixed(2);
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

Pizza.prototype.priceFormatted = function() {
  "use strict";
  return "$" + this.price.toFixed(2);
};

Pizza.prototype.addTopping = function(toppingName) {
  "use strict";
  this.toppings.push(toppingName);
  this.price += 0.50;
};

Pizza.prototype.removeTopping = function(toppingName) {
  "use strict";
  var found = this.toppings.indexOf(toppingName);
  if (found >= 0) {
    this.toppings.splice(found, 1);
    this.price -= 0.50;
  }
};

//update the toppings panel
var updateToppingPanel = function(pizza) {
  "use strict";
  $("div#price-with-toppings").text("Price: " + pizza.priceFormatted());
};

//update orders panel
var updateCheckoutPanel = function(order) {
  "use strict";
  var orderTable = $("table#order-items");
  orderTable.empty();
  order.items.forEach(function (pizza) {
    var rowHTML = "<tr>" +
    "<td>" +
      "<div class='left-text'>" + pizza.size.toUpperCase() + " " + pizza.toppings.length + "-item</div>" +
      "<div class='order-toppings left-text'>" + pizza.toppings.join(", ") + "</div>" +
    "</td>" +
    "<td>" + pizza.priceFormatted() + "</td>" +
    "</tr>";
    orderTable.append(rowHTML);
  });
  orderTable.append("<tr></tr>");
  orderTable.append("<tr class='grand-total'><td>TOTAL:</td><td>" + order.totalFormatted() + "</td></tr>");
};

//jQuery
$( document ).ready(function() {
  "use strict";

  var ORDER = new Order();

  // add a pizza
  $("span#add-to-order").click(function() {
    var pizza = new Pizza($("select#select-size").val());
    ORDER.items.push(pizza);
    // clear any checked checkboxes in the toppings panel
    $("table#toppings input:checkbox").prop("checked", false);
    // close the new pizza panel, open the toppings panel
    $("div#topping-panel").show();
    $("div#size-panel").hide();
    updateToppingPanel(pizza);
  });

  // update pizza cost when toppings are added
  $("table#toppings input:checkbox").change(function () {
    var pizza = ORDER.items[ORDER.items.length - 1];
    if ($(this).is(":checked")) {
      pizza.addTopping($(this).val());
    } else {
      pizza.removeTopping($(this).val());
    }
    updateToppingPanel(pizza);
  });

  // add customized pizza to order pane
  $("span#submit-to-order").click(function() {
    //close the toppings panel, open the checkout panel
    updateCheckoutPanel(ORDER);
    $("div#checkout-panel").show();
    $("div#topping-panel").hide();
  });
});
