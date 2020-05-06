import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class ExplorePage extends Component {
  render() {
    return (
      <div>
        <div>
          {/* <h1 id="welcome">{this.props.store.user.username}'s Bucket List</h1> */}
          <p>EXPLORE THIS BUCKET EXPERIENCE!</p>

          <LogOutButton className="log-in" />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ExplorePage);
