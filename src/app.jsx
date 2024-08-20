import Options from "./components/options.jsx";
import Cart from "./components/cart.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";
import OrderConfirmation from "./components/orderConfirmation.jsx";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Options />
        <Cart />
        <OrderConfirmation />
      </ShoppingCartProvider>
    </>
  );
};

export default App;
