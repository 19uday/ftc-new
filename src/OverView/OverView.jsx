import React from 'react';
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import { overViewActions } from '../_actions';
import { connect } from 'react-redux';


class OverView extends React.Component {

    componentDidMount() {
        this.props.getoverView()
    }

    render() {
        return (!this.props.loaded ? "Loading" :
            <Grid container className={classNames("flex", "h100")} justify="center" direction="row" alignItems="stretch">
                <Grid item xs={2} className="flex">
                    <FTCLogo />
                </Grid>
                <Grid item xs={2} className="flex">
                    <TotalNoOfTrackers overView={this.props.overView}/>
                </Grid>
                <Grid item xs={2} className="flex">
                    <OverallUptime overView={this.props.overView}/>
                </Grid>
                <Grid item xs={2} className="flex">
                    <TrackerInfo overView={this.props.overView}/>
                </Grid>
                <Grid item xs={2} className="flex">
                    <OtherInfo overView={this.props.overView}/>
                </Grid>
                <Grid item xs={2} className="flex">
                    <ClientLogo />
                </Grid>
            </Grid>
        )
    }

}

const FTCLogo = () => {
    return (
        <div className="ftclogo"></div>
    )
}

const TotalNoOfTrackers = (props) => {
    return (
        <div className={classNames("h100", "w100")}>
        <Typography align="center" component="div" variant="title" style={{ padding: 8 * 2 }}>
            Total No Of Trackers
        </Typography>  
        <Typography align="center" component="div" variant="title" style={{ padding: 8 }}>
            {props.overView.totalTrackers}
        </Typography>
        </div>  
    )
}

const OverallUptime = (props) => {
    return (
        <div className={classNames("h100", "w100")}>
        <Typography align="center" component="div" variant="title" style={{ padding: 8 }}>
            Overall Uptime (%)
        </Typography>
        <Typography component="div" variant="body2" style={{ padding: 8 }}>
            <table className={classNames("h100", "w100")}>
                <tbody>
                    <tr>
                        <td>
                            Today
                        </td>
                        <td>
                            {props.overView.todayUptime}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Yesterday
                        </td>
                        <td>
                            {props.overView.yesterdayUptime}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Since Commisioning
                        </td>
                        <td>
                            {props.overView.sinceCommissioningUptime}
                        </td>
                    </tr>
                </tbody>    
            </table>
        </Typography>
        </div>
    )
}

const TrackerInfo = (props) => {
    return (
        <div className={classNames("h100", "w100")}>
        <Typography align="center" component="div" variant="body2" style={{ height: "16.66%" }}>
            Tracker Model No.
        </Typography>
        <Typography align="center" component="div" variant="subheading" style={{ height: "16.66%" }}>
            {props.overView.trackerModelNo}
        </Typography>
        <Typography align="center" component="div" variant="body2" style={{ height: "16.66%" }}>
            Master Controller Model No.
        </Typography>
        <Typography align="center" component="div" variant="subheading" style={{ height: "16.66%" }}>
            {props.overView.masterControllerModeNo}
        </Typography>
        <Typography align="center" component="div" variant="body2" style={{ height: "16.66%" }}>
            Software Version No.
        </Typography>
        <Typography align="center" component="div" variant="subheading" style={{ height: "16.67%" }}>
            {props.overView.softwareVersionNo}
        </Typography>
        </div>
    )
}

const OtherInfo = (props) => {
    return (
        <div className={classNames("h100", "w100")}>
        <Typography align="center" component="div" variant="body2" style={{ height: '25%' }}>
            Timestamp
        </Typography>
        <Typography align="center" component="div" variant="body2" style={{ height: '25%' }}>
            {props.overView.plantName}, -> {props.overView.locationForMap}
        </Typography>
        <Typography align="center" component="div" variant="body2" style={{ height: '25%' }}>
            {props.overView.clientName}
        </Typography>
        <Typography align="center" component="div" variant="body2" style={{ height: '25%' }}>
            {props.overView.plantCapacity} , {props.overView.CoD}
        </Typography>
        </div>
    )
}

const ClientLogo = () => {
    return (
        <div className="clientlogo"></div>
    )
}

function mapStateToProps(state) {
    const { loaded, overView } = state.overView;
    return {
        overView,
        loaded
    };
}

const mapDispatchToProps = (dispatch) => ({
    getoverView: () => {
        dispatch(overViewActions.getoverView())
    }
})

const connectedOverView = connect(mapStateToProps, mapDispatchToProps)(OverView);
export { connectedOverView as OverView };