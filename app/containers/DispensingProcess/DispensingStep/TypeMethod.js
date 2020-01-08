import React, { Fragment } from 'react';
import { Select, Radio, Input, DatePicker } from 'antd';
import ListItem from 'components/ListItemAnt';
// import Table from 'components/AntTable/editable';
// import styles from './index.less';
// import columns from './columns.weighing.calibration';

const RadioGroup = Radio.Group;
const { Option } = Select;
const mock = [
  {
    label: 'Select dispensing method',
    extra: true,
    value:
      <RadioGroup onChange={() => { }} defaultValue={1}>
        <Radio value={1}>Weighing Scale</Radio>
        <Radio value={2}>Volumetric Measuring</Radio>
        <Radio value={3}>Full Drum</Radio>
      </RadioGroup>,
  },
  // {
  //   label:
  //     <Fragment>
  //       <span>Weighing scale</span>
  //       <Button icon="plus" type="primary" style={{ float: 'right', marginBottom: 15 }}>เพิ่มเครื่องชั่ง</Button>
  //     </Fragment>,
  //   className: styles.weighingTable,
  //   value:
  //     <Table
  //       className="weighing-table"
  //       rowKey="id"
  //       size="small"
  //       columns={columns}
  //       data={{
  //         list: [
  //           {
  //             id: 1,
  //             type:
  //               <Select
  //                 placeholder="---กรุณาเลือกเครื่องชั่ง---"
  //                 style={{ width: '100%' }}
  //               >
  //                 <Option value="1">ถุงพลาสติก</Option>
  //                 <Option value="2">ถุงกระดาษ</Option>
  //                 <Option value="3">ถุงอลูมิเนียม</Option>
  //               </Select>,
  //             lock:
  //               <Fragment>
  //                 <Select
  //                   placeholder="---กรุณาเลือกการล็อค---"
  //                   style={{ width: '100%' }}
  //                 >
  //                   <Option value="1">การซิลด้วยความร้อน</Option>
  //                   <Option value="2">มัดสายรัด</Option>
  //                 </Select>
  //                 <Row gutter={7}>
  //                   <Col xs={14}>
  //                     <Select
  //                       placeholder="---เลือกรูปแบบสายรัด---"
  //                       style={{ width: '100%' }}
  //                     >
  //                       <Option value="1">แบบที่ 1</Option>
  //                       <Option value="2">แบบที่ 2</Option>
  //                       <Option value="3">ระบุเอง</Option>
  //                     </Select>
  //                   </Col>
  //                   <Col xs={10}><Input placeholder="ระบุรูปแบบสายรัด" /></Col>
  //                 </Row>
  //               </Fragment>,
  //             status:
  //               <Fragment>
  //                 <RadioGroup onChange={() => { }}>
  //                   <Radio value={1}>ปกติ</Radio>
  //                   <Radio value={2}>ผิดปกติ</Radio>
  //                 </RadioGroup>
  //                 <p />
  //                 ระบุเหตุผล (กรณีผิดปกติ) <TextArea />
  //               </Fragment>,
  //           },
  //         ],
  //       }}
  //       loading={false}
  //       hidePagination
  //       scroll={{ x: 1000 }}
  //       bordered
  //     />,
  // },
  // {
  //   label: 'Weighing Scale Efficiency',
  //   extra: true,
  //   value: '21/03/2019 09:03:02',
  // },
  // {
  //   label: 'Weighing Scale No.',
  //   extra: true,
  //   value:
  //     <Select
  //       placeholder="---Please select weighing machine---"
  //       style={{ width: '100%' }}
  //     >
  //       <Option value="1">No. 1 Sartorius - SECURA3102-1S</Option>
  //       <Option value="2">No. 2 Mettler - ICS685</Option>
  //     </Select>,
  // },
  // {
  //   label: 'Weighing Calibration',
  //   className: styles.weighingTable,
  //   value:
  //     <Table
  //       className="weighing-table"
  //       rowKey="id"
  //       size="small"
  //       columns={columns}
  //       data={{
  //         list: [
  //           {
  //             id: 1,
  //             criteria: 'Next Calibration due date',
  //             result: <DatePicker style={{ width: '100%' }} />,
  //           },
  //           {
  //             id: 2,
  //             criteria: 'Daily Check (FM-QA-CV-24)',
  //             result: '1.812 g (10 times)',
  //             action: <Button type="primary" icon="dashboard">Calibrate</Button>,
  //           },
  //         ],
  //       }}
  //       loading={false}
  //       hidePagination
  //       scroll={{ x: 900 }}
  //       bordered
  //     />,
  // },
  {
    label: 'Select volumetric type',
    extra: true,
    value:
      <Fragment>
        <Select
          placeholder="---Please select volumetric type---"
          style={{ width: '100%' }}
        >
          <Option value="1">Sample thief</Option>
          <Option value="2">Sample slot</Option>
          <Option value="3">Spoon</Option>
          <Option value="4">Dip tube</Option>
          <Option value="5">Cylinder</Option>
        </Select>
      </Fragment>,
  },
  {
    label: 'Select cylinder volume',
    extra: true,
    value:
      <Fragment>
        <Select
          placeholder="---Please select cylinder volumn---"
          style={{ width: '100%' }}
        >
          <Option value="1">100 ml</Option>
          <Option value="2">250 ml</Option>
          <Option value="3">251 ml</Option>
          <Option value="4">1000 ml</Option>
          <Option value="5">2000 ml</Option>
          <Option value="6">5000 ml</Option>
          <Option value="7">ระบุเอง</Option>
        </Select>
        <span style={{ marginLeft: 7 }} />
        <Input placeholder="กรุณาระบุขนาดกระบวกตวง (ml)" />
      </Fragment>,
  },
  {
    label: 'Calibration Due Date',
    extra: true,
    value:
      <DatePicker />,
  },
];
const cardHeadStyle = {
  padding: '0 18px',
  fontSize: 15,
};
class MethodStep extends React.Component {
  render() {
    return (
      <ListItem
        title={<Fragment>Dispensing Method</Fragment>}
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

export default MethodStep;