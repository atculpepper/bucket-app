import React from "react";
import { connect } from "react-redux";
import DropzoneS3Uploader from "react-s3-uploader";

function ImageUpload() {
  const handleFinishedUpload = (info) => {
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
  };

  // render() {
  const uploadOptions = {
    server: "http://localhost:5000",
    signingUrlQueryParams: { uploadType: "avatar" },
  };
  //   };

  var AWS = require("aws-sdk");
  AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack);
    //credentials not loaded
    else {
      console.log("Access key:", AWS.config.credentials.accessKeyId);
      console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
    }
  });

  const s3Url = "https://annesbucket.s3.amazonaws.com";
  return (
    <DropzoneS3Uploader
      onFinish={handleFinishedUpload}
      s3Url={s3Url}
      maxSize={1024 * 1024 * 5}
      upload={uploadOptions}
    />
  );
}

export default connect()(ImageUpload);
