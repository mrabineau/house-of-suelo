import React, { Component } from 'react';
import './About.css';
import '../App.js';
// import { Router, Route, Link, browserHistory } from 'react-router';



class About extends Component {
    getInitialState () {
      return {
        bgColor: 'red'
      }
    }

    handleClick () {
      this.setState({
        bgColor: 'blue'
      })
    }

      render () {
        return (
            <div className="About">
              <h1 id="head"><button onClick={this.handleClick}
                                    style={{backgroundColor:this.state.bgColor}}>
                                        CUSTOMIZE YOUR SHIT </button> </h1>
                  <img id="tree" src="/House_of_Suelo_pix/jacket.JPG" alt="main img"/>
            </div>
        );
      }
}


// const colors = ['#F7CA18', '#26A65B', '#003171', '#BF55EC', '#F62459', '#DC3023']
export default About;
