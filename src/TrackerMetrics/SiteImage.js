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
    start: false,
    open: false,
    currentzone: 0,
    currentrow:"",
    open1: false,
    anchorEl: null,
    cordssite: [],
    siteUrl: "",
  };
  
  wids = [];

  componentDidMount(){
    var htp = new XMLHttpRequest();
    var url = 'http://2609a159-4f2d-4403-9fb1-7d284a187567.mock.pstmn.io/trackerMetrics/graphics';
    htp.open('GET', url, true);
    htp.setRequestHeader('Content-type', 'application/json');//Send the proper header information along with the request
    htp.send();
    var func = this;
    htp.onreadystatechange = function() {//Call a function when the state changes.
        if(htp.readyState === 4 && htp.status === 200) {
                var jso = JSON.parse(htp.responseText);
                func.setState({cordssite: jso.coOrdinates});
                func.setState({siteUrl: jso.siteUrl});
                func.setState({start: true});
        }
    }
  }

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
        this.widh = 380;
        var widarray=[];
        this.wids=[];
        for(var i=0; i<this.state.cordssite.length; i++){
            widarray=[];
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i].cord[0].x1*(this.widw/533))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i].cord[1].y1*(this.widh/329))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i].cord[2].x2*(this.widw/533))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i].cord[3].y2*(this.widh/329))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i].cord[4].x3*(this.widw/533))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i].cord[5].y3*(this.widh/329))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i].cord[6].x4*(this.widw/533))));
            widarray.push(Math.floor(parseFloat(this.state.cordssite[i].cord[7].y4*(this.widh/329))));
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

		return(
    <div ref={this.refCallback}>  			
        { this.state.start === true &&
          <div>
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
        }
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
