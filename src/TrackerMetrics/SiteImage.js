import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RowItems from './RowItems.js';
import RowData from './RowData';

function getModalStyle(){
  const top = 40;
  const left = 17;

  return {
    top: `${top}%`,
    left: `${left}%`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 100,
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
    rows:["Row1", "Row2", "Row3", "Row4", "Row5", "Row6", "Row7", "Row8", "Row9", "Row10"],
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

  handleClose1 = (option) => {
    console.log(option);
    this.state.open1 = true;
    this.setState({currentrow: option});
    console.log(this.state.anchorEl);
    this.setState({anchorEl: null});
    console.log(this.props.currentrow,this.state.anchorEl);
  };

load = () => {
	console.log("loaded");
}

clicked=(area)=>{
  console.log("clicked" + area._id);
  this.setState({currentzone: area._id});
  this.handleOpen();
}

enterArea = (area) => {
	console.log("entered" + area._id);
}

leaveArea = (area) => {
	console.log("left" + area._id);
}

clickedOutside = (evt) => {
	console.log("outside");
}

render(){
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const { rows } = this.state;

    const { classes } = this.props;

    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		console.log(w,h);
        this.widw = Math.floor(parseFloat(0.6 * w));
        this.widh = Math.floor(parseFloat(0.7 * h));
        console.log(this.wids);var widarray=[];this.wids=[];
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

		return(<div className="w3-center">  			

				<div className="imag"> 
					<ImageMapper src={require('./sun.png')} map={MAP} width={this.widw} height={this.widh}
						onLoad={() => this.load()}
						onClick={area => this.clicked(area)}
						onMouseEnter={area => this.enterArea(area)}
						onMouseLeave={area => this.leaveArea(area)}
						onImageClick={evt => this.clickedOutside(evt)}
					/>
          </div>
          <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
        <div>
          <div style={getModalStyle()} className={classes.paper}>
            <div className="w3-row">
            <div className="w3-col s2">
                    <IconButton
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                      >
                        <MoreVertIcon />
                    </IconButton>
            </div>
            <div className="w3-col s5 top">              
                    {"zone" + (this.state.currentzone+1)  + "  Data"}              
            </div>

              <div className="w3-col s5"> 
                {this.state.open1 === true &&
                <div>
                  {this.state.currentrow}
                </div>
                  }
              </div>
            </div>
          </div>
        
        <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose1}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
                {this.state.rows.map(option => (
                    <RowItems option={option} handle={this.handleClose1} />               
                )
                )}
        </Menu>
      </div>
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
