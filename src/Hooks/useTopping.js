import { useState } from 'react';

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(defaultTopping || getDefaultTopping)

  function checkTopping(index) {
    const newTopping = [...toppings]
    newTopping[index].checked = !newTopping[index].checked;
    setToppings(newTopping);
  }

  return {
    toppings,
    checkTopping
  }
}

const toppingList = [
  "Extra Cheese",
  "Pepperoni",
  "Sausage",
  "Onions",
  "Peppers",
  "Pineapple",
  "Ham",
  "Spinach",
  "Artichokes",
  "Mushrooms",
  "Anchovies"
]

function getDefaultTopping() {
  return toppingList.map((topping) => ({
    name: topping,
    checked: false
  }));
}
