import Button from "./button.jsx";
import ItemBody from "./itemBody.jsx";
import ItemImage from "./itemImage.jsx";

function Item({ items }) {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="item" key={index}>
            <picture className="item__img-container">
              <ItemImage imgDimensions={item.image} altText={item.name} />
              <Button />
            </picture>
            <div className="item__info">
              <ItemBody
                category={item.category}
                name={item.name}
                price={item.price}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Item;
