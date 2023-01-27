import MealSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import React, { Fragment } from "react";

const Meals = () => {
    return <Fragment>
        <MealSummary/>
        <AvailableMeals/>
    </Fragment>

};

export default Meals;