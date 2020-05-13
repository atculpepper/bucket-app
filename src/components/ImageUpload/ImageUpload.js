import React, { Component } from "react";
import { connect } from "react-redux";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";
import { withRouter } from "react-router-dom";
import mapStoreToProps from "../../redux/mapStoreToProps";

class ImageUpload extends Component {
  handleFinishedUpload = (info) => {
    console.log("this is the info:", info);
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
    this.props.dispatch({
      type: "POST_IMAGE_URL",
      payload: {
        userID: this.props.store.user.id,
        imgURL: info.fileUrl,
      },
    });
  };

  render() {
    const uploadOptions = {
      server: "http://localhost:5000",
      signingUrlQueryParams: { uploadType: "avatar" },
    };
    const s3Url = "https://annesbucket.s3.amazonaws.com";

    return (
      <div>
        <p>Click or drag image to upload</p>
        <DropzoneS3Uploader
          onFinish={this.handleFinishedUpload}
          s3Url={s3Url}
          maxSize={1024 * 1024 * 5}
          upload={uploadOptions}
        />
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(ImageUpload));
