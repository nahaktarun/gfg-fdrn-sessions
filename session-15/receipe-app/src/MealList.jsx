import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealByCategory } from "./redux/actions/mealsAction";

const MealList = () => {
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(fetchMealByCategory("Vegetarian"));
  }, [dispatch]);

  if (loading) return <div className="text-center text-xl"> Loading...</div>;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div>
      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <p>{meal.idMeal}</p>
        </div>
      ))}
    </div>
  );
};

export default MealList;
