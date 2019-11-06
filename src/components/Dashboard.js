import React, {Fragment} from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { connect } from "react-redux";
import Questions from "./Questions";

function Dashboard({ answeredQuestionsIds, unansweredQuestionsIds, questions }) {
  const [state, setState] = React.useState({
    answered: false,
    unanswered: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Switch
            checked={state.answered}
            onChange={handleChange("answered")}
            value="answered"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        }
        label="Answered"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.unanswered}
            onChange={handleChange("unanswered")}
            value="unanswered"
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label="Unanswered"
      />
      {state.answered === true && (
        <Fragment>
        <h3>Answered</h3>
        <Questions questionIds={answeredQuestionsIds} questions={questions} />
        </Fragment>
      )}
      {state.unanswered === true && (
        <Fragment>
        <h3>Unanswered</h3>
        <Questions questionIds={unansweredQuestionsIds} questions={questions}/>
        </Fragment>
      )}
    </div>
  );
}

function mapPropsToState({ authedUser, users, questions }) {
  const answeredQuestionsIds = Object.keys(questions)
    .filter(
      questionId =>
        questions[questionId].optionOne.votes.includes(authedUser) ||
        questions[questionId].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  const unansweredQuestionsIds = Object.keys(questions)
    .filter(
      questionId =>
        !questions[questionId].optionOne.votes.includes(authedUser) &&
        !questions[questionId].optionTwo.votes.includes(authedUser)
    )
    .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  return {
    authedUser,
    users,
    questions,
    answeredQuestionsIds,
    unansweredQuestionsIds
  };
}

export default connect(mapPropsToState)(Dashboard);
