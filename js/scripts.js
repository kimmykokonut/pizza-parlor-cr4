function Pizza(toppings, size){
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

Pizza.prototype.calcCost = function () {
  // let topTotal = Pizza.prototype.getToppingCost(); //return 6
  let sizePrice;
  if (this.size in sizePriceObject) {
    sizePrice = sizePriceObject[this.size]
  } else {
    console.log("error");
  }
  return sizePrice; 
};

const sizePriceObject = {
  personal: 15,
  medium: 20,
  large: 25,
};

const myPizza = new Pizza(["mushrooms", "eggplant", "anchovies"], "personal");

//get topping price
// add 2, return total price
Pizza.prototype.calcCost(myPizza);
