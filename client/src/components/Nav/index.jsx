import React, { Component} from "react";
import logo from '../../images/hops.png';
import { Redirect } from 'react-router';
function Nav (props) {
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
                        <hr className="lineBreak"/>
                        <h3 style={{
                            color: '#ffff',
                            fontStyle: 'italic'
                        }}>Handcrafted Brews Delivered...</h3>
                    </div>
                    <div  className="col-md-4">
                        <a href="/signin">
                            <button style={{textAlign: 'center',marginTop: '6%'}} className='btn btn-primary btn-lg' tabIndex="-1" aria-disabled="true">Sign In</button>                    
                        </a>
                    </div>
                </div>
        );        
}

export default Nav;
