import React, { Fragment } from "react";
import MainHeader from "./Components/Layout/MainHeader/MainHeader";
import MealSummary from './Components/Meals/Meals/MealsSummary'


function App() {
  return (
    <Fragment>
      <MainHeader/>
      <MealSummary/>
    </Fragment>
  );
}

export default App;
