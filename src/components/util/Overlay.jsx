import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Overlay() {
  const { toggleConfirmation } = useShoppingCartContext();

  return <>{toggleConfirmation && <div className="overlay--active"></div>}</>;
}

export default Overlay;
