import { useEffect } from "react";
import checkmark from "../../public/icons/icon-order-confirmed.svg";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import ConfirmationButton from "./util/Button";

function OrderConfirmation() {
  const {
    cartItems,
    cartTotalPrice,
    toggleConfirmation,
    handleConfirmationClick,
    resetOrder,
  } = useShoppingCartContext();

  return (
    <>
      {toggleConfirmation && (
        <div className="order-confirmation__container">
          <img src={checkmark} alt="" />
          <OrderMessage>We hope you enjoy your food</OrderMessage>
          <OrderPreviewList data={cartItems} cartTotalPrice={cartTotalPrice} />
          <ConfirmationButton
            onButtonClick={() => {
              handleConfirmationClick();
              resetOrder();
            }}
            className={"cart__button preview__button"}
          >
            Start New Order
          </ConfirmationButton>
        </div>
      )}
    </>
  );
}

function OrderPreviewList({ data, cartTotalPrice }) {
  return (
    <>
      <div className="order-confirmation__preview">
        {data.map((previewItem, index) => {
          return (
            <>
              <OrderPreview key={index} itemInfo={previewItem} />
              <hr />
            </>
          );
        })}
        <OrderTotal cartTotalPrice={cartTotalPrice} />
      </div>
    </>
  );
}

function OrderPreview({ itemInfo }) {
  return (
    <>
      <div className="order-confirmation__item">
        <div className="preview">
          <div className="preview__img-container">
            <img
              src={itemInfo.thumbnail}
              alt=""
              className="preview__thumbnail"
            />
          </div>
          <div className="preview__info">
            <p>{itemInfo.name}</p>
            <div className="preview__calculations">
              <p className="preview__quantity">{itemInfo.quantity}</p>
              <p className="preview__unit-price">
                {formatCurrency(itemInfo.price)}
              </p>
            </div>
          </div>
          <div className="preview__total">
            <p>{formatCurrency(itemInfo.price * itemInfo.quantity)}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function OrderTotal({ cartTotalPrice }) {
  return (
    <>
      <div className="order-confirmation__total">
        <p>Order Total</p>
        <p>{formatCurrency(cartTotalPrice)}</p>
      </div>
    </>
  );
}

function OrderMessage({ children }) {
  return (
    <>
      <div className="order-confirmation__message">
        <h2 className="order-confirmation__title">Order Confirmed</h2>
        <p>{children}</p>
      </div>
    </>
  );
}

export default OrderConfirmation;
