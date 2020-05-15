import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import ImageUpload from "../ImageUpload/ImageUpload";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";

class ImageUploadModal extends Component {
  state = {
    btnOn: false,
    imgUrl: null,
  };

  onSuccessfulLoad = () => {
    this.setState({
      btnOn: true,
    });
  };

  onImageCallback = (imgUrl) => {
    this.setState(
      {
        imgUrl,
      },
      () => {
        this.onSuccessfulLoad();
      }
    );
  };

  submitImage = (event) => {
    this.props.dispatch({
      type: "POST_PHOTO",
      payload: {
        user: this.props.user.id,
        team: this.props.user.team,
        image_url: this.state.imgUrl,
        challenge_id: this.props.challenge.id,
      },
    });

    this.props.closeModal();
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.toggleModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>Upload image</h2>
            {/* {this.props.challenge && <p>{this.props.challenge.description}</p>} */}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImageUpload onImageCallback={this.onImageCallback} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            disabled={!this.state.btnEnabled}
            onClick={this.submitImage}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default connect(mapStoreToProps)(ImageUploadModal);
