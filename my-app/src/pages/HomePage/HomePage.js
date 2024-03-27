import React from 'react';
import "./HomePage.scss";
import { useMealContext } from '../../context/mealContext';
import Loader from '../../components/Loader/Loader';
import MealList from '../../components/Meal/MealList';
import CategoryList from '../../components/Category/CategoryList';

const HomePage = () => {

  const {categories, meals, categoryLoading, mealsLoading} = useMealContext();

  return (
    <main className='main-content'>
      <MealList/>
      <CategoryList categories={categories}/>
    </main>
  )
}

export default HomePage; 