import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./cart/CartItem";
import ConfirmationButton from "./util/Button";

function Cart() {
  const {
    cartItems,
    cartQuantity,
    removeFromCart,
    cartTotalPrice,
    handleConfirmationClick,
  } = useShoppingCartContext();

  const EmptyCartDisplay = () => {
    return (
      <>
        <img src="../../public/icons/illustration-empty-cart.svg" alt="" />
        <p className="cart__text">Your added items will appear here</p>
      </>
    );
  };

  const CartDisplay = () => {
    return (
      <>
        <div className="cart__item-list">
          {cartItems.map((item) => {
            return (
              <>
                <CartItem itemInfo={item} removeFromCart={removeFromCart} />
              </>
            );
          })}
        </div>
        <div className="cart__total">
          <p>Order Total</p>
          <span className="cart__cost">{formatCurrency(cartTotalPrice)}</span>
        </div>
        <div className="cart__cm-msg-container">
          <img src="../../public/icons/icon-carbon-neutral.svg" alt="" />
          <p>
            This is a <strong>carbon neutral</strong> delivery
          </p>
        </div>
        <div className="cart__btn-container">
          <ConfirmationButton
            onButtonClick={handleConfirmationClick}
            className={"cart__button"}
          >
            Confirm Order
          </ConfirmationButton>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cart">
        <div className="cart__title-container">
          <h2 className="cart__title">Your Cart ({cartQuantity})</h2>
        </div>
        <div className="cart__preview">
          {cartItems.length === 0 ? <EmptyCartDisplay /> : <CartDisplay />}
        </div>
      </div>
    </>
  );
}

export default Cart;
