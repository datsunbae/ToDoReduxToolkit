import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/FiltersReducerSlice";
import todoSlice from "../components/Todo/TodoReducerSlice";

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoSlice.reducer,
  },
});

export default store;
