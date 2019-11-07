import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardMedia from "@material-ui/core/CardMedia";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Paper from "@material-ui/core/Paper";
import { handleSaveQuestionAnswer } from "../actions/questions";

function QuestionAswer({ user, question }) {
  const classes = useStyles();
  const answer = user.answers[question.id];
  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const optionOne = {
    votes: question.optionOne.votes.length,
    percent: `${(question.optionOne.votes.length / totalVotes).toFixed(2) *
      100}%`
  };
  const optionTwo = {
    votes: question.optionTwo.votes.length,
    percent: `${(question.optionTwo.votes.length / totalVotes).toFixed(2) *
      100}%`
  };
  return (
    <Box>
      <Typography variant="h6" component="h2">
        Would you rather -
      </Typography>
      <Paper
        className={
          answer === "optionOne" ? classes.answered : classes.unanswered
        }
      >
        {answer === "optionOne" && <CheckBoxIcon />}
        <Typography gutterBottom variant="h6" component="h2">
          {question.optionOne.text}
        </Typography>
        <Typography color="textSecondary">Stats</Typography>
        <Typography variant="body2" component="p">
          {`# of Votes ${optionOne.votes} / ${optionOne.percent}`}
        </Typography>
      </Paper>
      <Paper
        className={
          answer === "optionTwo" ? classes.answered : classes.unanswered
        }
      >
        {answer === "optionTwo" && <CheckBoxIcon />}
        <Typography gutterBottom variant="h6" component="h2">
          {question.optionTwo.text}
        </Typography>
        <Typography color="textSecondary">Stats</Typography>
        <Typography variant="body2" component="p">
          {`# of Votes ${optionTwo.votes} / ${optionTwo.percent}`}
        </Typography>
      </Paper>
    </Box>
  );
}

function QuestionPoll({ question, handleSubmitAnswer }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = event => {
    setValue(event.target.value);
    handleSubmitAnswer(event.target.value);
  };

  return (
    <Box>
      <Typography gutterBottom variant="h5" component="h2">
        Your Unanswer
      </Typography>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Question Poll</FormLabel>
        <RadioGroup
          aria-label="questionPoll"
          name="questionPoll"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="optionOne"
            control={<Radio />}
            label={`${question.optionOne.text}`}
          />
          <FormControlLabel
            value="optionTwo"
            control={<Radio />}
            label={`${question.optionTwo.text}`}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

function QuestionPage({
  id,
  user,
  question,
  questionAuthor,
  createNewQuestion
}) {
  function handleSubmitAnswer(answerValue) {
    createNewQuestion(id, user.id, answerValue);
  }
  console.log("render Question Page", user);
  const classes = useStyles();

  if (question === undefined) return <div>Not found</div>;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.headerBox}>
          <CardMedia
            className={classes.media}
            image={questionAuthor.avatarURL}
            title="User Avatar"
          />
          <Box>
            <Typography gutterBottom variant="h6" component="h3">
              Question by
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {questionAuthor.name}
            </Typography>
          </Box>
        </Box>
        {user.answers.hasOwnProperty(id) ? (
          <QuestionAswer user={user} question={question} />
        ) : (
          <QuestionPoll
            question={question}
            handleSubmitAnswer={handleSubmitAnswer}
          />
        )}
      </CardContent>
    </Card>
  );
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  console.log("mstp", authedUser, users, questions);
  return {
    id,
    user: users[authedUser],
    question: questions[id],
    questionAuthor: questions[id] && users[questions[id].author]
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    createNewQuestion: (id, authedUser, answer) => {
      dispatch(handleSaveQuestionAnswer(id, authedUser, answer));
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(QuestionPage);
