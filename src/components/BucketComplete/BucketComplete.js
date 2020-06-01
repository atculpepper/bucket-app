import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
// import BucketItemEdit from "BucketItemEdit";
import ImageUpload from "../ImageUpload/ImageUpload";
import BucketLogo from "../../assets/Bucket.png";
import ImageView from "../ImageView/ImageView";
import {
  Card,
  CardContent,
  CardHeader,
  withStyles,
  createStyles,
  IconButton,
} from "@material-ui/core";
// import classes from "*.module.css";

const imageStyle = {
  width: "100%",
  overflow: "hidden",
};

const customStyles = (theme) =>
  createStyles({
    root: {
      textAlign: "left",
    },
    paper_class: {
      maxWidth: "90%",
      backgroundColor: "#fff",
      padding: "3%",
      margin: "3%",
    },
    btn: {
      backgroundColor: "#cf6a87",
      color: "#fff",
      margin: "5%",
      fontFamily: "Quicksand",
      "&:hover": {
        background: "#e66767",
      },
    },
    card: {
      backgroundColor: "#786fa6",
      height: "300px",
      width: "600px",
      textAlign: "center",
      margin: "30px",
    },
    carousel: {
      margin: "8.4%",
    },
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    font: {
      fontFamily: "Quicksand",
      color: "white",
    },
    icon_btn: {
      color: "white",
      margin: "10px",
    },
    center: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  });

class BucketComplete extends Component {
  componentDidMount() {
    // this.state = {
    //   experienceID: "",
    // };
    // load up all information from the server
    this.props.dispatch({
      type: "GET_LIST_ITEMS",
      //passing the id as a payload because the query on server side is set up to receive an id
      payload: this.props.store.user.id,
    });
    this.props.dispatch({
      type: "GET_PHOTOS_EXPERIENCES",
      payload: {
        experienceID: this.props.item.id,
        userID: this.props.store.user.id,
      },
    });
  }

  render() {
    const { item } = this.props;

    let Completed = item.completed;
    // if item.photo_id === !null
    if (Completed) {
      return (
        <div className="BucketListElement">
          <div>
            <ul className="listItem">
              <span>
                <li>{item.description}</li>
                {/* <li>{item.id}</li> */}
              </span>
            </ul>
            <div>
              {this.props.store.getPhotosExperiences.map(
                (photoExperience, index) => (
                  <ImageView
                    item={item}
                    key={index}
                    photoExperience={photoExperience}
                  />
                )
              )}
            </div>
          </div>
          <div>
            <ImageUpload />
          </div>
          <button
            className="btn"
            onClick={() => {
              this.props.dispatch({
                type: "GET_PHOTOS_EXPERIENCES",
                payload: {
                  experienceID: this.props.item.id,
                  userID: this.props.store.user.id,
                },
              });
              console.log(this.props.item.id, this.props.store.user.id);
            }}
          >
            Submit
          </button>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(connect(mapStoreToProps)(BucketComplete));
