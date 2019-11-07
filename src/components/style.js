import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  card: {
    maxWidth: 345,
    margin: 10
  },
  media: {
    height: 70,
    width: 70
  },
  headerBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  questionPaper: {
    width: 400,
    padding: 10
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 380,
    paddingLeft: 10,
    paddingright: 10
  },
  options: {
    display: "flex",
    flexDirection: "column"
  },
  questionCard: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  questionTitle: {
    fontSize: 14
  },
  answered: {
    margin: 5,
    color: "green"
  },
  unanswered: {
    margin: 5,
    color: "red"
  }
});
