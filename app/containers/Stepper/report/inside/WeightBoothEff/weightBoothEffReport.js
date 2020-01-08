/**
 *
 * MainPage
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TablePaging from '../../Table';
import weightBoothEffReportData from './weightBoothEffReportData';
import styles from './weightBoothEffReport.style';

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

class WeightBoothEffReport extends React.Component {
  static propTypes = {
  };

  static defaultProp = {};

  state = {
    rows: [
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: true }, 'HEPA FILTER 01', '75-400', true, 'pass', '22-02-18 : 10.45 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: false }, 'HEPA FILTER 02', '75-400', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: false }, 'HEPA FILTER 03', '75-401', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: false }, 'PRE FILTER 01', '40-250', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: false }, 'PRE FILTER 02', '40-251', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: true }, 'MEDIUM FILTER 01', '50-300', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
      createData({ isSwitch: false, value: false }, { isCheckbox: true, value: true }, 'MEDIUM FILTER 02', '50-301', true, 'failed', '22-02-18 : 10.48 pm', 'admin'),
    ],
  };

  render() {
    const { rows } = this.state;
    const mainColumns = weightBoothEffReportData.tableColumns;
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

export default withStyles(styles)(WeightBoothEffReport);
