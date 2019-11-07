import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <div>
        <List>
          {this.props.usersIds.map(userId => {
            return (
              <ListItem key={userId}>
                <User id={userId} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    usersIds: Object.keys(users).sort(
      (a, b) => users[b].timestamp - users[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(Users);
