import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import BucketItem from "../BucketItem/BucketItem";

class BucketMap extends Component {
  state = {
    heading: "Class Component",
  };

  render() {
    return (
      <div>
        {this.props.store.getList.map((item, index) => (
          <BucketItem key={index} item={item} className="listItem" />
        ))}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(BucketMap);
