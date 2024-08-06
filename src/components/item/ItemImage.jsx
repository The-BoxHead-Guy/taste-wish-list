function ItemImage({ imgDimensions, altText, onOutline }) {
  return (
    <>
      <img
        src={imgDimensions.mobile}
        alt={altText}
        className={`item__img ${onOutline ? "item__img--active" : null}`}
        loading="lazy"
      />
    </>
  );
}

export default ItemImage;
