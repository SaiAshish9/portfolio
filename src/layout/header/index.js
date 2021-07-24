import React from "react";

import { Container, Label, Moon, Sun } from "./styles";

import { useStore } from "store";

import { Theme } from "constants/index";

const Header = () => {
  const {
    state: { theme },
    actions: { setTheme },
  } = useStore();

  function handleIconClick() {
    setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
  }

  let iconContent = <Sun onClick={handleIconClick} />;

  if (theme === Theme.dark) {
    iconContent = <Moon onClick={handleIconClick} />;
  }

  return (
    <Container>
      <Label>Sai Ashish</Label>
      {iconContent}
    </Container>
  );
};

export default Header;
