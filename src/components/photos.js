import React, { Component } from 'react';
import './photos.css';
import '../App.js';
import 'react-addons-css-transition-group';
import 'react-router';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'elemental';
import { Link } from 'react-router';
import PhotoOverview from './PhotoOverview.js';

    class Photos extends Component {
        constructor(props){
        super(props);
        this.state = {
          images: [
            "jacket.JPG",
            "collar.JPG",
            "boobs2.JPG",
            "crabhat.JPG",
            "fries.JPG",
            "peli.JPG",
            "hat.JPG",
            "jacket1.JPG",
            "naked.JPG",
            "pasta.JPG",
            "soda.JPG",
            "cherry.JPG"
          ],
          selected: null,


        }
        this.selectPhoto = this.selectPhoto.bind(this)
      }



      selectPhoto (index) {
          if (index !== null) {
            this.setState({selected: index})
          }
      }


        render () {
          const photoDivs =this.state.images.map((photo, index) => {
            const rootUrl =`/House_of_Suelo_pix/${photo}`
            return <img className="photo" src={rootUrl} alt="pix" key={index} onClick={() => this.selectPhoto(index)} />
          });

          return (
            <div id="photoContainer">
            {
              (typeof this.state.selected === 'number')

              ?
            <PhotoOverview imageSource={"/House_of_Suelo_pix/" + this.state.images[this.state.selected]}
                            deselect={this.selectPhoto}/>
              :
              null
             }
              <button id="back" type="button" className="btn"><Link to="/about"> &#x2190; </Link></button>
                <div className="imgBody">
                  <div className ="allpix">
                    {photoDivs}
                  </div>
                </div>
            </div>
            );
        }




    }


export default Photos;


