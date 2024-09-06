import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filters: {
    name: '',
  },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = state => state.filters.filters.name;
export const filtersReducer = filtersSlice.reducer;

// Vanila redux logic
// export const filtersReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'filter/changeFilter': {
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };

// // action
// export const changeFilter = payload => {
//   return {
//     type: 'filter/changeFilter',
//     payload,
//   };
// };
