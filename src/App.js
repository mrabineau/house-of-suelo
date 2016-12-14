import React, { Component } from 'react';
import './App.css';
// import About from '/components/About.js';
import { Link } from 'react-router';


    class App extends Component {
      render () {
        return (
          <div className="App">
              <div className="App-header">
                <h1 id="intro"> House of Suelo </h1>
                    <img id="boobs" src="/House_of_Suelo_pix/boobs.JPG" alt="main img"/>
              </div>
            <button id="mainbutton" type="button" className="btn btn-default"> <Link to="/about"> Enter </Link>  </button>
          </div>
        );
      }
    }


export default App;
