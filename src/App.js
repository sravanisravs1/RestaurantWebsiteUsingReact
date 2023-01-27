import React, { useState  } from "react";
import MainHeader from "./Components/Layout/MainHeader";
import Meals from "./Components/Meals/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";




function App() {
  const [showCartItems , setShowCartItems] = useState(false);
  const showCartItemsHandler = ()=>{
    setShowCartItems(true)
  };
  
  const hideCartItemsHandler = () => {
    setShowCartItems(false);
  };
  return (
    <CartProvider>
      {showCartItems && <Cart onCartClose={hideCartItemsHandler}/>}
      <MainHeader onCartClick={showCartItemsHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
