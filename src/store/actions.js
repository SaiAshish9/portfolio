import { SET_THEME, SET_COUNT } from "./types";

export default function useActions(_, dispatch) {
  const setTheme = (theme) => dispatch({ type: SET_THEME, payload: theme });

  const setCount = (count) => dispatch({ type: SET_COUNT, payload: count });

  return {
    setTheme,
    setCount,
  };
}
