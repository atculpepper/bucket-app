import React, { Component } from "react";

import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";

class ThingsIveDonePage extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
  }

  state = {
    isComplete: "false",
    editModeEnabled: false,
  };

  deleteBucketItem = (event) => {
    console.log(this.props.item.id);
    this.props.dispatch({
      type: "DELETE_ITEM",
      payload: {
        experienceID: this.props.item.id,
        userID: this.props.store.user.id,
      },
    });
  };

  updateComplete = (event) => {
    console.log(this.props.thingsIveDone.completed);
  };

  handleEditClick() {
    this.setState({ editModeEnabled: !this.state.editModeEnabled });
  }

  render() {
    // let thingsIveDone = this.props.store.getList.map((item, index) => (
    //   <BucketItem key={index} item={item} className="listItem" />

    let thingsIveDone = this.props.store.getList.map((item, index) => {
      console.log(item, index);
    });
    // const { item } = this.props;
    let Completed = thingsIveDone.completed;
    if (Completed) {
      return (
        <div>
          <div>
            <p>Things {this.props.store.user.username} Has Accomplished</p>
          </div>
          <div className="BucketListElement">
            <div>
              <button className="btn" onClick={this.deleteBucketItem}>
                Delete
              </button>
              <button className="btn" onClick={this.handleEditClick.bind(this)}>
                Edit
              </button>
              <button className="btn" onClick={this.updateComplete}>
                Did it!
              </button>
              <ul>
                <li className="listItem">
                  {thingsIveDone.description}
                  <input
                    type="text"
                    value={thingsIveDone.description}
                    disabled={!this.state.editModeEnabled}
                  ></input>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default connect(mapStoreToProps)(ThingsIveDonePage);
