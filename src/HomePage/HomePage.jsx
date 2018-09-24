import React from 'react';
import { connect } from 'react-redux';
import Layout from './Layout'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { } from '../_actions';
import classNames from 'classnames';
import Main from './Main'


export class HomePage extends React.Component {

    render() {
        const {  } = this.props;

        return(
            <Layout>
                <Main />
            </Layout>
        )
    }
}