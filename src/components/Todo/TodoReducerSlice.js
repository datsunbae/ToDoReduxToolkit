const initState = [
  { id: 1, name: "Tan gai", priority: "High", completed: false },
  { id: 2, name: "Learn Redux", priority: "Medium", completed: true },
  { id: 3, name: "Learn Docker", priority: "Low", completed: false },
];

const todoListReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleStatus":
      return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
    default:
      return state;
  }
};

export default todoListReducer;
