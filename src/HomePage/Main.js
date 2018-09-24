import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { TrackerMetrics } from '../TrackerMetrics'
import { Trends } from '../Trends'
import { Reports } from '../Reports'
import { Configuration } from '../Configuration'
import { BroadcastAndUpdate } from '../BroadcastAndUpdate'


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%'
  },
  tabcontent: {
      height: 'calc(100% - 48px)',
  }
});

class Main extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    const { value } = this.state;

    return (
      <div className="h100">
        <div>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Tracker Metrics" />
            <Tab label="Trends" />
            <Tab label="Reports" />
            <Tab label="Configuration" />
            <Tab label="Broadcast and Update" />
          </Tabs>
        </div>
        <div className={classes.tabcontent}>
          { value === 0 && <TrackerMetrics />}
          { value === 1 && <Trends />}
          { value === 2 && <Reports />}
          { value === 3 && <Configuration />}
          { value === 4 && <BroadcastAndUpdate />}
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);