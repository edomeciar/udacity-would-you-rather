import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Question from "./Question";

function Questions({ questionIds, questions }) {
  return (
    <div>
      <List>
        {questionIds.map(questionId => {
          return (
            <ListItem key={questionId}>
              <Question id={questionId} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

Questions.defaultProps = {
  questions: []
};

export default Questions;
