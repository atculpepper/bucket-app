import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class BucketItem extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
  }

  state = {
    heading: "Class Component",
  };

  deleteBucketItem = (event) => {
    console.log(this.props.item.id);
    this.props.dispatch({
      type: "DELETE_ITEM",
      payload: {
        experienceID: this.props.item.id,
        userID: this.props.store.user.id,
      },
    });
    // this.props.dispatch({
    //   type: "GET_LIST_ITEMS",
    //   payload: this.props.store.user.id,
    // });
  };

  render() {
    const { item } = this.props;
    return (
      <div className="BucketListElement">
        <div>
          <button className="btn" onClick={this.deleteBucketItem}>
            Delete
          </button>
          <button className="btn">Edit</button>
          <button className="btn">Did it!</button>
          <ul>
            <li className="listItem">{item.description}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(BucketItem));
