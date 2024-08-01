import { useState } from "react";
import cartIcon from "../../../public/icons/icon-add-to-cart.svg";
import decrementIcon from "../../../public/icons/icon-decrement-quantity.svg";
import incrementIcon from "../../../public/icons/icon-increment-quantity.svg";

function Button() {
  const [amount, setAmount] = useState(0);

  let buttonClass;

  !amount
    ? (buttonClass = "item__button")
    : (buttonClass = "item__button item__button--active");
  function incrementAmount() {
    setAmount(amount + 1);
  }

  function decrementAmount() {
    setAmount(amount - 1);
  }

  if (amount === 0) {
    return (
      <button className={buttonClass} onClick={incrementAmount}>
        <img src={cartIcon} alt="" />
        <span className="item__button-text">Add to cart</span>
      </button>
    );
  }

  return (
    <button className={buttonClass}>
      <img src={decrementIcon} alt="" onClick={decrementAmount} />
      <span className="item__button-text">{amount}</span>
      <img src={incrementIcon} alt="" onClick={incrementAmount} />
    </button>
  );
}

export default Button;
