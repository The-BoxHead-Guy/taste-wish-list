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
          <img
            src="../../public/icons/icon-remove-item.svg"
            alt=""
            onClick={() => removeFromCart(itemInfo.id)}
          />
        </div>
      </div>
      <hr />
    </>
  );
}

export default CartItem;
