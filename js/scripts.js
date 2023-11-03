function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// let numberToppings = myPizza.toppings.length;

// Pizza.prototype.getToppingCost = function () {
//   const numToppings = Pizza.this.toppings.length 
//   const toppingCost = numToppings * 2;
//   console.log(toppingCost);
//   return toppingCost; //6
// }

Pizza.prototype.calcCost = function() {
  // let topTotal = Pizza.prototype.getToppingCost(); //return 6
  let sizePrice;
  if (this.size === "personal") {
    sizePrice = sizePriceObject.personal;
  } else if (this.size === "medium") {
    sizePrice = sizePriceObject.medium;
  } else {
    sizePrice = sizePriceObject.large;
  }
return parseInt(sizePrice);
};

const sizePriceObject = {
  personal: 15,
  medium: 20,
  large: 25,
};

const myPizza = new Pizza(["mushrooms", "eggplant", "anchovies"], "personal");

// add 2, return total price
myPizza.calcCost();