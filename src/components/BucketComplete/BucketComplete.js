import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import BucketItemEdit from "BucketItemEdit";
import ImageUpload from "../ImageUpload/ImageUpload";
import ImageView from "../ImageView/ImageView";

// import classes from "*.module.css";

const imageStyle = {
  width: "100%",
  overflow: "hidden",
};

const containerStyle = {
  display: "flex;",
  "flex-flow": "row wrap;",
  "margin-left": "-8px;",
  padding: "20px",
  height: "100%",
};

class BucketComplete extends Component {
  componentDidMount() {
    // this.state = {
    //   experienceID: "",
    // };
    // load up all information from the server
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
    this.props.dispatch({
      type: "GET_PHOTOS_EXPERIENCES",
      payload: {
        experienceID: this.props.item.id,
        userID: this.props.store.user.id,
      },
    });
  }

  render() {
    const { item } = this.props;

    let Completed = item.completed;
    // if item.photo_id === !null
    if (Completed) {
      return (
        <div className="card-container">
          <div className="card-mb-3">
            <div className="row no-gutters">
              <ul>
                <span>
                  <li className="card-title">{item.description}</li>
                  {/* <li>{item.id}</li> */}
                </span>
              </ul>
              <div>
                {this.props.store.getPhotosExperiences.map(
                  (photoExperience, index) => (
                    <ImageView
                      item={item}
                      key={index}
                      photoExperience={photoExperience}
                      className="card"
                    />
                  )
                )}
              </div>
            </div>
            <div>
              <ImageUpload />
            </div>
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
                console.log(this.props.item.id, this.props.store.user.id);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(connect(mapStoreToProps)(BucketComplete));
