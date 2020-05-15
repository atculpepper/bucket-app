import React, { Component } from "react";
import { connect } from "react-redux";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import { withRouter } from "react-router-dom";
import mapStoreToProps from "../../redux/mapStoreToProps";

const dropStyles = {
  width: "100px",
  height: "70px",
  border: "1px solid black",
  "background-color": "light grey",
  "text-align": "center",
  "border-radius": "4px",
  color: "black",
  padding: "10px",
  cursor: "pointer",
  "margin-top": "40px",
  float: "none",
  display: "block",
};

class ImageUpload extends Component {
  state = {
    imgUrl: null,
    loading: false,
  };

  handleFinishedUpload = (info) => {
    console.log("this is the info:", info);
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
    console.log(this.props.store.getList.id);

    this.setState({
      imgURL: null,
      loading: false,
    });

    this.props.dispatch({
      type: "POST_IMAGE_URL",
      payload: {
        userID: this.props.store.user.id,
        imgURL: info.fileUrl,
        experienceID: this.props.store.getList.id,
      },
    });
  };

  render() {
    const uploadOptions = {
      server: "http://localhost:5000",
      signingUrlQueryParams: { uploadType: "avatar" },
    };
    const s3Url = "https://annesbucket.s3.amazonaws.com";

    const innerDrop = (
      <div>
        <p>Upload a photo!</p>
      </div>
    );

    return (
      <div>
        {!this.state.imgURL ? (
          <div>
            <DropzoneS3Uploader
              children={innerDrop}
              onFinish={this.handleFinishedUpload}
              s3Url={s3Url}
              maxSize={1024 * 1024 * 5}
              upload={uploadOptions}
              style={dropStyles}
            />
          </div>
        ) : (
          <div style={{ width: "250px", margin: "0 auto" }}>
            <img
              src={this.state.imgURL}
              style={{ width: "250px" }}
              alt="Uploaded"
            />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(ImageUpload));
