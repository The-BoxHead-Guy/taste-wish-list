function ItemImage({ imgDimensions, altText, onOutline }) {
  return (
    <>
      <source media="(min-width: 1080px)" srcSet={imgDimensions.desktop} />
      <source media="(min-width: 768px)" srcSet={imgDimensions.tablet} />
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
