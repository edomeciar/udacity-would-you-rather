import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";
import { saveUserQuestionAnswer, saveUserQuestion } from "./users";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

function saveQuestionAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  };
}

function saveQuestion(formattedQuestion) {
  return {
    type: SAVE_QUESTION,
    formattedQuestion
  };
}

export function handleSaveQuestionAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(showLoading());
    return Promise.all([_saveQuestionAnswer({ authedUser, qid, answer })]).then(
      () => {
        dispatch(saveQuestionAnswer(authedUser, qid, answer));
        dispatch(saveUserQuestionAnswer(authedUser, qid, answer));
        dispatch(hideLoading());
      }
    );
  };
}

export function handleSaveQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    question.author = authedUser;
    dispatch(showLoading());
    return Promise.all([_saveQuestion(question)]).then(formattedQuestion => {
      dispatch(saveQuestion({ ...formattedQuestion[0] }));
      dispatch(saveUserQuestion({ ...formattedQuestion[0] }));
      dispatch(hideLoading());
    });
  };
}
