/**
 *
 * MainPage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Icon, Button } from 'antd';
import ListInfo from 'components/ListInfo';
import history from 'utils/history';
import weightBoothEffData from './weightBoothEffData';
import WeightBoothEffTable from './WeightBoothEffTable';
import WeightBoothEffPaper from './weightBoothEffPaper';
import weightBoothEffJson from './weightBoothEff.json';
import styles from './weightBoothEff.style';
import CardLayout from 'components/CardLayout';


class WeightBoothEff extends React.Component {
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
      weightBoothEffData.create(
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

    const weightBoothEffDetails = weightBoothEffJson.materialGroup.nonBetaLactam.grade.D;

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
        {
          title: <Fragment><Icon type="filter" /> Grade</Fragment>,
          content: 'C / D ',
        },
      ],
      [
        {
          title: <Fragment><Icon type="appstore" /> Type</Fragment>,
          content: 'Weighing  booth  Efficiency',
        },
        {
          title: <Fragment><Icon type="home" /> Room No.</Fragment>,
          content: 'C 115,116     :  D 104,107',
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
        title="Weight booth Efficiency"
        extra={
          <Button icon="arrow-left" onClick={this.onFinish}>Back</Button>
        }
      >
        <WeightBoothEffTable />
        {/* {weightBoothEffDetails && (
          <WeightBoothEffPaper
            key={uuid.v4()}
            filtersDef={this.createData(weightBoothEffDetails.details)}
          />
        )} */}
      </CardLayout>
    );
  }
}

export default withStyles(styles)(WeightBoothEff);
