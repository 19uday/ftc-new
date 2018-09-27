import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { tracker } from '../_actions';
import {connect} from 'react-redux';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class DropDown extends React.Component {
  state = {
    row: '',
    name: 'hai',
    rows:["Row1", "Row2", "Row3", "Row4", "Row5", "Row6", "Row7", "Row8", "Row9", "Row10"],
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.setr(event.target.value);
    var op = this.props.option;
    this.props.dispatch(tracker.setrow(op));
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Select Row</InputLabel>
          <Select
            value={this.state.row}
            onChange={this.handleChange}
            inputProps={{
              name: 'row',
              id: 'row-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.state.rows.map(option => (
            <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

DropDown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(DropDown));