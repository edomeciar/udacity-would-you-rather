import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

function UserResults({ user }) {
  const classes = useStyles();
  const createQuestion = user.questions.length;
  const answeredQuestion = Object.keys(user.answers).length;
  const totalScore = createQuestion + answeredQuestion;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Box className={classes.headerBox}>
          <CardMedia
            className={classes.media}
            image={user.avatarURL}
            title="User Avatar"
          />
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Score
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`# of Creted Questions ${createQuestion}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`# of Answered Questions ${answeredQuestion}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`Total Score ${totalScore}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function LeaderBoard({ users }) {
  return Object.keys(users).map(userId => <UserResults user={users[userId]} />);
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .sort(
        (a, b) =>
          users[b].questions.length +
          Object.keys(users[b].answers).length -
          (users[a].questions.length + Object.keys(users[a].answers).length)
      )
      .map(userId => {
        return users[userId];
      })
  };
}

export default connect(mapStateToProps)(LeaderBoard);
