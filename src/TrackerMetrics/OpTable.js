import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,   
  },
  body: {
    fontSize: 14,
    height: '10px',
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    maxWidth: '100%',
  },
});

class OpTable extends Component {

    state={
      oparray:[],
      open:false
    };

    componentDidMount(){
        var htp = new XMLHttpRequest();
        var url = 'http://2609a159-4f2d-4403-9fb1-7d284a187567.mock.pstmn.io/trackerMetrics/operational';
        htp.open('GET', url, true);
        htp.setRequestHeader('Content-type', 'application/json');//Send the proper header information along with the request
        htp.send();
        var func = this;
        htp.onreadystatechange = function() {//Call a function when the state changes.
            if(htp.readyState === 4 && htp.status === 200) {
                    var jso = JSON.parse(htp.responseText);
                    func.setState({oparray: jso.operational});
                    func.setState({open: true});
            }
    
        }
    }
    
    render(){
        const {classes} = this.props;
        
        return (<div>
            {this.state.open === true &&
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Zone #</CustomTableCell>
                  <CustomTableCell numeric>No Of Trackers</CustomTableCell>
                  <CustomTableCell numeric>Operational #</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.oparray.map(op => {
                  return (
                    <TableRow className={classes.row} key={op.zoneId}>
                      <CustomTableCell>
                        {op.zoneId}
                      </CustomTableCell>
                      <CustomTableCell>{op.numberOfTrackers}</CustomTableCell>
                      <CustomTableCell className={op.operationalNo === op.numberOfTrackers ? "black" : "red"}>{op.operationalNo}</CustomTableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>}
          </div>
        );
    }

}

OpTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OpTable);