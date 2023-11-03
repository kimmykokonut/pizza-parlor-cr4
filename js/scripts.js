function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.getTotalCost = function () {
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

// const myPizza = new Pizza(["mushrooms", "eggplant", "anchovies"], "personal");

// myPizza.getSizeCost(); //15
// myPizza.getToppingCost(); //6
// myPizza.getTotalCost(); //21
//ui- build html, event listener on submit, user input handle funct, etc.
function handleFormSubmission(e) {
  e.preventDefault();
  const nameInput = document.querySelector("input#nameInput").value;
  const userSizeSelections = document.querySelectorAll("input[name=size]:checked");
  const userToppingSelections = document.querySelectorAll("input[name=toppings]:checked");
  const userSizeSelectArray = Array.from(userSizeSelections);
  const userToppingsSelectArray = Array.from(userToppingSelections);
  const receiptDiv = document.querySelector("div#receipt");

  userToppingsSelectArray.forEach(function(element) {
    const paragraph = document.createElement("p");
    paragraph.append(element.value);
    receiptDiv.append(paragraph);
  });
}

window.addEventListener("load", function(){
  this.document.querySelector("form#survey").addEventListener("submit", handleFormSubmission);
});