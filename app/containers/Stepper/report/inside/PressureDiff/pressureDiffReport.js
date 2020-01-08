/**
 *
 * MainPage
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TablePaging from '../../Table';
import pressureDiffReportData from './pressureDiffReportData';
import styles from './pressureDiffReport.style';

let counter = 0;
function createData(
  switchData,
  checkboxData,
  acceptanceCriteria,
  accepttableLimit,
  recording,
  evaluate,
  dateTime,
  checkBy,
) {
  counter += 1;
  return {
    id: counter,
    switchData,
    checkboxData,
    acceptanceCriteria,
    accepttableLimit,
    recording,
    evaluate,
    dateTime,
    checkBy,
  };
}

class PressureDiffReport extends React.Component {
  static propTypes = {
  };

  static defaultProp = {};

  state = {
    rows: [
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: true }, '103', '25-35 PA', true, 'pass', '22-02-18 : 10.45 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: false }, '104', '10-20 PA', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: true }, '112', '55-65 PA', true, 'pass', '22-02-18 : 10.45 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: false }, '115', '40-50 PA', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
    ],
  };

  render() {
    const { rows } = this.state;
    const mainColumns = pressureDiffReportData.tableColumns;
    return (
      <React.Fragment>
        <div style={{ overflow: 'auto', marginBottom: 40 }}>
          <TablePaging
            dataRows={{
              rows: Object.keys(rows).map(
                row => rows[row],
              ),
            }}
            tableColumns={{
              columns: mainColumns,
            }}
            rowsPerPage={5}
            page={0}
            path='pressureReport'
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PressureDiffReport);
