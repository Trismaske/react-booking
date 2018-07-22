import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CalendarDay from './CalendarDay';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  mainPaper: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    height: '70%',
  },
  mainGridContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingGridContainer: {
    marginTop: '10px',
  },
  dayGridContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayHeadingItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

class ReactBooking extends React.Component {
  state = {
    options: [],
  };
  render() {
    const startDay = moment().startOf('month');
    console.log('Start Day: ', startDay.format('dddd Do MMMM YYYY'));
    const endDay = moment().endOf('month');
    console.log('End Day: ', endDay.format('dddd Do MMMM YYYY'));
    let calendar = [];
    for(let day = startDay; day<endDay; day.add(1, 'd')){
      calendar.push(moment(day));
    }
    console.log('calendar: ', calendar);
    console.log('First Day of Month: ', calendar[0].format('dddd Do MMMM YYYY'));
    console.log('Size: ', calendar[0].isoWeekday() - 1);
    console.log('Last Day of Month: ', calendar[calendar.length-1].format('dddd Do MMMM YYYY'));
    console.log('Size: ', calendar[calendar.length-1].isoWeekday() - 1);

    const { classes } = this.props;
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
      <div className={classes.root}>
      <Paper className={classes.mainPaper}>
      <AppBar position="static" color="default">
      <Toolbar>
      <Typography variant="title" color="inherit">
      {'React Booking for ' + moment().format('MMMM')}
      </Typography>
      </Toolbar>
      </AppBar>
      <Grid container className={classes.mainGridContainer}>
      <Grid container className={classes.headingGridContainer}>
      {days.length && days.map((day, index) => <Grid item xs classes={{item: classes.dayHeadingItem}} key={index}><Typography variant="title" gutterBottom>{day}</Typography></Grid>)}
      </Grid>
      <Grid container className={classes.dayGridContainer}>
      {calendar.map((day, index) => <CalendarDay day={day} key={index}/>)}
      </Grid>    
      </Grid>
      </Paper>
      </div>
      );
  }
}

ReactBooking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReactBooking);