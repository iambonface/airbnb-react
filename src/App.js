import React, { Component } from 'react';
import Segment from './components/Segment';
import Marker from './components/Marker';
import GoogleMapReact from 'google-map-react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segments: []
    }
  }
  componentDidMount(){
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          segments: data
        });
      })
  }
  render() {
    const center = {
      lat: 48.8566,
      lng: 2.35222

  };
    return (
      <div className="App">
        <div className="Main">
            <div className="Search">
            </div>
            <div className="Segments">
              {this.state.segments.map((segment)=>{
                return <Segment key={segment.id} segment={segment}/>
              })}
            </div>
        </div> 

        <div className="Map">
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={12}>

            {this.state.segments.map((segment)=>{
                return  <Marker lat={segment.lat} lng={segment.lng}
                            text={segment.price}/>
              })}

          </GoogleMapReact>
        </div>    
      </div>
    );
  }
}

export default App;
