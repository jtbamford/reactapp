import React, { Component } from 'react';


class Button extends Component {
/*
var moviename;

  constructor(props) {
    super(props);
    this.state = {
            moviename: ""
    };

    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(event) {
  this.setState({moviename: event.target.value});
}

handleSubmit(event) {
  //alert('A name was submitted: ' + this.state.value);
  moviename=this.state.value;
  event.preventDefault();
}
*/
  getMovie = (props) => {
    //name=document.getElementById('mov').value;
    //{this.handleChange}
    console.log(props);
    console.log('http://www.omdbapi.com/?t='+props+'&apikey=d3049279');
//    axios.get('http://www.omdbapi.com/?t='+name+'&apikey=d3049279')
//    .then(function (response) {
//      console.log(response);
//    })
//    .catch(function (error) {
//      console.log(error);
  //  }
  //);
  }


export default Button;
