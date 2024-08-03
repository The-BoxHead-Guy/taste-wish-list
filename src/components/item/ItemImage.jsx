function ItemImage({ imgDimensions, altText, onOutline }) {
  return (
    <>
      <img
        src={imgDimensions.mobile}
        alt={altText}
        className={onOutline}
        loading="lazy"
      />
    </>
  );
}

export default ItemImage;
