import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Tan gai", priority: "High", completed: false },
    { id: 2, name: "Learn Redux", priority: "Medium", completed: true },
    { id: 3, name: "Learn Docker", priority: "Low", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    }
  }
});
