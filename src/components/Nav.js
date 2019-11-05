import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    fontFamily: 'AttAleckSans, Helvetica Neue, Helvetica, Arial, sans-serif',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    paddingTop: theme.spacing(8),
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(8),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function Nav(){
    const classes = useStyles();
    return(
<Drawer
  className={classes.drawer}
  variant="permanent"
  classes={{
    paper: classes.drawerPaper
  }}
>
  <List>
    <ListItem button component={NavLink} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={NavLink} to="/users">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>

    <ListItem button component={NavLink} to="/newQuestion">
      <ListItemIcon>
      </ListItemIcon>
      <ListItemText primary="New Question" />
    </ListItem>
  </List>
</Drawer>

    )
}

export default Nav