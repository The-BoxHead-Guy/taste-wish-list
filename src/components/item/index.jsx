import { useState } from "react";
import Button from "./Button.jsx";
import ItemBody from "./ItemBody.jsx";
import ItemImage from "./ItemImage.jsx";

export function Item({ props, index }) {
  const [activeImgOutline, setActiveImgOutline] = useState(null);

  const verifyButtonState = (buttonState) => {
    buttonState
      ? setActiveImgOutline(() => true)
      : setActiveImgOutline(() => false);
  };

  return (
    <>
      <div className="item" key={index}>
        <picture className="item__img-container">
          <ItemImage
            imgDimensions={props.image}
            altText={props.name}
            onOutline={activeImgOutline}
          />
          <Button isButtonActive={verifyButtonState} />
        </picture>
        <div className="item__info">
          <ItemBody
            category={props.category}
            name={props.name}
            price={props.price}
          />
        </div>
      </div>
    </>
  );
}

export default Item;
