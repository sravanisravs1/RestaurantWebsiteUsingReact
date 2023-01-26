import MealSummary from "./MealsSummary";
import MealItems from "./MealItems";
import React, { Fragment } from "react";

const Meals = () => {
    return <Fragment>
        <MealSummary/>
        <MealItems/>
    </Fragment>

};

export default Meals;