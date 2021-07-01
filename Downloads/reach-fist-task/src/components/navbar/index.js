import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Typography, Link } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'



export default function PrimarySearchAppBar() {

  const {jobs} = useSelector((state) => state.form)
  const jobsCount = jobs.length

    const history = useHistory();
  return (
      <AppBar position="static">
        <Toolbar>
            <IconButton color="inherit">
              <Badge badgeContent={jobsCount} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Typography>
                <Link  onClick={() => history.push("/jobs/view")} color="inherit">
                    Jobs
                </Link>
            </Typography>
            <Typography>
                <Link  onClick={() => history.push("/user")} color="inherit">
                    User
                </Link>
            </Typography>
        </Toolbar>
      </AppBar>
  );
}
