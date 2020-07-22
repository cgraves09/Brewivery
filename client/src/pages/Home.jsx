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
                    <AgeModal />
                    <Nav />           
                    <div className="jumbotron" style={{height: '400px'}} id="heading" >
                        <div className="row">
                            <div className="col-md-6">
                                <h3 style={{color: '#cf944d'}}>Brewery delivery in West Palm Beach, FL</h3>                        
                            </div>
                            <div className="col-md-8"></div>
                        </div>
                    </div>
                    <Jumbotron>
                    <div className="row">
                        <div style={{padding: '25px'}} className="col-md-12">
                            <h1>How do I get my Brewskis?</h1>
                            <hr className='lineBreak'/>
                        </div>
                        <div className="col-md-6">
                            <img style={{
                                borderRadius: '25px',
                                transform: 'rotate(-5deg)'}} 
                                src={logo} alt=""/>
                        </div>
                        <div style={{ 
                            transform: 'rotate(5deg)', 
                            backgroundColor: 'black', 
                            marginTop: '2%',
                            borderRadius: '25px'}} 
                            className="col-md-4"
                        >
                            <h1 style={{
                                color: '#ffff', 
                                fontSize: '40px', 
                                marginTop: '20%'}}
                            >
                                Create an account
                            </h1>
                            <hr className='lineBreak'/>
                            <h1 style={{color: '#ffff', fontWeight: '300'}}>Search Local Breweries in the West Palm Beach Area.</h1> 
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
                            padding: '50px'}} 
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
                            zIndex: 3
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
                        <h1>Featured Beers</h1>
                        <hr className='lineBreak'/>
                        <div className="row">
                            <div className="col-md-4">
                                <img className='img-fluid rounded' src={this.state.beers[0].thumbnail} alt=""/>
                                <h1>{this.state.beers[0].name}</h1>
                                <h3>{this.state.beers[0].beers[0].beer}</h3>
                                <h4>{this.state.beers[0].beers[0].type}<span> ${this.state.beers[0].beers[0].price} </span></h4>
                            </div>
                            <div className="col md 4"></div>
                            <div className="col-md-4">
                                <img className='img-fluid rounded' src={this.state.beers[2].thumbnail} alt=""/>
                                <h1>{this.state.beers[2].name}</h1>
                                <h3>{this.state.beers[2].beers[1].beer}</h3>
                                <h4>{this.state.beers[2].beers[1].type}<span> ${this.state.beers[0].beers[1].price} </span></h4>
                            </div>
                        </div>
                    </Jumbotron>
                </div>                      
            )
        }            
    }

}
