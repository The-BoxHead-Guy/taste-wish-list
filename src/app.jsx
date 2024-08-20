import Options from "./components/options.jsx";
import Cart from "./components/cart.jsx";
import {
  ShoppingCartProvider,
  useShoppingCartContext,
} from "./context/ShoppingCartContext.jsx";
import OrderConfirmation from "./components/orderConfirmation.jsx";
import Overlay from "./components/util/Overlay.jsx";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Overlay />
        <Options />
        <Cart />
        <OrderConfirmation />
      </ShoppingCartProvider>
    </>
  );
};

export default App;
