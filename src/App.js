import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateSimpson  from  './GenerateSimpson';
import  DisplayQuote  from  './DisplayQuote';
/*
const  sampleEmployee = {
  gender:  'male',
  name: {
      title:  'mr',
      first:  'mathys',
      last:  'aubert'
  },
  location: {
      street:  '9467 rue gasparin',
      city:  'perpignan',
      postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
      medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};
*/
const  sampleSimpson = {
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  "characterDirection" : "Left"
 };

class App extends Component {

  state = {
    // on peut mettre notre sampleEmployee par défaut
    // afin d'avoir toujours un employé d'affiché
    simpson:  sampleSimpson
  };

  getSimpsons() {
    // Récupération de l'employé via fetch
    //fetch("https://randomuser.me/api?nat=fr")
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          simpson:  data[0],
          //employee:  data.results[0],
        });
    });
}


  render() {
    return (
      <div className="App">
        <GenerateSimpson  selectSimpson={() =>  this.getSimpsons()}  />
        <DisplayQuote  simpson={this.state.simpson}  />
      </div>

      //<DisplayEmployee  employee={this.state.employee}  />
    );
  }
}

export default App;
