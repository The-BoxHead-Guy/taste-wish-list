function ItemBody({ category, name, price }) {
  return (
    <>
      <p className="item__category">{category}</p>
      <h2 className="item__name">{name}</h2>
      <p className="item__price">${price}</p>
    </>
  );
}

export default ItemBody;
