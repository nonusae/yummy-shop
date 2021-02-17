import React, { useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu'
import { FoodDialog } from './FoodDialog/FoodDialog'
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
      <NavBar />
      <Banner />
      <Menu setOpenFood={setOpenFood} />
    </>
  );
}

export default App;
