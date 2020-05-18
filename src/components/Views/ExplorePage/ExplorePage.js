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
        <p>
          Coming soon: this feature will enable users to click "Explore This"
          button on their Bucket List and be brought to a page with filtered
          local options related to their Bucket List task.
        </p>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(ExplorePage);
