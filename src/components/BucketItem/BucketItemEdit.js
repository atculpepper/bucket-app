import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class BucketItemEdit extends Component {
  state = {
    completed: "false",
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

  handleEditClick() {
    this.setState({ editModeEnabled: !this.state.editModeEnabled });
  }

  //TODO: write updateComplete function to dispatch UPDATE_COMPLETE to update boolean value from false to true
  //   updateComplete = (event) => {}

  render() {
    const { item } = this.props;
    return (
      <div className="BucketListElement">
        <div>
          <button className="btn" onClick={this.deleteBucketItem}>
            Delete
          </button>
          <button className="btn" onClick={this.handleEditClick.bind(this)}>
            Edit
          </button>
          <button className="btn">Did it!</button>
          <ul>
            <li className="listItem">
              <input
                type="text"
                value={item.description}
                // disabled={!this.state.editModeEnabled}
              ></input>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(BucketItemEdit));
