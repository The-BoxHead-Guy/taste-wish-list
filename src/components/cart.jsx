function Cart() {
  return (
    <>
      <div className="cart">
        <div className="cart__title-container">
          <h2 className="cart__title">Your Cart (0)</h2>
        </div>
        <div className="cart__list">
          <img src="../../public/icons/illustration-empty-cart.svg" alt="" />
          <p className="cart__text">Your added items will appear here</p>
        </div>
      </div>
    </>
  );
}

export default Cart;
