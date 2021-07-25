import { SET_THEME, SET_COUNT } from "./types";

export const initialState = {
  theme: localStorage.getItem("theme") ?? "dark",
  count: 1,
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case SET_COUNT: {
      return {
        ...state,
        count: action.payload,
      };
    }
    default:
      return state;
  }
}
