import React, { Component } from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Term from './components/Term';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/term" component={Term} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default App;
