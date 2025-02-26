import { createContext, useContext, useState } from "react";

// create a empty context
const CartCxt = createContext();

// create a component with the empty context with a state variable to holds the item of the cart
const MyCart = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartCxt.Provider value={[cart, setCart]}>{children}</CartCxt.Provider>
  );
};

export default MyCart;


// export the cart with a function to use in the other components
export const useCart = () => useContext(CartCxt);
