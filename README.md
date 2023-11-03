Pizza Parlor

Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost.

    Allow the user to choose toppings and size for the pizza they'd like to order.
    Create a pizza object constructor with properties for toppings and size.
    Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

TDD

Describe Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["mushrooms", "eggplant"], "personal");
Expected Output: Pizza { toppings: ["mushrooms", "eggplant"], size: "personal" }

Describe getToppingCost()

Test: "It should return cost of toppings based on price $2 per topping with length of toppings array as input number"
Code: getToppingCost(3)
Expected Output: 6

Describe Pizza.prototype.getSizeCost()

Test: "It should calculate chosen pizza by size"
Code: myPizza.getSizeCost();
Expected Output: 15 (for personal size pizza)

Describe Pizza.prototype.getToppingsCost()

Test: "It should calculate chosen pizza by topping count"
Code: myPizza.getToppingCost(); 
Expected Output: 6 (for 3 toppings)

Describe Pizza.prototpe.getTotalCost()

Test: "It should return total price of pizza with toppings and size"
Code: myPizza.getTotalCost()
Expected Output: 21

---------
for safekeeping in case the totalCost fails
// Pizza.prototype.getToppingCost = function () {
//   let toppingCost;
//   const numToppings = this.toppings.length; 
//   toppingCost = numToppings * 2;
//   console.log(toppingCost);
//   return toppingCost;
// }


<!-- Describe PizzaRequest(Pizza, totalPrice) constructor function

Test: "It should build a blueprint for pizza order and price"
Code: PizzaRequest(myPizza, totalPrice)
Expected Output: {myPizza, 19}

Test: "It should hold pizza order by name, price, toppings and size"
Code: PizzaRequest(myPizza, size, toppings, totalPrice)
Expected Output: {myPizza, "personal", ["mushrooms", "eggplant"], 19}

Describe PizzaParlor() constructor function

Test: "It should hold set pizza orders"
Code: PizzaParlor(mushroomLover, totalPrice) -->