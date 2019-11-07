import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

function Question({ id, author, question }) {
  const classes = useStyles();

  return (
    <NavLink to={`/questions/${id}`}>
      <Card className={classes.questionCard}>
        <CardContent>
          <Typography
            className={classes.questionTitle}
            color="textSecondary"
            gutterBottom
          >
            Question by {author.name}
          </Typography>
          <Typography variant="h5" component="h2">
            Would you rather -
          </Typography>
          <Typography variant="body2" component="p">
            {question.optionOne.text}?
          </Typography>
          <Typography color="textSecondary">OR</Typography>
          <Typography variant="body2" component="p">
            {question.optionTwo.text}?
          </Typography>
        </CardContent>
      </Card>
    </NavLink>
  );
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const author = users[question.author];

  return {
    author,
    question
  };
}

export default connect(mapStateToProps)(Question);
