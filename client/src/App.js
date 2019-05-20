import React, { Component } from "react";
//lets us call Router and it will be BrowserRouter
import { BrowserRouter as Router, Route } from "react-router-dom"

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Post from "./components/Post";
import Shop from "./components/shop";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/post" component={Post} />
            <Route exact path="/shop" component={Shop} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;