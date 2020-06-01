import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import { selectPhotosExperiences } from "../../redux/reducers/_root.reducer";

// const photosExperiences = this.props.store.photosExperiences;
// const found = photosExperiences.find(image =>image.experience_id === )

const imageStyle = {
  width: "100%",
  overflow: "hidden",
};

const containerStyle = {
  textAlign: "center",
  // overflow: "hidden",
  height: "100px",
  padding: "0",
};

// IMPORTED SELECTPHOTOSEXPERIENCES FROM ROOT REDUCER AND CONNECTED IT TO MAPSTATETOPROPS.
//NOT YET SURE HOW IT WORKS -- HOW TO PULL DATA FROM IT.
//commented out conditional rendering and console logging selectPhotosExperiences object

class ImageView extends Component {
  render() {
    const { photoExperience } = this.props;
    const { item } = this.props;
    if (item.id === photoExperience.experience_id) {
      return (
        <div style={containerStyle}>
          {/* <p>{photoExperience.experience_photo}</p> */}
          <img src={photoExperience.experience_photo} style={imageStyle} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(connect(mapStoreToProps)(ImageView));

//STRUGGLE CODE BELOW//

// photoExperience[Symbol.iterator] = function* () {
//   yield this.props.photoExperience;
// };

// item[Symbol.iterator] = function* () {
//   yield this.props.item;
// };

// let photoExperienceArray = [...photoExperience];
// let itemArray = [...item];
// for (let i of photoExperienceArray) {
//   for (let x of itemArray) {
//     if (i.id === x.experience_id) {
//       return (
//         <div style={containerStyle}>
//           <p> "I found 3" </p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <p>this was not 3</p>
//         </div>
//       );
//     }
//   }
// }
// const photosExperiencesElements = this.props.photosExperiencesElements.map(
//   (photo, index) => {
//     for (let experience of this.props.store.getPhotosExperiences) {
