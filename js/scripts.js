function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// Pizza.prototype.getToppingCost = function () {
//   let toppingCost;
//   const numToppings = this.toppings.length; 
//   toppingCost = numToppings * 2;
//   console.log(toppingCost);
//   return toppingCost;
// }

Pizza.prototype.getTotalCost = function() {
  let sizePrice;
  if (this.size === "personal") {
    sizePrice = parseInt(sizePriceObject.personal);
  } else if (this.size === "medium") {
    sizePrice = parseInt(sizePriceObject.medium);
  } else {
    sizePrice = parseInt(sizePriceObject.large);
  }
  let toppingCost;
  const numToppings = this.toppings.length;
  toppingCost = numToppings * 2;
  console.log(toppingCost);
  console.log(sizePrice);
  console.log(sizePrice + toppingCost);
  return (sizePrice + toppingCost);
}

const sizePriceObject = {
  personal: 15,
  medium: 20,
  large: 25,
};

const myPizza = new Pizza(["mushrooms", "eggplant", "anchovies"], "personal");

// myPizza.getSizeCost(); //15
// myPizza.getToppingCost(); //6
myPizza.getTotalCost(); //21