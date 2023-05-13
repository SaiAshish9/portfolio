import React, { useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";

import { Home, DSA } from "screens";

import { Container } from "./styles";

import { useStore } from "store";

import axios from "axios";

import { Header, Footer } from "layout";
import { locales } from "common/I18n";

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/xq-light.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/javascript/javascript.js');
require('codemirror/mode/clike/clike.js');
require('codemirror/mode/python/python.js');
require('codemirror/mode/shell/shell.js');
require('codemirror/mode/sql/sql.js');

const App = () => {
  const [scrolled, isScrolled] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", checkHeader);
    var checkHeader = setInterval(() => {
      let scrollPosition = Math.round(window.scrollY);
      if (scrollPosition > 10) {
        isScrolled("scrolled");
      } else {
        isScrolled(null);
      }
    }, 300);
    () => {
      window.removeEventListener("scroll");
      clearInterval(checkHeader);
    };
  }, []);

  const {
    actions: { setCount },
  } = useStore();

  async function checkCount() {
    if (!localStorage.getItem("first")) {
      localStorage.setItem("first", true);
      axios("https://api.countapi.xyz/update/saiashish9/portfolio/?amount=1")
        .then(({ data: { value } }) => setCount(value > 1 ? value : 1))
        .catch((e) => {
          setCount(1);
        });
    } else {
      axios("https://api.countapi.xyz/get/saiashish9/portfolio")
        .then(({ data: { value } }) => {
          setCount(value);
        })
        .catch((e) => {
          setCount(4000);
        });
    }
  }

  useEffect(() => {
    checkCount();
  }, []);

  const base = `/:locale(${locales.join("|")})?`;

  return (
    <Container>
      <Header scrolled={scrolled} />
      <Switch>
        <Route exact path={base} component={Home} />
        <Route path={`${base}/dsa`} component={DSA} />
      </Switch>
      <Footer scrolled={scrolled} />
    </Container>
  );
};

export default App;
