import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import BucketItemEdit from "BucketItemEdit";
import BucketMap from "../BucketMap/BucketMap";
import BucketItem from "../BucketItem/BucketItem";

class BucketItemNotDone extends Component {
  componentDidMount() {
    // load up all information from the server
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
  }

  state = {
    isComplete: false,
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

  updateComplete(prevState) {
    this.setState({
      isComplete: !prevState.isComplete,
    });
    let newState = { ...this.state };
    console.log(this.state);
    console.log(this.state.isComplete);
    this.props.dispatch({
      type: "UPDATE_COMPLETE",
      payload: {
        completeValue: newState.isComplete,
        experienceID: this.props.item.id,
        userID: this.props.store.user.id,
      },
    });
  }

  //TODO: write updateComplete function to dispatch UPDATE_COMPLETE to update boolean value from false to true
  //   updateComplete = (event) => {}

  render() {
    // const { item } = item.props;

    // let Completed = item.completed;
    // if (Completed) {
    //   return <div></div>;
    // } else {
    return (
      <div>
        <BucketItem />

        <div>
          <div className="BucketListElement">
            <button className="btn" onClick={this.deleteBucketItem}>
              Delete
            </button>
            <button className="btn" onClick={this.handleEditClick.bind(this)}>
              Edit
            </button>
            <button
              className="btn"
              onClick={this.updateComplete.bind(this)}
              defaultChecked={this.state.isComplete}
            >
              Did it!
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(BucketItemNotDone));
