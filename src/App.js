import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import images from '/images/House_of_Suelo_pix'

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }





    class App extends Component {
      render () {
        return (
          <div className="App">
              <div className="App-header">
                <h1> House of Suelo </h1>
                    <img id="boobs" src="/House_of_Suelo_pix/boobs.JPG" alt="main img"/>
              </div>
            <button id="mainbutton" type="button" className="btn btn-default">Enter</button>
          </div>
        );
      }
    }


export default App;
