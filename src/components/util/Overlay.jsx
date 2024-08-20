import { useEffect } from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Overlay() {
  const { toggleConfirmation } = useShoppingCartContext();

  useEffect(() => {
    const ORIGINAL_OVERFLOW = document.body.style.overflow;

    if (toggleConfirmation) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = ORIGINAL_OVERFLOW;
    };
  }, [toggleConfirmation]);

  return <>{toggleConfirmation && <div className="overlay--active"></div>}</>;
}

export default Overlay;
