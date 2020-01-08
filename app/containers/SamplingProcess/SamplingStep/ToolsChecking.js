import React from 'react';
import { DatePicker, Input, Radio } from 'antd';
import Table from 'containers/MaterialIdentityLabel/table';
import columns from './columns.tools';

const RadioGroup = Radio.Group;
const EvaluateRadio = (
  <RadioGroup onChange={() => {}}>
    <Radio value={1}>Passed</Radio>
    <Radio value={2}>Failed</Radio>
  </RadioGroup>
);
class ToolCheckingStep extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  renderTools = () => [
    {
      id: 1,
      seq: 1,
      criteria: 'อุปกรณ์การสุ่ม และภาชนะบรรจุต้องสะอาด และจัดเก็บไม่เกิน 7 วัน นับจากวันที่ล้างถึงวันที่สุ่ม',
      activities: 'Cleaning Date',
      date: <DatePicker onChange={() => { }} />,
      evaluate: EvaluateRadio,
    },
    {
      id: 2,
      activities: 'Sampling Date',
      date: <DatePicker onChange={() => { }} />,
    },
    {
      id: 3,
      seq: 2,
      criteria: 'อุปกรณ์และภาชนะบรรจุสำหรับสุ่มสำหรับงาน Microbial limit Test หรือ Sterility ต้องผ่านการอบฆ่าเชื้อ',
      activities: 'Sterile Date',
      date: <DatePicker onChange={() => { }} />,
      evaluate: EvaluateRadio,
    },
    {
      id: 4,
      activities: 'Sampling Date',
      date: <DatePicker onChange={() => { }} />,
    },
    {
      id: 5,
      criteria: <div>Note : <Input /></div>,
    },
  ];

  render() {
    return (
      <Table
        withNoFilter
        columns={columns}
        data={this.renderTools()}
        tableOptions={{
          bordered: true,
          hidePagination: true,
        }}
      />
    );
  }
}

export default ToolCheckingStep;