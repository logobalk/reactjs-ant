/**
 *
 * MainPage
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TablePaging from '../../Table';
import enviroimentReportData from './enviroimentReportData';
import styles from './enviroimentReport.style';

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

class EnviroimentReport extends React.Component {
  static propTypes = {
  };

  static defaultProp = {};

  state = {
    rows: [
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: true }, 'Temperature', '20-24', true, 'pass', '22-02-18 : 10.45 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: false }, 'Relative humidity', '< 25', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
    ],
  };

  render() {
    const { rows } = this.state;
    const mainColumns = enviroimentReportData.tableColumns;
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
            path='report'
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(EnviroimentReport);
