import React from "react";
import "./Meal.scss";
import { Link } from "react-router-dom";

const MealList = ({meals}) => {
    console.log(meals);
    return (
        <div className="section-wrapper" >
            <div className="container">
                <div className="sc-title">meals</div>
                <section className="sc-meal grid">

                </section>
            </div>
        </div>
    )
};

export default MealList;