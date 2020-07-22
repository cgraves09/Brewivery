import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";
import AgeModal from '../components/AgeModal';
import API from '../utils/API';
import Nav from '../components/Nav';
import reviewOne from '../images/homepage_roof.jpeg';
import logo from '../images/hops.png';
import secondImg from '../images/secondJumbo.jpg';
export default class Home extends Component {
    state = {
        beers: [],
        isLoaded: false

    }
    componentDidMount(){
        API.getBreweries().then(result => {
            this.setState({
                isLoaded: true,
                beers: result.data})
        })        
    }
    handleChange = (event) => {
        this.setState({address: event.target.value})
    }

    render() { 
        if(!this.state.isLoaded){
            return <div>Loading...</div>
        }else{
            return (
                <div> 
                    {/* <AgeModal /> */}
                    <Nav />           
                    <div className="jumbotron" style={{height: '400px'}} id="heading" >
                        <div className="row">
                            <div className="col-md-6">
                                <h1 style={{color: '#cf944d', fontWeight: '300', paddingTop: '10%'}}>Brewery delivery </h1>
                                <h2 style={{color: '#ffff', fontWeight: '300'}}>in West Palm Beach, FL</h2>                        
                            </div>
                            <div className="col-md-8"></div>
                        </div>
                    </div>
                    <Jumbotron>
                    <div className="row">
                        <div style={{ textAlign: 'center',padding: '25px'}} className="col-md-12">
                            <h1 style={{fontWeight: '300', fontSize: '50px'}}>How do I get my Brewskis?</h1>
                            <hr className='lineBreak'/>
                        </div>
                        <div className="col-md-5">
                            <img style={{
                                borderRadius: '25px',
                                transform: 'rotate(-5deg)', 
                                textAlign: 'left'}} 
                                src={logo} alt=""/>
                        </div>
                        <div style={{ 
                            transform: 'rotate(5deg)', 
                            backgroundColor: 'black', 
                            marginTop: '2%',
                            borderRadius: '25px',
                            border: '1px solid #ffff'}} 
                            className="col-md-7"
                        >
                            <h1 style={{
                                color: '#ffff', 
                                fontSize: '40px', 
                                marginTop: '20%',
                                textAlign: 'center',
                                fontWeight: '300'}}
                            >
                                Create an account
                            </h1>
                            <hr className='lineBreak'/>
                            <h1 style={{color: '#ffff', fontWeight: '300',textAlign: 'center'}}>Search Local Breweries in the West Palm Beach Area.</h1> 
                        </div>
                    </div>
                    </Jumbotron>
                    <Jumbotron>
                    <div className="row">
                     <div style={{ 
                            transform: 'rotate(-5deg)', 
                            backgroundColor: 'black', 
                            marginTop: '2%',
                            borderRadius: '25px',
                            zIndex:3,
                            padding: '50px',
                            border: '1px solid #cf944d'}} 
                            className="col-md-4">
                            <h1 style={{
                                color: '#ffff', 
                                fontSize: '40px', 
                                marginTop: '20%'}}
                            >
                                Shop
                            </h1>
                            <hr className='lineBreak'/>
                            <h1 style={{color: '#ffff', fontWeight: '300'}}>Browse that specific brewery for their crafted beers!</h1> 
                        </div>
                        <div style={{transform: 'rotate(5deg)'}} className="col-md-8">
                            <img style={{borderRadius: '25px', marginRight: '50px', zIndex: 0}} src={secondImg}  height= '645' width = '950' alt=""/>
                        </div>
                        </div>
                       </Jumbotron>

                        <Jumbotron>
                        <div className="row">
                        <div className="col-md-8">
                            <img style={{borderRadius: '25px',transform: 'rotate(-5deg)'}} src={reviewOne} alt=""/>
                        </div>
                        <div style={{ 
                            transform: 'rotate(5deg)', 
                            backgroundColor: 'black', 
                            marginTop: '2%',
                            borderRadius: '25px',
                            zIndex: 3,
                            border: '1px solid #ffff'
                            }} 
                            className="col-md-4"
                        >
                            <h1 style={{
                                color: '#ffff', 
                                fontSize: '40px', 
                                marginTop: '20%'
                                }}
                            >
                                Get the party started!
                            </h1>
                            <hr className='lineBreak'/>
                            <h1 style={{color: '#ffff', fontWeight: '300', zIndex: 0}}>Sit back and wait and we will let you know when your beers are on the way!</h1> 
                        </div>
                    </div>

                    </Jumbotron>
                    <Jumbotron>
                        <h1 style={{fontWeight: '300'}}>Featured Beers</h1>
                        <hr className='lineBreak'/>
                        <div className="row">
                            <div className="col-md-4">
                                <img className='img-fluid rounded' src={this.state.beers[0].thumbnail} alt=""/>
                                <h1 style={{fontWeight: '300'}}>{this.state.beers[0].name}</h1>
                                <hr className="lineBreak"/>
                                <h3 style={{fontWeight: '300'}}>{this.state.beers[0].beers[0].beer}</h3>
                                <h4 style={{fontWeight: '300'}}>{this.state.beers[0].beers[0].type}<span> ${this.state.beers[0].beers[0].price} </span></h4>
                            </div>
                            <div className="col md 4"></div>
                            <div className="col-md-4">
                                <img className='img-fluid rounded' src={this.state.beers[2].thumbnail} alt=""/>
                                <h1 style={{fontWeight: '300'}}>{this.state.beers[2].name}</h1>
                                <hr className="lineBreak"/>
                                <h3 style={{fontWeight: '300'}}>{this.state.beers[2].beers[1].beer}</h3>
                                <h4 style={{fontWeight: '300'}}>{this.state.beers[2].beers[1].type}<span> ${this.state.beers[0].beers[1].price} </span></h4>
                            </div>
                        </div>
                    </Jumbotron>
                </div>                      
            )
        }            
    }

}
