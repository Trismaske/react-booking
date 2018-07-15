import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '20px',
    height: '35px',
  },
  h1: {
    color: '#e31f2b',
    fontSize: '200px'
  },
  subText: {
    fontSize: '10px'
  }
};


const CalendarDay = (props) => {
  const { classes, day } = props;
  return(
    <Grid item xs classes={{item: classes.gridItem}} >
      <Typography variant="body2" gutterBottom align="center">
        {day.format('DD/MM/YYYY')}
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(CalendarDay);
