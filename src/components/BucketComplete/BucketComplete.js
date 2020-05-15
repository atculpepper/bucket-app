import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import BucketItemEdit from "BucketItemEdit";
import BucketIcon from "../../assets/Bucket.png";
import ImageUpload from "../ImageUpload/ImageUpload";

class BucketComplete extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
  }

  state = {
    isComplete: false,
    editModeEnabled: false,
  };

  //TODO: write updateComplete function to dispatch UPDATE_COMPLETE to update boolean value from false to true
  //   updateComplete = (event) => {}

  render() {
    const { item } = this.props;

    let Completed = item.completed;
    // if item.photo_id === !null
    if (Completed) {
      return (
        <div className="BucketListElement">
          <div>
            <ul>
              <li className="listItem" style={{ textAlign: "center" }}>
                {item.description}
              </li>
              <button className="btn">Add Photo</button>
            </ul>
            <ImageUpload />
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(connect(mapStoreToProps)(BucketComplete));
