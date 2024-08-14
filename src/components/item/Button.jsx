import cartIcon from "../../../public/icons/icon-add-to-cart.svg";
import decrementIcon from "../../../public/icons/icon-decrement-quantity.svg";
import incrementIcon from "../../../public/icons/icon-increment-quantity.svg";

import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Button({ isButtonActive, id, onIncrease, onDecrease }) {
  const { getItemQuantity, removeFromCart } = useShoppingCartContext();

  const quantity = getItemQuantity(id);
  // console.log(quantity);

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
