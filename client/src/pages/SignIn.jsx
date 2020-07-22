import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router';
import Account from './Account';
export default class SignUp extends Component {
    state = {
      top: '-100',
      message: '',
      signEmail: '',
      signPass: '',
      firstNam: '',
      lastNam: '',
      email: '',
      password: '',
      phone: '',
      birthDate: '',
      redirect: false
    }
    handleFirstName = (e) => {
        this.setState({ firstNam: e.target.value });
    }
    handleLastName = (e) => {
        this.setState({ lastNam: e.target.value });
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }
    handlePhone = (e) => {
        this.setState({ phone: e.target.value });
    }
    handleSignInEmail = (e) => {
        this.setState({ signEmail: e.target.value });
    }
    handleSignInPassword = (e) => {
        this.setState({ signPass: e.target.value });
    }
    handleBirthday = (e) => {
        this.setState({ birthDate: e.target.value });
    }
    handleCreateAccount = e => {
        e.preventDefault();
        const { firstNam, lastNam, email, password, phone, birthDate } = this.state
        if(firstNam === '' || lastNam === '' || email === '' || password === '' || phone === '' || birthDate === ''){
            this.setState({message: 'Please fill out all of the fields', top: '16'});
            setTimeout(() => {
                this.setState({message: '', top: '-100'});
            }, 3000);       
        }
        axios.get(`/api/clients/${email}`).then(res => {
            if (res.data.message === 'Account already exist'){
                this.setState({message: 'Email already exist', top: '16'});
                setTimeout(() => {
                    this.setState({message: '', top: '-100'});
                }, 3000);
                return false;    
            }
            else {
                axios.post('/api/clients', 
                            {
                                firstNam: firstNam,
                                lastNam: lastNam,
                                email: email,
                                phone: phone,
                                password: password,
                                birthDate: birthDate
                            }).then(res => {
                                    this.setState({message: 'Account Created', top: '16'});
                                    setTimeout(() => {
                                        window.location.reload(false);
                                    }, 2000);
                            });        
            }
        })
    }

    handleSignIn = e => {
        e.preventDefault();
        const {  signEmail, signPass } = this.state
        axios.post('/api/login', 
            {
                email: signEmail,
                password: signPass
            }).then(res => this.setState({ redirect: true }))
            .catch(err => {
                if (err) {
                    this.setState({message: 'Incorrect Username or password', top: '16'});
                    setTimeout(() => {
                        this.setState({message: '', top: '-100'});
                    }, 3000);
                }
            })
    }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect  to='/account'/>;
     }
    return (
            <div>
                <div style={{backgroundColor: '#444',
                    color: '#ffff',
                    padding: '16px',
                    position: 'absolute',
                    right: '16px',
                    top: `${this.state.top}px`,
                    zIndex: '999',
                    transition: 'top 0.5s ease'}}> 
                    {this.state.message}
                </div>
                <div style={{height: '50vw', width: '100vw'}} className="row">
                    <div 
                    style={{
                      backgroundImage: 'url(https://breweryprintshoppe.com/wp-content/uploads/2017/12/brewery-print-shoppe-background-keg-beer.jpg)',
                      backgroundRepeat: 'no-repeat'
                      }} className="col-md-8 register-left">

                    </div>
                    <div style={{marginTop: '15%'}} className="col-md-4 register-right">
                        <h1 style={{textAlign: 'center'}}>Brewivery</h1>
                        <hr className="lineBreak"/>
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Create Account</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Sign In</h3>
                                <div className="row register-form">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" name='email' value={this.state.value} onChange={this.handleSignInEmail}  />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control"  placeholder="Password *" name='email' value={this.state.value} onChange={this.handleSignInPassword}   />
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleSignIn}>Sign In</button>
                            </div>
                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  className="register-heading">Create Account</h3>
                                <div id='signIn-form' className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name *" name='firstNam' value={this.state.value} onChange={this.handleFirstName}  />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email *" name='email' value={this.state.value} onChange={this.handleEmail}  />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name *" name='lastNam' value={this.state.value} onChange={this.handleLastName}   />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" maxLength="20" minLength="10" className="form-control" placeholder="Phone *"name='phone' value={this.state.value} onChange={this.handlePhone}  />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="password" className="form-control" placeholder="Password *" name='password' value={this.state.value} onChange={this.handlePassword}  />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="date" className="form-control" placeholder="Birthday" name='birthDate' value={this.state.value} onChange={this.handleBirthday}  />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={this.handleCreateAccount}>Create your account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
  }
}
