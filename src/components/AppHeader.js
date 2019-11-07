import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./style";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function AppHeader({ user }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Udacity Would You Rather
          </Typography>
          <img
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
            className="avatar"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppHeader.defaultProps = {
  user: {
    avatarURL: "",
    name: ""
  }
};

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user
  };
}

export default connect(mapStateToProps)(AppHeader);
