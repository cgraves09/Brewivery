import React from "react";
import Home from "./pages/Home";
import Breweries from './pages/Breweries'
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css'

function App() {
  
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/account" component={Account} />  */}
          <Route exact path="/breweries" component={Breweries} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
