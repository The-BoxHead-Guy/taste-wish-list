import { useEffect } from "react";
import { createContext, useState, useContext } from "react";

const ShoppingCartContext = createContext({});

export function useShoppingCartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  /* We create the state of the cartItems in the context */
  const [cartItems, setCartItems] = useState([]);
  const [toggleConfirmation, setToggleConfirmation] = useState(false);

  const handleConfirmationClick = () => {
    setToggleConfirmation(!toggleConfirmation);
  };

  const resetOrder = () => {
    setCartItems([]);
  };

  const cartTotalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const cartQuantity = cartItems.reduce(
    (quantity, currentItem) => quantity + currentItem.quantity,
    0
  );

  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id, name, price, category, thumbnail) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) === undefined) {
        return [
          ...currItems,
          { id, quantity: 1, name, price, category, thumbnail },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.uantiqty === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        cartTotalPrice,
        handleConfirmationClick,
        toggleConfirmation,
        resetOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
