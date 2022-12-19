import React from "react";
import { Article, Brand, Feature, Navbar, CTA } from "./components";
import {
  Features,
  Blog,
  Possibility,
  WhatGPT3,
  Header,
  Footer,
} from "./containers";
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3  />
      <Features />
      <Possibility/>
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
