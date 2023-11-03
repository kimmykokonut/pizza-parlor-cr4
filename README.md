# Pizza Parlor

#### By _Kim Robinson_

#### _Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc.), a size to order a pizza, and see the final cost._

## Technologies Used

* JavaScript
* CSS
* Html

## Description

    Allow the user to choose toppings and size for the pizza they'd like to order.
    Create a pizza object constructor with properties for toppings and size.
    Create a prototype method for the cost of a pizza depending on the selections chosen. 

## Setup/Installation Requirements

1. Make sure you are on the correct repository. You can find the link here: https://github.com/kimmykokonut/pizza-parlor-cr4
2. On the top-right corner of the page, click Fork (dropdown) > Create a new fork
3. Under "Owner," select the dropdown menu and make sure you are the owner for the forked repository.
4. You may optionally give the fork a new name in the "Repository name" field.
5. Copy the Default branch
6. Click Create fork

Clone the repository

1. Navigate to your fork on github.com
2. Above the list of files, click <>Code
3. Copy the URL for the repository (I use the HTTPS link)
4. In your terminal, navigate to the working directory you desire
5. Type: git clone (then paste the HTTPS link)
6. Press Enter (now you have a local clone!)

View my code and see it rendered

1. In Terminal, navigate to the working directory containing the clone
2. Type code . to open code in VS Code (or open directory in text editor of your choosing)

If you do not have VS Code, you may download it here: https://code.visualstudio.com/download

3. To see it rendered in a browser, right click on the index.html file in VS Code and choose "Open with Live Server"

If you do not have Live Server extension installed in VS Code, directions are here: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
_Optionally if you do not want to see my code or fork or clone, you may just enjoy the finished result on my github pages. https://kimmykokonut.github.io/pizza-parlor-cr4

## Known Bugs

* None known

## License

MIT License. See license.md for more detail.

Copyright (c) 3 November 2023 Kim Robinson

-----------------
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