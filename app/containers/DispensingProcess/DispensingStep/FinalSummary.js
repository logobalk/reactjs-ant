import React, { Fragment } from 'react';

import ListItem from 'components/ListItemAnt';

import Table from './table';
import columns from './table/columns.summary.weighing';

const createData = (
  id,
  roomNo,
  itemCode,
  itemName,
  batchNo,
  quantity,
  actualQty,
  unit,
  status,
  processOrder,
  validStatus,
  numOfWeighting,
) => ({
  id,
  roomNo,
  itemCode,
  itemName,
  batchNo,
  quantity,
  actualQty,
  unit,
  status,
  processOrder,
  validStatus,
  numOfWeighting,
});
const cardHeadStyle = {
  padding: '0 18px',
  fontSize: 15,
};
const mock = [
  { label: 'Line Clearance' },
  { label: '1) การประเมินผล Presure Diff. เป็นไปตามที่กำหนด Ref. FM-LO-XX-10', extra: true, value: 'Passed' },
  { label: '2) การตรวจสอบความสะอาด ห้องต้องสะอาด ไม่มีรอยแตกร้าว ไม่มีฝุ่นผง', extra: true, value: 'Passed' },
  { label: '3) ไม่พบวัสดุอื่นที่ไม่เกี่ยวข้อง หรือวัสดุที่ผ่านการใช้งานแล้ว', extra: true, value: 'Passed' },
  { label: '4) พนักงานแต่งกายได้ถูกต้องตามที่กำหนด (WI-LO-XX-09)', extra: true, value: 'Passed' },
  { label: '5) พนักงานมีสุขภาพแข็งไม่มีอาการป่วย เช่น ไข้หวัด ท้องเสีย บาดแผลเปิดตามร่างกาย', extra: true, value: 'Passed' },
  { label: '6) Note', extra: true, value: '-' },
  { label: 'Environment & Procedure' },
  { label: '1) Temperature Condition : 	NMT 25 C (Fix) (ref.plant data store 1 in "mm03")', extra: true, value: '23 C' },
  { label: '2) Special condition 2 : NMT 45% Relative Humidity', extra: true, value: '45%' },
  { label: '3) Special condition 3 : Flush N2', extra: true, value: 'Passed' },
  { label: '4) Special condition 4 : Protect form light', extra: true, value: 'Passed' },
  { label: 'Dispensing Process' },
  { label: '1) Dispensing Method', extra: true, value: 'Weighing Scale' },
  {
    label: '2) Dispensing Information',
    value:
      <Table
        withNoFilter
        width={1000}
        columns={columns}
        data={[
          createData(1, '108', '10000001', 'Hydroxine Di Hydrochloride', 'M000000011', '12.569', '12.569', 'Kg', 'Pending', '1051079', 'Incomplete', '1/2'),
          createData(2, '108', '10000001', 'Hydroxine Di Hydrochloride', 'M000000011', '0.010', '0.010', 'G', 'Pending', '1051080', 'Complete', '1/1'),
        ]}
        tableOptions={{
          noTheme: true,
          bordered: true,
          hidePagination: true,
        }}
      />,
  },
];
class FinalSummaryStep extends React.Component {
  render() {
    return (
      <ListItem
        title={<Fragment>Final Summary</Fragment>}
        icon="file-done"
        data={mock}
        options={{
          headStyle: cardHeadStyle,
          style: {
            marginTop: 16,
            border: '1px solid rgba(172, 31, 45, 0.4)',
          },
        }}
      />
    );
  }
}

export default FinalSummaryStep;