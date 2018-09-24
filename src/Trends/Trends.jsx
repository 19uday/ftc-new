import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import classNames from 'classnames'
import { Grid, Button } from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit * 3,
      width: '100%'
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit / 4,
    },
    paper: {
        margin: theme.spacing.unit * 2,
        boxShadow: '0px 0px 1px 0px grey'
    },
    input: {
        margin: '20px'
    },
    button: {
        margin: theme.spacing.unit,
    }
  });

class Trends extends React.Component {

    state = {
        name: [],
      };
    
    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        const { classes, theme } = this.props;
        const names = [
            'Oliver Hansen',
            'Van Henry',
            'April Tucker',
            'Ralph Hubbard',
            'Omar Alexander',
            'Carlos Abbott',
            'Miriam Wagner',
            'Bradley Wilkerson',
            'Virginia Andrews',
            'Kelly Snyder',
          ];

        return(
            <Grid container className={classNames("flex", "h100")} justify="center" direction="row" alignItems="stretch">
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
                <FormControl className={classes.formControl}>
                Select Zone:
                    <Select
                        className={classes.input}
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange}
                        input={<Input id="select-zone" />}
                        renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => (
                            <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={{
                            fontWeight:
                                this.state.name.indexOf(name) === -1
                                ? theme.typography.fontWeightRegular
                                : theme.typography.fontWeightMedium,
                            }}
                        >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                    Select Trackers:
                    <Select
                        className={classes.input}
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange}
                        input={<Input id="select-trackers" />}
                        renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => (
                            <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={{
                            fontWeight:
                                this.state.name.indexOf(name) === -1
                                ? theme.typography.fontWeightRegular
                                : theme.typography.fontWeightMedium,
                            }}
                        >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                    Select Parameters:
                    <Select
                        className={classes.input}
                        multiple
                        value={this.state.name}
                        onChange={this.handleChange}
                        input={<Input id="select-trackers" />}
                        renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => (
                            <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map(name => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={{
                            fontWeight:
                                this.state.name.indexOf(name) === -1
                                ? theme.typography.fontWeightRegular
                                : theme.typography.fontWeightMedium,
                            }}
                        >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                    <Button variant="outlined" component="span" className={classes.button}>
                        Plot
                    </Button>
                    </FormControl>    
                </Grid>
                <Grid item xs={6} className={classNames("flex", classes.paper)}>
                
                </Grid>
            </Grid>
        )
    }
}

const TrendsWithStyles =  withStyles(styles, { withTheme: true })(Trends);
export { TrendsWithStyles as Trends }