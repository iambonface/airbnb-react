import React, { Component } from 'react';
import Segment from './components/Segment';
import Marker from './components/Marker';
import GoogleMapReact from 'google-map-react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segments: [],
      selectedSegment: null
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

  selectSegment = (segment) => {
    //console.log(segment)
    this.setState({
      selectedSegment: segment
    })

  }
  render() {
    let center = {
      lat: 48.8566,
      lng: 2.35222
    }
    if (this.state.selectedSegment) {
      center = {
        lat: this.state.selectedSegment.lat,
        lng: this.state.selectedSegment.lng
      }
    }
    return (
      <div className="App">
        <div className="Main">
            <div className="Search">
            </div>
            <div className="Segments">
              {this.state.segments.map((segment)=>{
                return <Segment 
                  key={segment.id} 
                  segment={segment}
                  selectSegment={this.selectSegment}/>
              })}
            </div>
        </div> 

        <div className="Map">
          <GoogleMapReact
            center={center}
            zoom={12}>

            {this.state.segments.map((segment)=>{
                return  <Marker 
                            key={segment.id}
                            lat={segment.lat} 
                            lng={segment.lng}
                            text={segment.price}/>
              })}

          </GoogleMapReact>
        </div>    
      </div>
    );
  }
}

export default App;
