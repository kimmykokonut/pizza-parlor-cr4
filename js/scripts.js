function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getToppingCost = function () {
  let toppingCost;
  const numToppings = this.toppings.length; 
  toppingCost = numToppings * 2;
  console.log(toppingCost);
  return toppingCost; //6
}

Pizza.prototype.getSizeCost = function() {
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
myPizza.getSizeCost(); //15
myPizza.getToppingCost(); //6