import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const mealApi = {
  async getMealsByCategory(category) {
    try {
      const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
      return response.data.meals;
    } catch (error) {
      console.error("Error in fetching meals", error);
      throw error;
    }
  },
};
