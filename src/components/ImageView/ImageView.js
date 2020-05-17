import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class ImageView extends Component {
  render() {
    const photosExperiencesElements = this.props.photosExperiences.map(
      (photo, index) => {
        return (
          <div key={index}>
            <img></img>
          </div>
        );
      }
    );
  }
}

export default withRouter(connect(mapStoreToProps)(ImageView));
