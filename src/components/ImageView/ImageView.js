import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

// const photosExperiences = this.props.store.photosExperiences;
// const found = photosExperiences.find(image =>image.experience_id === )

const imageStyle = {
  width: "100%",
  overflow: "hidden",
};

const containerStyle = {
  textAlign: "center",
  overflow: "hidden",
  height: "100px",
  padding: "0",
};

class ImageView extends Component {
  render() {
    const photosExperiencesElements = this.props.photosExperiencesElements.map(
      (photo, index) => {
        return (
          <div key={index} style={containerStyle}>
            <img src={photo.experience_photo} style={imageStyle} />
          </div>
        );
      }
    );
    return (
      <div>
        <div>{photosExperiencesElements}</div>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(ImageView));
