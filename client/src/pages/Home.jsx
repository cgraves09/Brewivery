import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron";
import AgeModal from '../components/AgeModal';
import API from '../utils/API';
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
                    <div className="jumbotron" style={{height: '400px'}} id="heading" >
                        <div className="row">
                            <div className="col-md-6">
                                <h1 style={{color: '#ffff'}}>Brewivery</h1>
                                <h3 style={{color: '#cf944d'}}>Brewery delivery in West Palm Beach, FL</h3>                        
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>

                    </div>
                    <Jumbotron>
                        <div className="row">
                            <div className="col-md-12">
                                <h1>How do I get my Brewskis?</h1>
                                <hr className='lineBreak'/>
                            </div>
                            <div id='shopDiv' className="col-md-4">
                                <h3>Create an account</h3>
                                <hr className='lineBreak'/>
                                <h6>Let us know where you're at and we'll show you what local breweries are in your area.</h6>
                            </div>
                            <div id='shopDiv' style={{backgroundColor: '#cf944d',color: '#ffff'}} className="col-md-4">
                                <h3>Shop</h3>
                                <hr className='lineBreak'/>
                                <h6>Browse that specific brewery for their crafted beers!</h6>
                            </div>                        
                            <div id='shopDiv' className="col-md-4">
                                <h3>Get the party started!</h3>
                                <hr className='lineBreak'/>
                                <h6>Sit back and wait and we will let you know when your beers are on the way!</h6>           
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
