import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved.js";
import Search from "./pages/Search.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
console.log("Google API Key", process.env.REACT_APP_GOOGLE_API_KEY);

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </div>
    </Router>
  );
}

export default App;
