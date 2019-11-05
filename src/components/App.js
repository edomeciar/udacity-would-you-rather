import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import AppHeader from "./AppHeader";
import { handleInitialData } from "../actions/shared";
import Users from "./Users";
import Home from "./Home";
import NewQuestion from "./NewQuestion";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    
    return (
      <div className={classes.root}>
        <Router>
          <Fragment>
            <LoadingBar />
            <div>
              <AppHeader />
              <Nav />
              {this.props.loading === true ? null : (
                <main className={classes.content}>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/newQuestion" component={NewQuestion} />
                  </Switch>
                </main>
              )}
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    fontFamily: "AttAleckSans, Helvetica Neue, Helvetica, Arial, sans-serif"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: theme.spacing(8)
  },
  toolbar: {
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

const classes = useStyles();
