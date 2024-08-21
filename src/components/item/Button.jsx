import cartIcon from "../../../public/icons/icon-add-to-cart.svg";
import decrementIcon from "../../../public/icons/icon-decrement-quantity.svg";
import incrementIcon from "../../../public/icons/icon-increment-quantity.svg";

import { useShoppingCartContext } from "../../context/ShoppingCartContext";

import { useEffect } from "react";

function Button({ isButtonActive, id, onIncrease, onDecrease }) {
  const { getItemQuantity, removeFromCart, cartItems } =
    useShoppingCartContext();

  /* Resetting the img outline order is confirmed*/
  useEffect(() => {
    if (cartItems.length === 0) {
      document
        .querySelectorAll(".item__img--active")
        .forEach((item) => isButtonActive(false));
    }
  }, [cartItems]);

  const quantity = getItemQuantity(id);
  /* Setting the class dynamically */
  let buttonClass;

  !quantity
    ? (buttonClass = "item__button")
    : (buttonClass = "item__button item__button--active");

  if (quantity === 0) {
    return (
      <button
        className={buttonClass}
        onClick={() => {
          onIncrease(id);
          isButtonActive(true);
        }}
      >
        <img src={cartIcon} alt="" />
        <span className="item__button-text">Add to cart</span>
      </button>
    );
  }

  return (
    <button className={buttonClass}>
      <img
        src={decrementIcon}
        alt=""
        onClick={() => {
          onDecrease(id);
          if (quantity === 1) {
            isButtonActive(false);
            removeFromCart(id);
          }
        }}
      />
      <span className="item__button-text">{quantity}</span>
      <img src={incrementIcon} alt="" onClick={() => onIncrease(id)} />
    </button>
  );
}

export default Button;
