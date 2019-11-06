import React from "react";
import { NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';



function Nav(){
    return(
<Drawer
  className="drawer"
  variant="permanent"
  classes={{
    paper: "drawerPaper"
  }}
>
  <List>
    <ListItem button component={NavLink} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={NavLink} to="/users">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button component={NavLink} to="/leaderboard">
      <ListItemIcon>
        <FitnessCenterIcon />
      </ListItemIcon>
      <ListItemText primary="Leader Board" />
    </ListItem>
    <ListItem button component={NavLink} to="/add">
      <ListItemIcon>
        <ContactSupportIcon />
      </ListItemIcon>
      <ListItemText primary="New Question" />
    </ListItem>
  </List>
</Drawer>

    )
}

export default Nav