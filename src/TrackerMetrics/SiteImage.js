import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalData from './ModalData';

function getModalStyle(){
  const top = 20;
  const left = 10;

  return {
    top: `${top}%`,
    left: `${left}%`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 120,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});
const ITEM_HEIGHT = 48;

class SiteImage extends Component{

  state = {
    widt:500,
    open: false,
    currentzone: 0,
    currentrow:"",
    open1: false,
    cordssite: [[94,181,105,222,188,252,208,138],[217,133,196,258,377,118,350,72],[353,72,438,22,462,40,383,114]],
    anchorEl: null,
  };
  
  wids = [];

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

clicked=(area)=>{
  console.log("clicked" + area._id);
  this.setState({currentzone: area._id});
  this.handleOpen();
}

render(){
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const { rows } = this.state;

    const { classes } = this.props;

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        this.widw = Math.floor(parseFloat(0.6 * w));
        this.widh = Math.floor(parseFloat(0.76 * h));
        var widarray=[];
        this.wids=[];
        for(var i=0; i<this.state.cordssite.length; i++){
            widarray=[];
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i][0]*(this.widw/533))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i][1]*(this.widh/329))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i][2]*(this.widw/533))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i][3]*(this.widh/329))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i][4]*(this.widw/533))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i][5]*(this.widh/329))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i][6]*(this.widw/533))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i][7]*(this.widh/329))));
            this.wids.push(widarray);
        }
        var area=[];
        var currr = this.curr_picc;
        for(var i=0; i<this.state.cordssite.length; i++){
            var obj = { _id: i , shape: "poly", coords: [this.wids[i][0],this.wids[i][1],this.wids[i][2],this.wids[i][3],this.wids[i][4],this.wids[i][5],this.wids[i][6],this.wids[i][7]] }
            area.push(obj);
        }

		
		var MAP = {
      name: "my-map",
      areas: area
    }

		return(<div>  			

				<div > 
					<ImageMapper className="imagediv" src={require('./sun.png')} map={MAP} width={this.widw} height={this.widh}
						onClick={area => this.clicked(area)}
					/>
          </div>
          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          >
          <div style={getModalStyle()} className={classes.paper}>
              <ModalData zone={this.state.currentzone} />
          </div>
        
      </Modal>

</div>
);
}
}

SiteImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cordssite: state.cordssite
})

export default connect(mapStateToProps)(withStyles(styles)(SiteImage));
