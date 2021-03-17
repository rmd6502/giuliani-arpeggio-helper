import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import DisplayStudies from "./components/display-studies-component";
import EditStudies from "./components/edit-studies-component";
import MainPage from "./components/mainpage-component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Giuliani Arpeggios Helper App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Main</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={MainPage} />
          <Route path="/edit/:id" component={EditStudies} />
          <Route path="/display" component={DisplayStudies} />
        </div>
      </Router>
    );
  }
}

export default App;
