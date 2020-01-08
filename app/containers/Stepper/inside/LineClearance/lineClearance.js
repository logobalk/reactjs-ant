/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Home from '@material-ui/icons/Home';
import uuid from 'uuid';
import lineClearanceData from './lineClearanceData';
import LineClearancePaper from './lineClearancePaper';
import lineClearanceJson from './lineClearance.json';
import styles from './lineClearance.style';


class LineClearance extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  handleFilterDataUpdate(field, key) {
    return (args, value) => {
    };
  }

  render() {
    const lineClearance = lineClearanceJson.materialGroup.nonBetaLactam.grade.D.roomNo['104'];
    const { classes } = this.props;
    const filtersDef = lineClearanceData.create(
      lineClearance,
      this.handleFilterDataUpdate.bind(this),
      classes,
    );
    const filtersDiff = lineClearanceData.create(
      lineClearance.diffRoom['103'],
      this.handleFilterDataUpdate.bind(this),
      classes,
    );

    const filtersPressureDiff = lineClearanceData.create(
      lineClearance.pressureDiff,
      this.handleFilterDataUpdate.bind(this),
      classes,
    );
    return (
      <div>
        <Chip
          icon={<Home />}
          label="Room No. 104"
          className={classes.chip}
          color="primary"
        />
        <LineClearancePaper
          filtersDef={filtersDef}
          filtersDiff={filtersDiff}
          pressureDiff={filtersPressureDiff}
        ></LineClearancePaper>
        <Chip
          icon={<Home />}
          label="Room No. 107"
          className={classes.chip}
          color="primary"
        />
        <LineClearancePaper
          filtersDef={filtersDef}
          filtersDiff={filtersDiff}
          pressureDiff={filtersPressureDiff}
        ></LineClearancePaper>
        {/* <LineClearancePaper ></LineClearancePaper> */}
      </div>
    );
  }
}

export default withStyles(styles)(LineClearance);
