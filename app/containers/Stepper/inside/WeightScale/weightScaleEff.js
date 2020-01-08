/**
 *
 * MainPage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import uuid from 'uuid';
import ListInfo from 'components/ListInfo';
import history from 'utils/history';
import { Icon, Button } from 'antd';
import weightScaleEffData from './weightScaleEffData';
import WeightScaleEffTable from './WeightScaleEffTable';
import WeightScaleEffPaper from './weightScaleEffPaper';
import weightBoothEffJson from './weightScaleEff.json';
import styles from './weightScaleEff.style';
import CardLayout from 'components/CardLayout';



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
      weightScaleEffData.create(
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

    const weightScaleEffDetails = weightBoothEffJson.materialGroup.nonBetaLactam.grade.D;

    const info = [
      [
        {
          title: <Fragment><Icon type="clock-circle" /> Start Time</Fragment>,
          content: '05/09/2019 6.55:00',
        },
        {
          title: <Fragment><Icon type="user" /> Check By</Fragment>,
          content: 'Admin',
        },
      ],
      [
        {
          title: <Fragment><Icon type="appstore" /> Type</Fragment>,
          content: 'Weighing Scale Efficiency',
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
        title="Weighing Scale Efficiency"
        extra={
          <Button icon="arrow-left" onClick={this.onFinish}>Back</Button>
        }
      >
        <WeightScaleEffTable />
        {/* {weightScaleEffDetails && (
          <WeightScaleEffPaper
            key={uuid.v4()}
            filtersDef={this.createData(weightScaleEffDetails.details)}
          />
        )} */}
      </CardLayout>
    );
  }
}

export default withStyles(styles)(N2Gas);
