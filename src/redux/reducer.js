// const initState = {
//     filters: {
//         search: '',
//         status: 'All',
//         priorities: []
//     },
//     todoList: [
//         {id: 1, name: 'Tan gai', priority: 'High', completed: false},
//         {id: 2, name: 'Learn Redux', priority: 'Medium', completed: true},
//         {id: 3, name: 'Learn Docker', priority: 'Low', completed: false},
//     ],
// }

// const rootReducer = (state = initState, action) => {
//     console.log({state, action});
//     switch(action.type) {
//         case 'todoList/addTodo':
//             return {
//                 ...state,
//                 todoList: [
//                     ...state.todoList,
//                     action.payload
//                 ],
//             }
//         case 'filter/searchTodo':
//                 return {
//                     ...state,
//                     filters: {
//                         ...state.filters,
//                         search: action.payload
//                     }
//                 }
//         default:
//             return state;
//     }

// }

import filtersReducer from "../components/Filters/FiltersReducerSlice";
import todoListReducer from "../components/Todo/TodoReducerSlice";
import { combineReducers } from "redux";

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
