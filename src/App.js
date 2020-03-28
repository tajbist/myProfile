import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import About from "./component/about";
import Shop from "./component/shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Hello React Router</h1>
  </div>
);

export default App;
