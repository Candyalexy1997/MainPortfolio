import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "/components/Nav/index";
import About from "/components/About/index";
import Contact from "/components/ContactForm/index";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

