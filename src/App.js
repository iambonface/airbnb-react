import React, { Component } from 'react';
import Segment from './components/Segment';
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

        <div className="Map"></div>       
      </div>
    );
  }
}

export default App;
