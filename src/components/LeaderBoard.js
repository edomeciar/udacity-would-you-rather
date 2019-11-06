import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function UserResults({ user }) {
  const classes = useStyles();
  const createQuestion = user.questions.length;
  const answeredQuestion = Object.keys(user.answers).length;
  const totalScore = createQuestion + answeredQuestion;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={user.avatarURL}
          title="User Avatar"
        />
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
  console.log(users);
  return Object.keys(users).map(userId => <UserResults user={users[userId]} />);
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(LeaderBoard);
