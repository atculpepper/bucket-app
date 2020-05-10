import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../../LogOutButton/LogOutButton";
import mapStoreToProps from "../../../redux/mapStoreToProps";

class ThingsIveDonePage extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <h1 id="welcome">{this.props.store.user.username}'s Bucket List</h1> */}
          <p>Things {this.props.store.user.username} Has Accomplished</p>

          <LogOutButton className="log-in" />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ThingsIveDonePage);
