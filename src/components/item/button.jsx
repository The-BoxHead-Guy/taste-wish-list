import cartIcon from "../../../public/icons/icon-add-to-cart.svg";

function Button() {
  return (
    <button className="item__button">
      <img src={cartIcon} alt="" />
      <span className="item__button-text">Add to cart</span>
    </button>
  );
}

export default Button;
