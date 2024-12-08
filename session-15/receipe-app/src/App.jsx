import { Provider } from "react-redux";
import store from "./redux/store";
import MealList from "./MealList";
function App() {
  return (
    <Provider store={store}>
      <MealList />
    </Provider>
  );
}

export default App;

// 1. react devtool
// 2. redux devtool.
