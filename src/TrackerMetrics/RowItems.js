import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux';
import { tracker } from '../_actions';

class RowItems extends Component{

    handleClose = () => {
        this.props.handle(this.props.option);
        var op = this.props.option;
        this.props.dispatch(tracker.setrow(op));
	    console.log(this.props.option);
    }

    render(){
        return(
            <div>
                    <MenuItem key={this.props.option} onClick={this.handleClose}>
                        {this.props.option}
                    </MenuItem>              
            </div>
        );
    }
}

export default connect()(RowItems);
