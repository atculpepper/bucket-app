import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../LogOutButton/LogOutButton";
import mapStoreToProps from "../../redux/mapStoreToProps";

class UserPage extends Component {
  componentDidMount() {
    console.log("the component did mount");
    // console.log(this.props.match.params.id);
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
  }

  //for POSTING a bucketItem
  state = {
    bucketItem: "",
    // userID: this.props.store.user.id,
  };

  //TODO: write a handleChangeFor function that updates local state
  handleInputChangeFor = (bucketItem) => (event) => {
    this.setState({
      [bucketItem]: event.target.value,
    });
    console.log(event.target.value);
  };

  //TODO: add styling

  render() {
    return (
      <div>
        <div className="welcomeDIV">
          <h1>{this.props.store.user.username}'s Bucket List</h1>
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
                  onChange={this.handleInputChangeFor("bucketItem")}
                />
              </label>
            </div>
          </form>

          <center>
            <button
              type="button"
              className="link-button"
              onClick={() => {
                this.props.dispatch({
                  type: "ADD_ITEM",
                  //currently, sending this payload is giving us an empty array
                  payload: {
                    bucketItem: this.state.bucketItem,
                    userID: this.props.store.user.id,
                  },
                });
              }}
            >
              Add to List
            </button>
          </center>
          <div>
            {this.props.store.getList.map((item, index) => (
              <div key={index} className="listItem">
                <div>
                  <ul>
                    <li className="listItem">{item.description}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div>
          <p>{this.props.store.getList.description}</p>
          <p>{this.props.store.getList.description}</p>
        </div> */}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
