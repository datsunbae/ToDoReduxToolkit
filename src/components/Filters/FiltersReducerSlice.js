// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   console.log({ state, action });
//   switch (action.type) {
//     case "filter/searchTodo":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filter/statusTodo":
//       return {
//         ...state,
//         status: action.payload,
//       };
//       case "filter/prioritiesTodo":
//       return {
//         ...state,
//         priorities: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchTodo: (state, action) => {
       state.search = action.payload;
    }
    ,
    statusTodo: (state, action) => {
        state.status = action.payload;
    }
    ,
    prioritiesTodo: (state, action) => {
       state.priorities = action.payload;
    }
  }
});
