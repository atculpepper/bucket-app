import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import BucketItemEdit from "BucketItemEdit";
// import BucketMap from "../BucketMap/BucketMap";

class BucketItem extends Component {
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

    return (
      <ul>
        <li className="listItem">{item.description}</li>
      </ul>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(BucketItem));
