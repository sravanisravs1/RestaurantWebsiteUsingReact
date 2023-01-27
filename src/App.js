import React, { useState , Fragment } from "react";
import MainHeader from "./Layout/MainHeader";
import Meals from "./Components/Meals/Meals/Meals";
import Cart from "./Components/Cart/Cart";




function App() {
  const [showCartItems , setShowCartItems] = useState(false);
  const showCartItemsHandler = ()=>{
    setShowCartItems(true)
  };
  
  const hideCartItemsHandler = () => {
    setShowCartItems(false);
  };
  return (
    <Fragment>
      {showCartItems && <Cart onCartClose={hideCartItemsHandler}/>}
      <MainHeader onCartClick={showCartItemsHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
