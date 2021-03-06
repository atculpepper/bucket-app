import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import BucketItemEdit from "BucketItemEdit";
import "./BucketItem.css";

class BucketItem extends Component {
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
    bucketItem: "",
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
    console.log(this.state.editModeEnabled);
  }

  handleInputChangeFor = (bucketItem) => (event) => {
    this.setState({
      [bucketItem]: event.target.value,
    });
    console.log(event.target.value);
  };

  //currently updateComplete requires two clicks to change the boolean value from false to true. Why?
  updateComplete(prevState) {
    this.setState({
      isComplete: !prevState.isComplete,
      // isComplete: false,
    });
    let newState = { ...this.state };
    this.props.dispatch({
      type: "UPDATE_COMPLETE",
      payload: {
        completeValue: newState.isComplete,
        experienceID: this.props.item.id,
        userID: this.props.store.user.id,
      },
    });
  }

  //TODO: write clickEdit function to conditionally render an input form

  render() {
    const { item } = this.props;

    let Completed = item.completed;
    let allowEdit = this.state.editModeEnabled;
    if (Completed) {
      return <div></div>;
    } else if (allowEdit) {
      return (
        <div className="BucketListElement">
          <div>
            <button className="btn" onClick={this.deleteBucketItem}>
              Delete
            </button>
            <button className="btn" onClick={this.handleEditClick.bind(this)}>
              Reset
            </button>
            <button className="btn" onClick={this.updateComplete.bind(this)}>
              Did it!
            </button>
            <ul>
              <li disabled={!this.state.editModeEnabled} className="listItem">
                {/* {item.description} */}
                <form
                  onSubmit={(event) => {
                    this.props.dispatch({
                      type: "EDIT_ITEM",
                      payload: {
                        experienceID: this.props.item.id,
                        userID: this.props.store.user.id,
                        newDescription: this.state.bucketItem,
                      },
                    });
                    this.updateComplete.bind(this);
                  }}
                >
                  <input
                    type="text"
                    // value={item.description}
                    placeholder="Change up your bucket item...hit return to submit your changes!"
                    disabled={!this.state.editModeEnabled}
                    size="75"
                    onChange={this.handleInputChangeFor("bucketItem")}
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="BucketListElement">
          <div>
            <button className="btn" onClick={this.deleteBucketItem}>
              Delete
            </button>
            <button className="btn" onClick={this.handleEditClick.bind(this)}>
              Edit
            </button>
            <button className="btn" onClick={this.updateComplete.bind(this)}>
              Did it!
            </button>
            <ul className="listItem">
              <li disabled={!this.state.editModeEnabled}>{item.description}</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(connect(mapStoreToProps)(BucketItem));
