import React, {Component} from 'react';
import {connect} from 'react-redux';



class RowData extends Component{
componentDidMount(){
    console.log(this.props.currentRow);
}
    render(){
            return(
                <div>
                    <p>{this.props.currentRow + "  Data"}</p>
                </div>

            )
        }
}

const mapStateToProps = state => ({
    currentRow: state.currentRow
  })

export default connect(mapStateToProps)(RowData);
