import React, { Component } from 'react';
import './Info.css';
import '../App.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'react-router'
// import Particles from 'react-particles'
// import { Link } from 'react-router';
import Particles from 'react-particles-js';

    class Info extends Component {
        render () {
        return (
        <div className="infoBody">
            <div className="Info">
              <div id="aboutDiv">
                <div className="friendship">
                  <h1 className="text"> BBY CONSUELO AKA AIDAN REESE ROMICK </h1>
                  <h2 className="text"> YOUR QUEEN </h2>
                    <img id="aidan" src="/House_of_Suelo_pix/aid.JPG" alt="aidan"/>
                </div>
              </div>
                <Particles className="particles-js" params={{
                    "particles": {
                      "number": {
                        "value": 265,
                        "density": {
                          "enable": true,
                          "value_area": 946.9771699587272}
                      },
                      "color": {
                        "value": "#000"
                      },
                      "shape": {
                        "type": "image",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 6
                        },
                        "image": {
                          "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/2000px-Gold_Star.svg.png",
                          "width": 200,
                          "height": 200
                        }
                      },
                      "opacity": {
                        "value": 1,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 4.008530152163807,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 12.181158184520175,
                          "size_min": 7.308694910712106,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#FACADE",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 600
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": true,
                          "mode": "grab"
                        },
                        "onclick": {
                          "enable": true,
                          "mode": "repulse"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 250,
                          "size": 0,
                          "duration": 2,
                          "opacity": 0,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 400,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }
              }/>
          </div>
         </div>
        );
      }
    }


export default Info;
