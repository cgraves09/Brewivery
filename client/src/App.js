import React from "react";
import Home from "./pages/Home";
import Breweries from './pages/Breweries'
import SignIn from './pages/SignIn';
import Account from './pages/Account';
import Checkout from './pages/Checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css'

function App() {
  
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/account" component={Account} /> 
          <Route exact path="/breweries" component={Breweries} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
