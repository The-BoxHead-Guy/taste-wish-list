import { formatCurrency } from "../../utilities/formatCurrency";

function CartItem({ itemInfo, removeFromCart }) {
  return (
    <>
      <div className="cart__item" key={itemInfo.id}>
        <div className="cart__item-info">
          <h3 className="cart__item-name">{itemInfo.name}</h3>
          <span className="item__amount">{itemInfo.quantity}x</span>
          <span className="item__unit-price">
            {formatCurrency(itemInfo.price)}
          </span>
          <span className="item__total-price">
            {formatCurrency(itemInfo.price * itemInfo.quantity)}
          </span>
        </div>
        <div className="cart__button-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="#CAAFA7"
            viewBox="0 0 10 10"
            onClick={() => removeFromCart(itemInfo.id)}
          >
            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
          </svg>
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
