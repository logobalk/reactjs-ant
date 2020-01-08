/**
 *
 * MainPage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import uuid from 'uuid';
import { Icon, Button } from 'antd';
import history from 'utils/history';
import CardLayout from 'components/CardLayout';
import ListInfo from 'components/ListInfo';
import n2GasData from './n2GasData';
import N2GasPaper from './n2GasPaper';
import weightBoothEffJson from './n2Gas.json';
import styles from './n2Gas.style';
import N2gasTable from './N2gasTable';


class N2Gas extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  handleFilterDataUpdate(field, key) {
    return (args, value) => {
    };
  }

  createData(item) {
    const { classes } = this.props;
    const filter = item.map(data =>
      n2GasData.create(
        data,
        this.handleFilterDataUpdate.bind(this),
        classes,
      ));
    return filter;
  }

  onFinish = e => {
    history.push('/tool-equipment-checking/material-group');
  }

  onIncident = e => {

  }

  render() {
    const { classes } = this.props;

    const n2GasDataDetails = weightBoothEffJson.materialGroup.nonBetaLactam.grade.D;

    const info = [
      [
        {
          title: <Fragment><Icon type="clock-circle" /> Start Time</Fragment>,
          content: '05/09/2019 8.00:00',
        },
        {
          title: <Fragment><Icon type="user" /> Check By</Fragment>,
          content: 'Admin',
        },
      ],
      [
        {
          title: <Fragment><Icon type="appstore" /> Type</Fragment>,
          content: 'N2 gas',
        },
        {
          title: <Fragment><Icon type="schedule" /> Status</Fragment>,
          content: <Fragment>
            <Button icon="poweroff" type="primary" onClick={this.onFinish}>Finish</Button>
            <Button icon="question-circle" onClick={this.onIncident}>Incident</Button>
          </Fragment>,
        },
      ],
    ];

    return (
      <CardLayout
        title="N2Gas"
        extra={
          <Button icon="arrow-left" onClick={this.onFinish}>Back</Button>
        }
      >
        <ListInfo list={info} />
        <p />
        <N2gasTable />
        {/* {n2GasDataDetails && (
          <N2GasPaper
            key={uuid.v4()}
            filtersDef={this.createData(n2GasDataDetails.details)}
          />
        )} */}
      </CardLayout>
    );
  }
}

export default withStyles(styles)(N2Gas);
