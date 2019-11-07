import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { setAuthedUser } from "../actions/authedUser";

class User extends Component {
  handleClick = () => {
    const { user } = this.props;
    this.props.setAuthedUser(user.id);
  };

  render() {
    const { user, authedUser } = this.props;

    if (user === null) {
      return <p>This User doesn't existd</p>;
    }

    const { name, avatarURL } = user;
    return (
      <button className="userCard" onClick={this.handleClick}>
        <img src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />

        <div className="user-info">
          <div>
            <span>{name}</span>
          </div>
          {user.id === authedUser ? <CheckBoxIcon /> : null}
        </div>
      </button>
    );
  }
}

function mapStateToProps({ authedUser, users }, { id }) {
  const user = users[id];

  return {
    authedUser,
    user
  };
}

const mapDispatchToProps = {
  setAuthedUser
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(User)
);
