import Item from "./index.jsx";

function ItemList({ itemList }) {
  return (
    <>
      {itemList.map((item, index) => {
        return <Item props={item} key={index} />;
      })}
    </>
  );
}

export default ItemList;
