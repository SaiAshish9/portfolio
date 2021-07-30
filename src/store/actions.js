import { SET_THEME, SET_COUNT, SET_VISIBLE } from "./types";

export default function useActions(_, dispatch) {
  const setTheme = (theme) => dispatch({ type: SET_THEME, payload: theme });

  const setCount = (count) => dispatch({ type: SET_COUNT, payload: count });

  const setVisible = (visible) => dispatch({ type: SET_VISIBLE, payload: visible });

  return {
    setTheme,
    setCount,
    setVisible
  };
}
