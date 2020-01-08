/**
 *
 * MainPage
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Icon, Button } from 'antd';
import CardLayout from 'components/CardLayout';
import ListInfo from 'components/ListInfo';
import history from 'utils/history';
import pressureDiffData from './pressureDiffData';
import PressureDiffPaper from './pressureDiffPaper';
import pressureDiffJson from './pressureDiff.json';
import styles from './pressureDiff.style';
import PressureDiffTable from './PressureDiffTable';


class PressureDiff extends React.Component {
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
    const filter = pressureDiffData.create(
      item,
      this.handleFilterDataUpdate.bind(this),
      classes,
    );
    return filter;
  }

  onFinish = e => {
    history.push('/tool-equipment-checking/material-group');
  }

  onIncident = e => {

  }

  render() {
    const { classes } = this.props;

    const pressureDiffDetails = pressureDiffJson.materialGroup.nonBetaLactam.grade.D.roomNo;

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
          content: 'D',
        },
      ],
      [
        {
          title: <Fragment><Icon type="appstore" /> Type</Fragment>,
          content: 'Pressure Difference',
        },
        {
          title: <Fragment><Icon type="home" /> Room No.</Fragment>,
          content: '104,107,108',
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
        title="Pressure Difference"
        extra={
          <Button icon="arrow-left" onClick={this.onFinish}>Back</Button>
        }
      >
        <ListInfo list={info} />
        <p />
        <PressureDiffTable />
        {/* {pressureDiffDetails && Object.values(pressureDiffDetails).map((item, index) =>
          <div key={uuid.v4()}>
            <Chip
              key={uuid.v4()}
              icon={<Home />}
              label={`Room No. ${Object.keys(pressureDiffDetails)[index]}`}
              className={classes.chip}
              color="primary"
            />
            <PressureDiffPaper
              key={uuid.v4()}
              filtersDef={this.createData(item)}
              filtersDiff={this.createData(Object.values(item.diffRoom)[0])}
              pressureDiff={this.createData(item.pressureDiff)}
            />
          </div>
        )} */}
      </CardLayout>
    );
  }
}

export default withStyles(styles)(PressureDiff);
