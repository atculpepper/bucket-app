import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../../LogOutButton/LogOutButton";
import mapStoreToProps from "../../../redux/mapStoreToProps";

class ExplorePage extends Component {
  render() {
    return (
      <div className="welcomeDIV">
        <div>
          <h1>EXPLORE THIS BUCKET EXPERIENCE!</h1>

          <LogOutButton className="log-in" />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ExplorePage);
