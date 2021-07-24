import { SET_THEME } from "./types";

export const initialState = {
  theme: localStorage.getItem("theme") ?? "dark",
};

export default function reducer(state, action) {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
}
