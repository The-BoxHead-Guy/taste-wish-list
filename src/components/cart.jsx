import { useShoppingCartContext } from "../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  console.log(cartItems);

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
                <div className="cart__item" key={item.id}>
                  <div className="cart__item-info">
                    <h3 className="cart__item-name">test name</h3>
                    <span className="item__amount">2x</span>
                    <span className="item__unit-price">$5.00</span>
                    <span className="item__total-price">$10.00</span>
                  </div>
                  <div className="cart__button-container">
                    <img src="../../public/icons/icon-remove-item.svg" alt="" />
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
        <div className="cart__total">
          <p>Order Total</p>
          <span className="cart__cost">$20.00</span>
        </div>
        <div className="cart__cm-msg-container">
          <img src="../../public/icons/icon-carbon-neutral.svg" alt="" />
          <p>
            This is a <strong>carbon neutral</strong> delivery
          </p>
        </div>
        <div className="cart__btn-container">
          <button className="cart__button">Confirm Order</button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cart">
        <div className="cart__title-container">
          <h2 className="cart__title">Your Cart (0)</h2>
        </div>
        <div className="cart__preview">
          {cartItems.length === 0 ? <EmptyCartDisplay /> : <CartDisplay />}
        </div>
      </div>
    </>
  );
}

export default Cart;
