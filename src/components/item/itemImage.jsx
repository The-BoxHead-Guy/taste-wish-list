function ItemImage({ imgDimensions, altText }) {
  return (
    <>
      <img src={imgDimensions.mobile} alt={altText} />
    </>
  );
}

export default ItemImage;
