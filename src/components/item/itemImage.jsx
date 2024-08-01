function ItemImage({ imgDimensions, altText }) {
  return (
    <>
      <img
        src={imgDimensions.mobile}
        alt={altText}
        className="item__img"
        loading="lazy"
      />
    </>
  );
}

export default ItemImage;
