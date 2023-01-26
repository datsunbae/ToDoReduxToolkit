// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => todo.name.includes(state.filters.search))
//     return todoRemaining;

import { createSelector } from "reselect";

// };
export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const statusTodoSelector = (state) => state.filters.status;
export const prioritiesTodoSelector = (state) => state.filters.priorities;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusTodoSelector,
  prioritiesTodoSelector,
  (todoList, searchText, statusTodo, prioritiesTodo) => {
    console.log(prioritiesTodo)
    if (statusTodo === "All") {
      return todoList.filter((todo) => {
        return prioritiesTodo.length
          ? todo.name.includes(searchText) &&
              prioritiesTodo.includes(todo.priority)
          : todo.name.includes(searchText);
      });
    }
    console.log(statusTodo);
    return todoList.filter((todo) => {
      return (
        todo.name.includes(searchText) &&
        (statusTodo === "Completed" ? todo.completed : !todo.completed) &&
        (prioritiesTodo.length
          ? prioritiesTodo.includes(todo.priority)
          : true)
      );
    });
  }
);
