import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";

class BucketItemEdit extends Component {
  state = {
    description: "",
    editModeEnabled: false,
  };

  handleEditClick() {
    this.setState({ editModeEnabled: !this.state.editModeEnabled });
  }

  render() {
    const { item } = this.props;
    return (
      <div className="BucketListElement">
        <div>
          <button className="btn" onClick={this.handleEditClick.bind(this)}>
            Edit
          </button>
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
