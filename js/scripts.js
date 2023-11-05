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
  return (sizePrice + toppingCost);
}

const sizePriceObject = {
  personal: 15,
  medium: 20,
  large: 25,
};

function handleFormSubmission(e) {
  e.preventDefault();
  const nameInput = document.querySelector("input#nameInput").value;
  const userSizeRadioSelection = document.querySelector("input[name='size']:checked").value;
  const userToppingSelections = document.querySelectorAll("input[name=toppings]:checked");
  const receiptDiv = document.querySelector("div#receipt");
  const h3Name = document.createElement("h3");
  h3Name.append("Name: " + nameInput);
  const pSize = document.createElement("p");
  pSize.append("Size: " + userSizeRadioSelection);
  const ulTopping = document.createElement("ul");
  const userToppingsSelectArray = Array.from(userToppingSelections);
  userToppingsSelectArray.forEach(function (element) {
    const liTopping = document.createElement("li");
    liTopping.append(element.value);
    ulTopping.append(liTopping);
  });
  const pizzaOrder = new Pizza(userToppingsSelectArray, userSizeRadioSelection);
  const h4NewOrderCost = document.createElement("h4");
  const newOrderCost = pizzaOrder.getTotalCost();
  h4NewOrderCost.append("Grand Total: " + "$" + newOrderCost);
  receiptDiv.append(h3Name, pSize, ulTopping, h4NewOrderCost);
  receiptDiv.removeAttribute("class");
}

window.addEventListener("load", function () {
  this.document.querySelector("form#orderForm").addEventListener("submit", handleFormSubmission);
});