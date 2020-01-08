import React from 'react';
// import PropTypes from 'prop-types';
import { Tabs, InputNumber, Icon, Switch, DatePicker, Input, Radio } from 'antd';

import Table from 'containers/MaterialIdentityLabel/table';
import columns from './columns.env';
import columnsTools from './columns.tools';

// const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const { TabPane } = Tabs;
const EvaluateRadio = (
  <RadioGroup onChange={() => {}}>
    <Radio value={1}>Passed</Radio>
    <Radio value={2}>Failed</Radio>
  </RadioGroup>
);
class SpecificationContent extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  renderEnvironment = () => [
    {
      id: 1,
      creteria: 'Temperature  Condition',
      acceptance: 'NMT 25 C (Fix) (ref.plant data store 1 in "mm03")',
      result: <InputNumber min={1} max={100} defaultValue={23} onChange={() => { }} />,
    },
    {
      id: 2,
      creteria: 'Special condition 2',
      acceptance: 'NMT 45% Relative Humidity',
      result: <InputNumber
        defaultValue={45}
        min={0}
        max={100}
        formatter={value => `${value}%`}
        parser={value => value.replace('%', '')} onChange={() => { }}
      />,
    },
    {
      id: 3,
      creteria: 'Special condition 3',
      acceptance: 'Flush N2',
      result: <Switch checkedChildren="Done" defaultChecked />,
    },
    {
      id: 4,
      creteria: 'Special condition 4',
      acceptance: 'Protect form light',
      result: <Switch checkedChildren="Done" />,
    },
  ];

  renderTools = () => [
    {
      id: 1,
      seq: 1,
      creteria: 'อุปกรณ์การสุ่ม และภาชนะบรรจุต้องสะอาด และจัดเก็บไม่เกิน 7 วัน นับจากวันที่ล้างถึงวันที่สุ่ม',
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
      creteria: 'อุปกรณ์และภาชนะบรรจุสำหรับสุ่มสำหรับงาน Microbial limit Test หรือ Sterility ต้องผ่านการอบฆ่าเชื้อ',
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
      creteria: <div>Note : <Input /></div>,
    },
  ];


  render() {


    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><Icon type="file-text" />Environment & Procedure</span>} key="1">
          <Table
            withNoFilter
            columns={columns}
            data={this.renderEnvironment()}
            tableOptions={{
              bordered: true,
              hidePagination: true,
            }}
          />
        </TabPane>
        <TabPane tab={<span><Icon type="tool" />Tools Checking</span>} key="2">
          <Table
            withNoFilter
            columns={columnsTools}
            data={this.renderTools()}
            tableOptions={{
              bordered: true,
              hidePagination: true,
            }}
          />
        </TabPane>
      </Tabs>
    );
  }
}

export default SpecificationContent;