import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class UserPage extends Component {
  state = {
    bucketItem: "",
  };

  //write a componentDidMount that GETS the list data

  render() {
    return (
      <div>
        <h1 id="welcome">{this.props.store.user.username}'s Bucket List</h1>
        <p>Your ID is: {this.props.store.user.id}</p>

        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

// const UserPage = (props) => (
//   <div>
//     <h1 id="welcome">{props.store.user.username}'s Bucket List</h1>
//     <p>Your ID is: {props.store.user.id}</p>

//     <LogOutButton className="log-in" />
//   </div>
// )}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
