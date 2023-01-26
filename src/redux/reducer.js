import filtersReducer from "../components/Filters/FiltersReducerSlice";
import todoListReducer from "../components/Todo/TodoReducerSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
