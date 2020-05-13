import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import BucketItem from "../BucketItem/BucketItem";
// import BucketItemEdit from "BucketItemEdit";

class BucketForm extends Component {
  state = {
    bucketItem: "",
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

  render() {
    return (
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
    );
  }
}

export default withRouter(connect(mapStoreToProps)(BucketForm));
