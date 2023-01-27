import React, { Fragment } from "react";
import MainHeader from "./Layout/MainHeader";
import Meals from "./Components/Meals/Meals/Meals";
import Cart from "./Components/Cart/Cart";


function App() {
  return (
    <Fragment>
      <Cart/>
      <MainHeader/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
