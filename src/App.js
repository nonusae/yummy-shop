import { NavBar } from './NavBar/NavBar';
import { Banner } from './Banner/Banner';
import { Menu } from './Menu/Menu'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner />
      <Menu />
    </>
  );
}

export default App;
