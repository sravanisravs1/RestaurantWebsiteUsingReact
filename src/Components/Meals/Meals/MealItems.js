import React from "react";
import classes from './MealItems.module.css';
import Card from "../../UI/Card/Card/Card";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const MealItems = () => {
    return (
    <Card>
        <section className={classes.meals}>
        <ul className={classes.mealsul}>
            {DUMMY_MEALS.map(meals => <div>
                <h2>{meals.name} </h2>
                <p>{meals.description}</p>
                <p> Rs {meals.price}</p>
                
            </div>
                

            )}
        </ul>
    </section>
    </Card>);

};

export default MealItems;