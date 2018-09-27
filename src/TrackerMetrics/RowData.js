import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';   
import TableCell from '@material-ui/core/TableCell';    
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    overflowX: 'auto',
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomizedTable(props) {
  const { classes } = props;
  const data = {
    "rowID": props.row,
    "siteName":"Chennai Pilot",
   "siteID":"site0001",
   "zoneID": (props.zone + 1),
   "firmwareVersion":"v1.0",
   "boardSerialNo":"234",
   "threshold_wind_speed":20.2,
   "table_length":10.2,
   "table_width":2.2,
}

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableBody>
          {
              Object.keys(data).map(key => (
                <TableRow>
                    <CustomTableCell>{key}</CustomTableCell>
                    <CustomTableCell>{data[key]}</CustomTableCell>
                </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);