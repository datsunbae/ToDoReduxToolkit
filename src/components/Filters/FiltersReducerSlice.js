const initState = {
  search: "",
  status: "All",
  priorities: [],
};

const filtersReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "filter/searchTodo":
      return {
        ...state,
        search: action.payload,
      };
    case "filter/statusTodo":
      return {
        ...state,
        status: action.payload,
      };
      case "filter/prioritiesTodo":
      return {
        ...state,
        priorities: action.payload
      };
    default:
      return state;
  }
};

export default filtersReducer;
