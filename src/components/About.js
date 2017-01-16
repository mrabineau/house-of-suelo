import React, { Component } from 'react';
import './About.css';
import '../App.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import 'TweenMax'
// import { Router, Route, Link, browserHistory } from 'react-router';
import { Link, Info, Photos } from 'react-router';



class About extends Component {
  constructor(props){
    super(props);
    this.state = {images: ["jacket.JPG",
                           "collar.JPG",
                           "boobs2.JPG",
                           "crabhat.JPG",
                           "fries.JPG",
                           "peli.JPG",
                            "hat.JPG",
                            "jacket1.JPG",
                            "naked.JPG",
                            "pasta.JPG",
                            "soda.JPG"],
                            selected:0}
    this.handleAdd = this.handleAdd.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }


      handleAdd () {
        const nextIndex = this.state.selected + 1;
        if (nextIndex >= this.state.images.length){
            this.setState({selected: 0})
        } else {
          this.setState({selected: nextIndex})
      }

      console.log(nextIndex);
    }


 handleBack () {
    const nextIndex = this.state.selected - 1;
    if (nextIndex < 0 ){
        this.setState({selected: this.state.images.length -1})
    } else {
      this.setState({selected: nextIndex})
  }

  console.log(nextIndex);
}





      render () {
        // let selectedColor = this.state.selected;
        let selected = this.state.selected;
        const rootURL = `/House_of_Suelo_pix/${this.state.images[selected]}`;
        return (
        <div className = "body">
            <button id="all" type="button" className="btn"><Link to="/photos"> SEE ALL </Link></button>
            <button id="top" type="button" className="btn"><Link to="/info"> WHO EVEN <strong> IS </strong> BBY CONSUELO </Link></button>
              <div className="About">
                 <div  className="main">
                    <h1 id="blue"> CUSTOMIZE EMBROIDERY FOR YOUR CUSTOM LIFE </h1>

                          <ReactCSSTransitionGroup
                          transitionName="image"
                          transitionEnterTimeout={500}
                          transitionLeaveTimeout={300}>
                              <img id="addImage" src={rootURL} alt="img"></img>
                          </ReactCSSTransitionGroup>
                    </div>
                 <button id="reverse" type="button" className="btn" onClick={this.handleBack}>&#x2190;</button>
                 <button id="bottom" type="button" className="btn" onClick={this.handleAdd}>&#x2192;</button>
                <h4> To place an order, just send us an email at [house of suelo email] :D </h4>
              </div>
          </div>
        );
     }
}


// const colors = ['#F7CA18', '#26A65B', '#003171', '#BF55EC', '#F62459', '#DC3023']
export default About;
