import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import { Card, CardContent, CardMedia, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// const classes = useStyles();

class RegisterPage extends Component {
  state = {
    username: "",
    password: "",
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "REGISTER",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "REGISTRATION_INPUT_ERROR" });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Box>
        <div>
          {this.props.errors.registrationMessage && (
            <h2 className="alert" role="alert">
              {this.props.errors.registrationMessage}
            </h2>
          )}
          <form className="formPanel" onSubmit={this.registerUser}>
            <h1>Register User</h1>
            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor("username")}
                />
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor("password")}
                />
              </label>
            </div>
            <div>
              <input
                className="register"
                type="submit"
                name="submit"
                value="Register"
              />
            </div>
          </form>
          <center>
            <button
              type="button"
              className="link-button"
              onClick={() => {
                this.props.dispatch({ type: "SET_TO_LOGIN_MODE" });
              }}
            >
              Login
            </button>
          </center>
        </div>
      </Box>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
