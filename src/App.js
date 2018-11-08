import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
            Title: ""
    };
  }

  getMovie = () => {
    var name;
  //  var movie; // this needs to be an object
    name=document.getElementById('mov').value;
    //{this.handleChange}

    axios.get('http://www.omdbapi.com/?t='+name+'&apikey=d3049279').then( response => {
      this.setState({
        Title: response.data.Title
      })

    });

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <font size="10">
          Movie Database
          </font>


        Search Movie:
        <input id="mov" type="text" name="moviename"/>
        <button onClick={this.getMovie}>Search</button>
        {this.state.Title}
        </header>
      </div>
    );
  }
}

export default App;
