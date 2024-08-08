import Options from "./components/options.jsx";
import Cart from "./components/cart.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Options />
        <Cart />
      </ShoppingCartProvider>
    </>
  );
};

export default App;
