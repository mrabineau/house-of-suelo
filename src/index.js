import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About.js'
import Info from './components/Info.js'
import Photos from './components/photos.js'
import './index.css';
import { Router, Route, browserHistory } from 'react-router'


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/info" component={Info} />
    <Route path="/photos" component={Photos} />
  </Router>
), document.getElementById('root'));


















// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
