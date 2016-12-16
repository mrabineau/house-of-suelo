import React, { Component } from 'react';
import 'react-router';


class PhotoOverview extends Component {





    render() {
      console.log(this.props)
      return (
        <img className="absolute"
             src={ this.props.imageSource}
             alt="test"
              onClick= {this.props.deselect}/>
       )
    }


}


export default PhotoOverview;
