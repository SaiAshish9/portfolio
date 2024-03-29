import { SET_THEME, SET_COUNT, SET_VISIBLE } from "./types";

export const initialState = {
  theme: localStorage.getItem("theme") ?? "dark",
  count: null,
  visible: false,
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
    case SET_VISIBLE: {
      return {
        ...state,
        visible: action.payload,
      };
    }
    default:
      return state;
  }
}
