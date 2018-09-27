import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import OpTable from './OpTable';
import SiteImage from './SiteImage';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  paper: {
    textAlign: 'center',
    color: 'silver',
    width: '100%',
  },
});

class TrackerMetrics extends Component {

    render(){
        const { classes } = this.props;
        
        return (
            <div className={classes.root} >
            <Grid container spacing={24}>
                <Grid item xs={8}>
                <Paper className = {classes.paper}>
                <div >
                    <SiteImage />
                </div>
                </Paper>
                </Grid>
                <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <div>
                        <div className=".w100">
                            <img className="sunimage" src={ require('./sunn.png') } />
                        </div>
                        
                        <div className=".w100">
                            <p><b><font color="red" size="5">STATUS:</font> <font color="blue" size="5">ALL WELL</font></b></p>
                        </div>
                            
                        <div className=".w100">
                            <OpTable />
                        </div>
                    </div>
                </Paper>
                </Grid>
            </Grid>
            </div>
        );
    }
}

TrackerMetrics.propTypes = {
  classes: PropTypes.object.isRequired,
};

const TrendsWithStyles =  connect()(withStyles(styles, { withTheme: true })(TrackerMetrics));
export { TrendsWithStyles as TrackerMetrics }