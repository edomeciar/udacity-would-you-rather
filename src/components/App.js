import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import AppHeader from "./AppHeader";
import { handleInitialData } from "../actions/shared";
import Users from "./Users";
import Dashboard from "./Dashboard";
import NewQuestion from "./NewQuestion";
import LeaderBoard from "./LeaderBoard";
import QuestionPage from "./QuestionPage";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="root">
        <Router>
          <Fragment>
            <AppHeader />
            <LoadingBar />
            <main className="content">
              <Nav />

              {this.props.loading === true ? (
                <div>Loading</div>
              ) : (
                <div>
                  <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/users" component={Users} />
                    <Route path="/add" component={NewQuestion} />
                    <Route path="/leaderboard" component={LeaderBoard} />
                    <Route path="/questions/:id" component={QuestionPage} />
                  </Switch>
                </div>
              )}
            </main>
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null ? true : false
  };
}

export default connect(mapStateToProps)(App);
