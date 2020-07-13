import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import API from '../../utils/API'
let brewList = []
function Brewery () {
    API.getBreweries().then(res =>{
        brewList = res.data;
        console.log(brewList);
    })
}
function Map(props) {
    const [ selectedBrewery, setSelectedBrewery] = useState(null);
    return (
        <GoogleMap 
            defaultZoom={13} 
            defaultCenter={{ lat: 26.69987, lng: -80.06437}} 
        >
        {brewList.map((list) => (
            <Marker
                key={list._id} 
                position={{
                    lat: list.lat, 
                    lng: list.lng

                }}
                onClick={() => {
                 setSelectedBrewery(list);   
                }}
                icon={{
                    url: 'data:image/png;base64,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',
                    scaledSize: new window.google.maps.Size(25, 25)
                }} 
            />
        ))}
        {selectedBrewery && (
            <InfoWindow
            position={{
                    lat: selectedBrewery.lat, 
                    lng: selectedBrewery.lng
                }}
            onCloseClick ={() => {
               setSelectedBrewery(null); 
            }}
                > 
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={selectedBrewery.thumbnail} height='100px' width= '100px' alt=""/>
                        </div>
                        <div className="col-md-8">
                            <h6>{selectedBrewery.name}</h6>
                            <p>{selectedBrewery.address}</p>
                            <p>{selectedBrewery.phone}</p>
                            <a href={selectedBrewery.website}>
                            <p>Website</p>
                            </a>
                            <p>Rating: {selectedBrewery.rating}</p>
                        </div>
                    </div>  
                </div> 
            </InfoWindow>
        )}
        </GoogleMap>
        
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export {
    WrappedMap,
    Brewery   
} 