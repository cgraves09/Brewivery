import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import axios from 'axios';
import API from '../utils/API';
import { Redirect } from 'react-router';
import {WrappedMap, Brewery} from '../components/GoogleMap/';
import selfImg from '../images/hops.png';
import AccountNav from '../components/AccountNav';
const REACT_APP_GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
class Account extends Component {
 constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstNam: '',
            lastNam: '',
            email: '',
            phone: '',
            breweries: '',
            isAuth: false,
            cooler: [],
            button: <h3> FILL THE COOLER, WE'LL GRAB THE ICE </h3>,
            checkout: false,
            total: 0
        };
    }
    componentDidMount(){
        setTimeout(() => {
        Brewery()
        this.UserInfo();
        API.getBreweries().then(result => {
            axios.get(`/api/cart/${this.state.id}`).then(res => {
              this.setState({cooler: res.data.cooler});
              });
              this.setState({
                  breweries: result.data,
                  isLoaded: true            
            });
            this.loadCart();
        }); 
        }, 5000);   
    }
    
    UserInfo = () => {
      axios.get('/api/login')
      .then(res => {
          const {id,firstNam, lastNam, phone, email, cooler,total} = this.state
          this.setState({
              id: res.data._id,
              firstNam: res.data.firstNam,
              lastNam: res.data.lastNam,
              email: res.data.email,
              phone: res.data.phone,
              total: (res.data.cooler.length === 0) ? 0 : res.data.cooler.length,
              cooler: res.data.cooler,
              isAuth: true,
              loggedOut: false       
          })
      })
    }
    addToCart = (id, beerName, beerType, beerPrice) => {
      this.state.total++;
      let beer  = {
        beerName: beerName,
        beerType: beerType,
        beerPrice: beerPrice
      };
      axios.put(`/api/clients/${id}`,{cooler: beer}).then(res => this.loadCart());
    }
    loadCart = () => {
      axios.get(`/api/cart/${this.state.id}`).then(res => {
        this.setState({cooler: res.data.cooler});
        console.log(this.state.total)
          if ( this.state.total > 0) {
            this.setState({button: <button 
                        style={{backgroundColor: '#cf944d'}} 
                        type="button" 
                        className="btn btn-secondary btn-lg btn-block"
                        onClick= {() => this.checkOut()}>
                        Checkout
                      </button>
            }) 
          }
      })
    }
    deleteItem = (id) => {
      axios.delete(`/api/cart/${id}`).then(res => {
          this.state.total--;
         if ( this.state.total === 0) {
            console.log(this.state.cooler.length)
            this.setState({button: <h3> The cooler is tapped, fill it up </h3> })
            this.loadCart();
          }else {
            this.loadCart();
          }

      });
    }
    checkOut = () => {
        this.setState({checkout: true});
    }

  render() {
        if (this.state.checkout) {
          return <Redirect  to='/checkout'/>;
        }
        if(!this.state.isLoaded){
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
                Loading all of that cool account info!
              </h1>
            <img className='App-logo' src={selfImg} alt=""/>
            </div>
            </div>
            )
        }
        if (!this.state.isAuth){
          return <Redirect  to='/signIn'/>;
          }
        
        else{
          return (
                  <div>
                    <AccountNav />
                    <div className="container">
                        <div className="card" style={{textAlign: 'center', background: 'black'}}>
                          <div className="card-body">
                            <h1 className="card-text">Welcome back {this.state.firstNam}!</h1>
                            <hr className="lineBreak"/>
                            <h3>You're Beers are waiting below</h3>
                          </div>
                        </div>              
                    </div>

                      <div style={{width: '100vw', height:'50vh'}}>
                          <WrappedMap
                              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_API_KEY}`}
                              loadingElement={<div style={{ height: `100%` }} />}
                              containerElement={<div style={{ height: `100%` }} />}
                              mapElement={<div style={{ height: `100%` }} />}
                              lat={26.7153} lng={80.0534}
                          >  
                          </WrappedMap>                
                      </div>         

                      <Jumbotron>
                        <div className="row">
                          <div className="col-md-6">
                            {this.state.breweries.map(brewery => (
                              <div className='beerList'>
                                <hr/>
                                <h1 key={brewery._id}>{brewery.name}</h1>
                                <h3>Beers:</h3>
                                {
                                brewery.beers.map(beer => {
                                return ( 
                                <div key={beer._id} style={{padding: '15px',border: '1px solid #ffff'}}>
                                    <h5>{beer.beer}</h5>
                                    <hr className="lineBreak"/>
                                    <p>{beer.type}</p>
                                    <p>${beer.price}</p>
                                    <button 
                                      onClick={() => this.addToCart(brewery._id,beer.beer,beer.type, beer.price)} 
                                      type="button" 
                                      className="btn btn-primary btn-lg">Add to cart
                                    </button>                 
                                  </div>
                                )
                                })                          
                                }
                              </div>
                              ))}                        
                          </div>

                          <div className="col-md-6">
                              <h1 style={{fontWeight: '300'}}>Cooler</h1>
                              <hr className="lineBreak"/>
                              { 
                                this.state.cooler.map(beer => {
                                  return( <div style={{padding: '15px', border: '1px solid #ffff'}}>
                                      <h5 key={beer._id}>{beer.beerName}</h5> 
                                      <button 
                                        onClick={() => this.deleteItem(beer._id)} 
                                        type="button" className="btn btn-primary btn-lg">
                                        Delete from cart
                                      </button>              
                                    </div>
                                  )
                                })                        
                              }
                              {this.state.button} 
                            </div>
                        </div>
                      </Jumbotron>
                  </div>
          )};
        };
};

export default Account;
