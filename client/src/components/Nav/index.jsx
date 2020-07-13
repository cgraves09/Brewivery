import React from "react";
import logo from '../../images/logo.jpeg'
function Nav() {
  return (
        <nav className="navbar navbar-expand-lg navbar" style={{backgroundColor: '#cf944d'}}>
            <a className="navbar-brand" href="/">
                <img src={logo} width="30" height="30" alt="" loading="lazy" />
            </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" style={{color: '#ffff'}} href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" style={{color: '#ffff'}} href="/breweries">Breweries</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" style={{color: '#ffff'}} href="/cooler">Cooler</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <a href="/sign-in" style={{color: '#ffff'}} tabIndex="-1" aria-disabled="true">Sign in</a>
            </form>
        </div>
        </nav>
  );
}

export default Nav;
