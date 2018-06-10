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
   static defaultProps = {
    center: {
      lat: 48.8566,
      lng: 2.35222
    },
    zoom: 11
  };

  render() {
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
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>

          <div className="Segments">
            {this.state.segments.map((segment)=>{
              return <Marker
              lat={segment.lat}
              lng={segment.lng}
              text={segment.price}/>
            })}
          </div>
          </GoogleMapReact>
        </div>       
      </div>
    );
  }
}

export default App;
