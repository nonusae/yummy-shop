import React, { useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { GlobalStyle } from './styles/GlobalStyle';
import { Order } from './Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';

function App() {
  const openFood = useOpenFood();
  const orders = useOrders();
  useTitle({...openFood, ...orders});

  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <NavBar />
      <Order {...orders} {...openFood} />
      <Banner />
      <Menu {...openFood} />
    </>
  );
}

export default App;
