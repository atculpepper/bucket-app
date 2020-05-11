import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../../LogOutButton/LogOutButton";
import mapStoreToProps from "../../../redux/mapStoreToProps";
// import { getList } from "../../redux/actions/getListaction";
// import BucketItem from "../../BucketItem/BucketItem";
import BucketForm from "../../BucketForm/BucketForm";

class UserPage extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="welcomeDIV">
            <h1>{this.props.store.user.username}'s Bucket List</h1>
            {/* <p>Your ID is: {this.props.store.user.id}</p> */}

            <LogOutButton className="log-in" />
          </div>
          <BucketForm />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
