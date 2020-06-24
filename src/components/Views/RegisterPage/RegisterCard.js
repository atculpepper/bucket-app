import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../../redux/mapStoreToProps";
import { Card, CardContent, CardMedia, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import RegisterPage from "/RegisterPage";

const useStyles = makeStyles({
  box: {
    width: 600,
    marginTop: 80,
  },
  card: {
    width: 600,
    textAlign: "center",
  },
  media: {
    height: 140,
  },
  button: {
    paddingTop: 10,
  },
});

function RegisterCard() {
  const classes = useStyles();
  return (
    <Box>
      <Card>
        <CardContent>
          <div>
            <RegisterPage />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default connect(mapStoreToProps)(RegisterCard);
