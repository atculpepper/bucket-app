import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import BucketItemEdit from "BucketItemEdit";
import ImageUpload from "../ImageUpload/ImageUpload";
import BucketLogo from "../../assets/Bucket.png";

const imageStyle = {
  width: "100%",
  overflow: "hidden",
};

class BucketComplete extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
  }

  render() {
    const { item } = this.props;

    let Completed = item.completed;
    // if item.photo_id === !null
    if (Completed) {
      return (
        <div className="BucketListElement">
          <div>
            <ul className="listItem">
              <span>
                <li>{item.description}</li>
              </span>
            </ul>
            <img
              src={this.props.store.getPhotosExperiences}
              className="image"
            />
            {/* <img
              src={this.props.store.getList.photo_id}
              alt={"Photo of " + this.props.item.description}
              style={imageStyle}
            /> */}
          </div>
          <ImageUpload
            experienceID={this.props.item.id}
            itemDescription={this.props.item.description}
          />
          <button
            className="btn"
            onClick={() => {
              this.props.dispatch({
                type: "GET_PHOTOS_EXPERIENCES",
                payload: {
                  experienceID: this.props.item.id,
                  userID: this.props.store.user.id,
                },
              });
            }}
          >
            Submit
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(connect(mapStoreToProps)(BucketComplete));
