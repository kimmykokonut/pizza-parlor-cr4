function Pizza(toppings, size){
  this.toppings = toppings;
  this.size = size;
}

const myPizza = new Pizza(["mushrooms", "eggplant", "anchovies"], "personal");

let numberToppings = myPizza.toppings.length;

function getToppingCost(numberToppings) {
  let toppingCost = numberToppings * 2;
  console.log(toppingCost);
  return toppingCost;
}


// function toppingCount(myPizza) {

//   const toppingKeys = Object.keys()
//   let numberToppings = myPizza.toppings.length();
//   console.log(numberToppings);
//   return numberToppings;
// }