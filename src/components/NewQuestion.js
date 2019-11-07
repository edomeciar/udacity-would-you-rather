import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { handleSaveQuestion } from "../actions/questions";
import { Redirect } from "react-router-dom";
import { useStyles } from "./style";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function NewQuestion({ createNewQuestion, authedUser }) {
  const classes = useStyles();
  const [option1, setOption1] = React.useState("");
  const [option2, setOption2] = React.useState("");
  const [toHome, setToHome] = React.useState(false);

  function handleSubmit() {
    createNewQuestion(
      {
        optionOneText: option1,
        optionTwoText: option2
      },
      authedUser
    );
    setToHome(true);
  }

  if (toHome === true) {
    return <Redirect to="/" />;
  }

  return (
    <Paper className={classes.questionPaper}>
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
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Paper>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    createNewQuestion: (question, authedUser, evt) => {
      dispatch(handleSaveQuestion(question, authedUser));
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
