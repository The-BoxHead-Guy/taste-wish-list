function ItemBody({ category, name, price }) {
  return (
    <>
      <h2 className="item__category">{category}</h2>
      <h3 className="item__name">{name}</h3>
      <p className="item__price">${price}</p>
    </>
  );
}

export default ItemBody;
