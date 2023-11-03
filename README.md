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

Describe toppingCount()

Test: "It should return number of toppings with toppingsArray"
Code: toppingCount(myPizza.toppings)
Expected Output: 2

Describe Pizza.prototype.cost()

Test: "It should calculate chosen pizza by size"
Code: Pizza.prototype.cost(myPizza)
Expected Output: 15 (for personal size pizza)

Test: "It should calculate chosen pizza by size and topping count"
Code: Pizza.prototype.cost(myPizza)
Expected Output: 19 (for personal pizza + 2 toppings)

Test: "It should return new pizza with size/price array as parameter"
Code: Pizza.prototype.cost(sizeArray)
Expected Output: 15

Test: "It should return new pizza with toppings/price array as parameter"
Code: Pizza.prototype.cost(toppingsArray)
Expected Output: 19

Test: "It should return totalPrice with toppings and size array as parameters"
Code: Pizza.prototype.cost(sizeArray, toppingsArray)
Exected Output: 19

Describe PizzaRequest(Pizza, totalPrice) constructor function

Test: "It should build a blueprint for pizza order and price"
Code: PizzaRequest(myPizza, totalPrice)
Expected Output: {myPizza, 19}

Test: "It should hold pizza order by name, price, toppings and size"
Code: PizzaRequest(myPizza, size, toppings, totalPrice)
Expected Output: {myPizza, "personal", ["mushrooms", "eggplant"], 19}

Describe PizzaParlor() constructor function

Test: "It should hold set pizza orders"
Code: PizzaParlor(mushroomLover, totalPrice)