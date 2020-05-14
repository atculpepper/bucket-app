import React, { Component } from "react";

import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import BucketItem from "../../BucketItem/BucketItem";

class ThingsIveDonePage extends Component {
  componentDidMount() {
    console.log("ThingsIveDone did mount");
    // load up all information from the server
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
  }

  render() {
    return (
      <div>
        <div className="WelcomeDIV">
          <h1>Things {this.props.store.user.username} Has Accomplished</h1>
        </div>
        <div>
          {this.props.store.getList.map((item, index) => (
            <BucketItem key={index} item={item} className="listItem" />
          ))}
        </div>
        <div>
          <ul>
            <li>I'd love a list here with its own conditional rendering</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ThingsIveDonePage);
