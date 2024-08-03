import ItemList from "./item/ItemList.jsx";

// Importing the data from the project's assets
import desserts from "../assets/data.json";

function Options() {
  return (
    <>
      <div className="products">
        <div className="products__title">
          <h1>Desserts</h1>
        </div>
        <div className="products__list">
          <ItemList itemList={desserts} />
        </div>
      </div>
    </>
  );
}

export default Options;
