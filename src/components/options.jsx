import Item from "./item/item.jsx";

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
          <Item items={desserts} />
        </div>
      </div>
    </>
  );
}

export default Options;
