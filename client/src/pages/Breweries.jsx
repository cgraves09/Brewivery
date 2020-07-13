import React, { Component } from 'react'
import {WrappedMap, Brewery} from '../components/GoogleMap/';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: null,
            longitude: null,
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCords = this.getCords.bind(this);
    }

    componentDidMount(){
        this.getLocation()
        Brewery()
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCords)
        }else {
            alert('Geolocation is not supported by this browser.');
        }

    }

    getCords(position) {
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,

        })
    }
    render() { 
        console.log(process.env.REACT_APP_GOOGLE_API_KEY)
        return (
            <div style={{width: '100vw', height:'100vh'}}>          
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    lat={this.state.latitude} lng={this.state.longitude} 
                 >  
                 </WrappedMap>
            </div>                      
        )
    }
}
