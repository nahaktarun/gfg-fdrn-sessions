import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMealByCategory,
  fetchMealDetails,
} from "./redux/actions/mealsAction.js";

const MealList = () => {
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    // Fetch meals by a default category
    dispatch(fetchMealByCategory("Vegetarian"));
  }, [dispatch]);

  const handleSelect = (mealId) => {
    console.log(mealId);
    dispatch(fetchMealDetails(mealId));
  };
  if (loading) return <div className="text-center text-xl">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {meals.map((meal) => (
        <div key={meal.idMeal} onClick={() => handleSelect(meal.idMeal)}>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="mt-2 text-lg font-semibold">{meal.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default MealList;
