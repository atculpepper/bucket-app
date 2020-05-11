import React, { Component } from "react";

import { connect } from "react-redux";
import LogOutButton from "../../LogOutButton/LogOutButton";
import mapStoreToProps from "../../../redux/mapStoreToProps";

class InfoPage extends Component {
  state = {
    bucketItem: "",
  };

  //this method runs when component is mounted to the App
  componentDidMount() {
    console.log("the component did mount");
    // this.props.dispatch({
    //   type: "GET_USER_DETAILS",
    //   payload: this.props.store.user.id,
    // });
  }

  //TODO: write a handleChangeFor function that updates local state
  // handleInputChangeFor = (bucketItem) => (event) => {
  //   this.setState({
  //     [bucketItem]: event.target.value,
  //   });
  //   console.log(event.target.value);
  // };

  render() {
    return (
      <div>
        <div className="welcomeDIV">
          <h1>Username : {this.props.store.user.username}</h1>
          <p>ID: {this.props.store.user.id}</p>

          <LogOutButton className="log-in" />
        </div>

        <div>
          <form className="formPanel" onSubmit={this.addListItem}>
            <div>
              <label htmlFor="username">
                Favorite Quote:
                <input
                  type="text"
                  name="favorite quote..."
                  // value={this.state.bucketItem}
                  // onChange={this.handleInputChangeFor("favoriteQuote")}
                />
              </label>
              <button className="btn">Submit</button>

              <br></br>
              <label htmlFor="username">
                Profile Image:
                <input
                  type="text"
                  name="profile image..."
                  // value={this.state.bucketItem}
                  // onChange={this.handleInputChangeFor("profileImage")}
                />
              </label>
              <button className="btn">Submit</button>
              <br></br>
              <label htmlFor="username">
                Location:
                <input
                  type="text"
                  name="favorite quote..."
                  // value={this.state.bucketItem}
                  // onChange={this.handleInputChangeFor("location")}
                />
              </label>
              <button className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(InfoPage);
