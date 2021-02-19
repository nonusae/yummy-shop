export function formatPrice(price){
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

const foodItems = [
  {
    name: 'Cheese Pizza',
    img: '/img/pizza.png',
    section: 'Pizza',
    price: 1
  },
  {
    name: 'Pepperoni Pizza',
    img: '/img/pizza2.jpeg',
    section: 'Pizza',
    price: 1.5
  },
  {
    name: 'Chicken Pizza',
    img: '/img/chicken-pizza.jpeg',
    section: 'Pizza',
    price: 2
  },
  {
    name: 'Veggie Pizza',
    img: '/img/healthy-pizza.jpeg',
    section: 'Pizza',
    price: 2
  },
  {
    name: 'Burger',
    img: '/img/burger.jpeg',
    section: 'Sandwich',
    price: 3
  },
  {
    name: 'Shirmp PoBoy',
    img: '/img/sandwich.jpeg',
    section: 'Sandwich',
    price: 6
  },
  {
    name: 'Fries',
    img: '/img/fries.jpeg',
    section: 'Fries',
    price: 1
  },
]

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]) {
    res[food.section] = [];
  }

  res[food.section].push(food);
  return res;
}, {});
