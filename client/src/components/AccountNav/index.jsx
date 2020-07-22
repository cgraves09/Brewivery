import React, { Component} from "react";
import logo from '../../images/hops.png';
import axios from 'axios';
import { Redirect } from 'react-router';
import selfImg from '../../images/hops.png';
function AccountNav (props) {
    function signOut () {
      axios.get('/api/logout').then(res => {
            return (
            <div className="container">
            <h1 style={{
              textAlign: 'center',
              fontSize: '90px',
              fontWeight: '300'}}
            >
              Brewivery
            </h1>
            <hr className="lineBreak"/>
            <div className='container' 
            style={{
              backgroundColor: '#cf944d', 
              textAlign: 'center',
              borderRadius: '50px',
              marginTop: '10%'}}> 
            <h1 
              style={{
                color: '#ffff', 
                fontWeight: '300',
                paddingTop: '30px'}}
            >
                Logging you out, see you next beers on you!
              </h1>
            <img className='App-logo' src={selfImg} alt=""/>
            </div>
            </div>
            )
      });
    }
        return (
                <div className="row" style={{backgroundColor: '#cf944d', textAlign: 'center'}}>
                    <div className="col-md-4">
                        <a className="navbar-brand" href="/">
                            <img src={logo} width="100" height="100" alt="" loading="lazy" />
                        </a>                    
                    </div>
                    <div className="col-md-4">
                        <h1 style={{
                            color: '#ffff',
                            fontWeight: '300',
                            fontSize: '90px'
                        }}>Brewivery</h1>
                    </div>
                    <div  className="col-md-4">
                            <button loggedOut={true} style={{textAlign: 'center',marginTop: '6%'}} className='btn btn-primary btn-lg' onClick={signOut} tabIndex="-1" aria-disabled="true">Sign Out</button>                
                    </div>
                </div>
        );        
}

export default AccountNav;
