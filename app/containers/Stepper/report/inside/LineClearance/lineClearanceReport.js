/**
 *
 * MainPage
 *
 */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TablePaging from '../../Table';
import lineClearanceReportData from './lineClearanceReportData';
import styles from './lineClearanceReport.style';

let counter = 0;
function createData(
  switchData,
  checkboxData,
  acceptanceCriteria,
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
    evaluate,
    dateTime,
    checkBy,
  };
}

class LineClearanceReport extends React.Component {
  static propTypes = {
  };

  static defaultProp = {};

  state = {
    rows: [
      createData({ isSwitch: true, value: true }, { isCheckbox: false, value: true }, 'พื้นสะอาด ไม่มีรอยแตกร้าว ไม่มีฝุ่นผง', 'pass', '22-02-18 : 10.45 pm', 'admin'),
      createData({ isSwitch: true, value: false }, { isCheckbox: false, value: true }, 'ไม่พบวัสดุอื่นที่ไม่เกี่ยวข้อง หรือวัสดุที่ผ่านการใช้งานแล้ว', 'failed', '22-02-18 : 10.45 pm', 'admin'),
      createData({ isSwitch: true, value: true }, { isCheckbox: false, value: true }, 'พนักงานแต่งกายได้ถูกต้องตามที่กำหนด (WI-LO-XX-09)', 'failed', '22-02-18 : 10.45 pm', 'admin'),
      createData({ isSwitch: true, value: false }, { isCheckbox: false, value: true }, 'พนักงานมีสุขภาพแข็งแรงไม่มีอาการป่วย เช่น ไข้หวัด ท้องเสีย บาดแผลเปิดตามร่างกาย', 'failed', '22-02-18 : 10.45 pm', 'admin'),
    ],
  };

  render() {
    const { rows } = this.state;
    const mainColumns = lineClearanceReportData.tableColumns;
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

export default withStyles(styles)(LineClearanceReport);
