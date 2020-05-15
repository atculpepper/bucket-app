import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import BucketItemEdit from "BucketItemEdit";
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

  render() {
    const { item } = this.props;
    const { index } = this.props;

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
              <li img src={this.photo_id} />
            </ul>
          </div>
          <ImageUpload
            experienceID={this.props.item.id}
            itemDescription={this.props.item.description}
          />
          <button
            className="btn"
            onClick={() => {
              //   this.props.dispatch({
              //     type: "ADD_ITEM",
              //     payload: {
              //       bucketItem: this.state.bucketItem,
              //       userID: this.props.store.user.id,
              //     },
              //   });
              console.log(this.props.item.id);
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
