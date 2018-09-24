import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { OverView } from '../OverView';
import { MessageConsole } from '../MessageConsole';
import { Divider } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    height: '100%'
  },
  AppBar: {
    height: '20%',
    boxShadow: '0px 0px 20px grey'
  },
  main: {
    height: '70%'
  },
  messageConsole: {
    height: '10%',
    boxShadow: '0px 0px 20px grey'
  }
};

const Nav = (props) => {
  const { classes, children } = props;
  return (
    <div className={classNames(classes.root, "container-column", "flex-item")}>
        <div className={classes.AppBar}>
          <OverView />
        </div>
        <div className={classes.main}>
            {children}
        </div>
        <Divider />
        <div className={classes.messageConsole}>
          <MessageConsole />
        </div>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};
const Layout = withStyles(styles)(Nav);
export default Layout