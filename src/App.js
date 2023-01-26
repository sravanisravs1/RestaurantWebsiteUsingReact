import React, { Fragment } from "react";
import MainHeader from "./Layout/MainHeader";
import Meals from "./Components/Meals/Meals/Meals";


function App() {
  return (
    <Fragment>
      <MainHeader/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
