import Options from "./components/options.jsx";
import Cart from "./components/cart.jsx";

// app's assets
import desserts from "./assets/data.json";

const App = () => {
  return (
    <>
      <h1>Hey</h1>
      <Options data={desserts} />
      <Cart />
    </>
  );
};

export default App;
