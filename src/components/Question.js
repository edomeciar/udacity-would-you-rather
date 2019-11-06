import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Question({
    id,
    author,
    question,
}){
    const classes = useStyles();

    return(
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Question by {author.name}
        </Typography>
        <Typography variant="h5" component="h2">
          Would you rather - 
        </Typography>
        <Typography variant="body2" component="p">
          {question.optionOne.text}?
        </Typography>
         <Typography className={classes.pos} color="textSecondary">
          OR
        </Typography>
        <Typography variant="body2" component="p">
              {question.optionTwo.text}?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Answer</Button>
      </CardActions>
    </Card>
    )
}

function mapStateToProps ({users, questions}, { id }) {
  const question = questions[id]
  const author = users[question.author]

  return {
    author,
    question
  }
}

export default connect(mapStateToProps)(Question)