import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { handleSaveQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: 400
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 380
  },
  options: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function NewQuestion({ createNewQuestion }) {
  const classes = useStyles();
  const [option1, setOption1] = React.useState("");
  const [option2, setOption2] = React.useState("");
  const [toHome, setToHome] = React.useState(false);

  function handleSubmit() {
    createNewQuestion({
      optionOneText: option1,
      optionTwoText: option2
    });
    setToHome(true);
  }

  if (toHome === true) {
    return <Redirect to="/" />;
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Would you rather ...
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <div className={classes.options}>
          <TextField
            id="option1"
            label="Option 1"
            className={classes.textField}
            margin="normal"
            value={option1}
            onChange={evt => setOption1(evt.target.value)}
          />
          <TextField
            id="option2"
            label="Option 2"
            className={classes.textField}
            margin="normal"
            value={option2}
            onChange={evt => setOption2(evt.target.value)}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    createNewQuestion: (question, evt) => {
      console.log("handle save", this.option1);
      dispatch(handleSaveQuestion(question));
    }
  };
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(NewQuestion);
