import Button from "./button.jsx";
import ItemBody from "./itemBody.jsx";
import ItemImage from "./itemImage.jsx";

function Item({ items }) {
  return (
    <>
      {items.map((item, index) => {
        return (
          <div className="item" key={index}>
            <div className="item__image-container">
              <ItemImage imgDimensions={item.image} altText={item.name} />
              <Button />
            </div>
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
