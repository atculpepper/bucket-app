import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      payload: this.props.match.params.id,
    });
  }

  state = {
    bucketItem: "",
  };

  //TODO: write a componentDidMount that GETS the list data

  //TODO: write a handleChangeFor function that updates local state

  //TODO: write an onClick function for Add to List button that dispatches "ADD_LIST_ITEM" to the server

  //TODO: add styling

  render() {
    return (
      <div>
        <div>
          <h1 id="welcome">{this.props.store.user.username}'s Bucket List</h1>
          {/* <p>Your ID is: {this.props.store.user.id}</p> */}

          <LogOutButton className="log-in" />
        </div>

        <div>
          <form className="formPanel" onSubmit={this.addListItem}>
            <h1>Add an experience!</h1>
            <div>
              <label htmlFor="username">
                Bucket Item:
                <input
                  type="text"
                  name="bucket list item..."
                  value={this.state.bucketItem}
                  // TODO: onChange={this.handleInputChangeFor("bucketItem")}
                />
              </label>
            </div>
          </form>

          <center>
            <button
              type="button"
              className="link-button"
              onClick={() => {
                // this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
              }}
            >
              Add to List
            </button>
          </center>
        </div>
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
