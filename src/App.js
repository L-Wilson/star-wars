import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "luke",
      hair: "",
      gender: ""
    }
  }

  componentDidMount() {
    Axios.get("https://swapi.co/api/people/1")
      .then(result =>
        this.setState({
          name: result.data.name,
          hair: result.data.hair_color,
          gender: result.data.gender
        })

      )
  }

  render() {
    return (
      <div className="App">
        <h1>Name: {this.state.name}</h1>
        <h1>Hair: {this.state.hair}</h1>
        <h1>Gender: {this.state.gender} </h1>

      </div>
    );
  }
}

export default App;
