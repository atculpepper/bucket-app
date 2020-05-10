import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../../LogOutButton/LogOutButton";
import mapStoreToProps from "../../../redux/mapStoreToProps";
// import { getList } from "../../redux/actions/getListaction";
import BucketItem from "../../BucketItem/BucketItem";

class UserPage extends Component {
  //for POSTING a bucketItem
  //might need to update local state to include experience id ...
  state = {
    bucketItem: "",
    // userID: this.props.store.user.id,
  };

  //this method runs when component is mounted to the App
  componentDidMount() {
    console.log("the component did mount");
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
  }

  //TODO: write a handleChangeFor function that updates local state
  handleInputChangeFor = (bucketItem) => (event) => {
    this.setState({
      [bucketItem]: event.target.value,
    });
    console.log(event.target.value);
  };

  //event listener for DELETE that captures experienceID ("id")
  // captureID = (item) => {
  //   console.log(item.target);
  //   console.log(this.props.store.getList);
  //   console.log(this.props);
  // };

  //TODO: add styling
  //TODO: add DELETE route and trash icon

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
              <BucketItem key={index} item={item} className="listItem" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
