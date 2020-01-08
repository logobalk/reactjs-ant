import React, { Fragment } from 'react';
import { Radio, Row, Col, Card, Typography, Input, Select, Icon, Button } from 'antd';
import MaterialDetail from 'containers/IncidentForm/MaterialDetail';
import ListItem from 'components/ListItemAnt';
import Table from 'components/AntTable/editable';

import columns from './columns.container';
import styles from './index.less';
import './index.css';

const RadioGroup = Radio.Group;
const { Option } = Select;
const { TextArea } = Input;
const cardHeadStyle = {
  padding: '0 18px',
  fontSize: 15,
};
const ColorSelect = (
  <Select
    placeholder="---เลือกสี---"
    style={{ width: '100%' }}
  >
    <Option value="1"><Icon type="border" style={{ color: 'black', background: 'black', borderRadius: 5 }} /> ดำ</Option>
    <Option value="2"><Icon type="border" style={{ color: '#ad6800', background: '#ad6800', borderRadius: 5 }} /> น้ำตาล</Option>
    <Option value="3"><Icon type="border" style={{ color: '#7cb305', background: '#7cb305', borderRadius: 5 }} /> เขียว</Option>
    <Option value="4"><Icon type="border" style={{ color: '#d4b106', background: '#d4b106', borderRadius: 5 }} /> เหลือง</Option>
    <Option value="5"><Icon type="border" style={{ color: '#bfbfbf', background: '#bfbfbf', borderRadius: 5 }} /> เทา</Option>
    <Option value="6">ระบุเอง</Option>
  </Select>
);
const mock = [
  { label: '1) Item Code', value: '10000001' },
  { label: '2) Item Name', value: 'HYDROXYZINE DI HYDROCHILORIDE' },
  { label: '3) Batch No.', value: 'M000002079' },
  { label: '4) Mfg. Date', value: '03.07.2016' },
  { label: '5) Exp. Date', value: '11.05.2023' },
  { label: '6) Vendor Batch', value: '25.10.2018' },
  { label: '7) Quantity of Sampling', value: '1' },
  { label: '8) Total Quantity', value: '1' },
  { label: '9) Lot Size', value: '1' },
  { label: '10) Storage Condition', value: 'SB59' },
  { label: '11) Protect from Light', value: 'xxx' },
  { label: '12) Flush N2', value: 'xxx' },
  { label: '13) Sampling Quantity', value: 'xxx' },
  { label: '14) Sampling Category', value: 'xxx' },
];
const mock2 = [
  {
    label: '15) Type of Raw',
    extra: true,
    value:
      <Fragment>
        <p />
        <RadioGroup onChange={() => { }}>
          <Radio value={1}>API</Radio>
          <Radio value={2}>Excipient</Radio>
        </RadioGroup>
      </Fragment>,
  },
  {
    label: '16) SB Drum No.',
    extra: true,
    value:
      <Fragment>
        <RadioGroup onChange={() => { }}>
          <Radio value={1}>Normal  Sample</Radio>
          <Radio value={2}>Deviation  Sample</Radio>
        </RadioGroup>
      </Fragment>,
    description:
      <Fragment>
        <p />
        <Input placeholder="SB Drum No." />
      </Fragment>,
  },
  {
    label: '17) Supplier Drum no.',
    extra: true,
    value:
      <Fragment>
        <RadioGroup onChange={() => { }}>
          <Radio value={1}>Normal  Sample</Radio>
          <Radio value={2}>Deviation  Sample</Radio>
        </RadioGroup>
      </Fragment>,
    description:
      <Fragment>
        <p />
        <Input placeholder="Supplier Drum No." />
      </Fragment>,
  },
  {
    label: '18) ประเภทภาชนะบรรจุภายนอก',
    value:
      <Fragment>
        <p />
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12}>
            <Select
              placeholder="---กรุณาเลือกประเภทภาชนะบรรจุภายนอก---"
              style={{ width: '100%' }}
            >
              <Option value="1">ถัง</Option>
              <Option value="2">ถุง</Option>
              <Option value="3">กล่อง</Option>
              <Option value="4">กระป๋อง</Option>
              <Option value="5">ขวด</Option>
              <Option value="6">กระดาษ</Option>
              <Option value="7">กระดาษอัด</Option>
              <Option value="8">พลาสติก</Option>
              <Option value="9">ไม้</Option>
              <Option value="10">กาว</Option>
              <Option value="11">ระบุเอง</Option>
            </Select>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Input placeholder="ระบุประเภทภาชนะบรรจุภายนอก" />
          </Col>
        </Row>
      </Fragment>,
  },
  {
    label: '19) การล็อกปากภาชนะ',
    value:
      <Fragment>
        <p />
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12}>
            <Select
              placeholder="---กรุณาเลือกการล็อกปากภาชนะ---"
              style={{ width: '100%' }}
            >
              <Option value="1">เข็มขัดอลูมิเนียม</Option>
              <Option value="2">เข็มขัดพลาสติก</Option>
              <Option value="3">การซิลด้วยความร้อน</Option>
              <Option value="4">การเย็บ</Option>
              <Option value="5">กาว</Option>
              <Option value="6">ระบุเอง</Option>
            </Select>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Input placeholder="ระบุที่ล็อคปากภาชนะ" />
          </Col>
        </Row>
      </Fragment>,
  },
  {
    label: '20) สีตัวล็อคภาชนะ',
    value:
      <Fragment>
        <p />
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12}>
            {ColorSelect}
          </Col>
          <Col xs={24} sm={24} md={12}>
            <Input placeholder="ระบุสีตัวล็อคพลากติก" />
          </Col>
        </Row>
      </Fragment>,
  },
  {
    label:
      <Fragment>
        <span>21) ผลการตรวจสอบภาชนะบรรจุภายนอก</span>
        <span style={{ float: 'right' }}>
          <RadioGroup onChange={() => { }}>
            <Radio value={1}>สมบูรณ์</Radio>
            <Radio value={2}>ไม่สมบูรณ์</Radio>
          </RadioGroup>
        </span>
      </Fragment>,
    value:
      <Fragment>
        ระบุเหตุผล (กรณีไม่สมบูรณ์) <TextArea />
      </Fragment>,
  },
];
const mock3 = [
  {
    label: '23) Standard Appearance RM (QC)',
  },
  {
    label: '24) สรุปผลการตรวจสอบ Appearance',
    extra: true,
    value:
      <RadioGroup onChange={() => { }}>
        <Radio value={1}>Comform</Radio>
        <Radio value={2}>Non-Conform</Radio>
      </RadioGroup>,
  },
  {
    label:
      <Fragment>
        <span>25) บันทึกผลการตรวจสอบสิ่งแปลกปลอม</span>
        <span style={{ float: 'right' }}>
          <RadioGroup onChange={() => { }}>
            <Radio value={1}>ไม่พบ</Radio>
            <Radio value={2}>พบ</Radio>
          </RadioGroup>
        </span>
      </Fragment>,
    value:
      <Fragment>
        ระบุเหตุผล (กรณีพบสิ่งแปลกปลอม) <TextArea />
      </Fragment>,
  },
  {
    label: '26) พบความผิดปกติ',
    extra: true,
    value:
      <Fragment>
        <RadioGroup onChange={() => { }}>
          <Radio value={1}>ไม่พบ</Radio>
          <Radio value={2}>พบ</Radio>
        </RadioGroup>
      </Fragment>,
    description:
      <Fragment>
        <p />
        <Input placeholder="ระบุหมายเลข Drum ในกรณีพบความผิดปกติ" />
      </Fragment>,
  },
];

class InformationStep extends React.Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col xs={24} md={8}>
            <MaterialDetail
              data={mock}
              horizontal
              options={{
                bordered: true,
                headStyle: cardHeadStyle,
                style: {
                  border: '1px solid rgba(172, 31, 45, 0.4)',
                },
              }}
            />
          </Col>
          <Col xs={24} md={16}>
            <ListItem
              title={<Fragment>Sampling Information</Fragment>}
              icon="experiment"
              data={mock2}
              options={{
                headStyle: cardHeadStyle,
                style: {
                  border: '1px solid rgba(172, 31, 45, 0.4)',
                },
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={24}>
            <Card
              className={styles.card}
              style={{
                marginTop: 16,
              }}
              bodyStyle={{
                padding: '15px 18px',
              }}
            >
              <Row>
                <Col xs={24} sm={12}>
                  <h4 className="ant-list-item-meta-title">
                    22) ประเภทภาชนะบรรจุภายใน
                  </h4>
                </Col>
                <Col xs={24} sm={12} style={{ textAlign: 'right' }}>
                  <Button icon="plus" type="primary">เพิ่มชั้น</Button>
                </Col>
              </Row>
              <p />
              <Table
                className="container-table"
                rowKey="id"
                size="small"
                columns={columns}
                data={{
                  list: [
                    {
                      id: 1,
                      type:
                        <Select
                          placeholder="---กรุณาเลือกภาชนะบรรจุ---"
                          style={{ width: '100%' }}
                        >
                          <Option value="1">ถุงพลาสติก</Option>
                          <Option value="2">ถุงกระดาษ</Option>
                          <Option value="3">ถุงอลูมิเนียม</Option>
                        </Select>,
                      color:
                        <Row gutter={7}>
                          <Col xs={14}>{ColorSelect}</Col>
                          <Col xs={10}><Input placeholder="ระบุสี" /></Col>
                        </Row>,
                      lock:
                        <Fragment>
                          <Select
                            placeholder="---กรุณาเลือกการล็อค---"
                            style={{ width: '100%' }}
                          >
                            <Option value="1">การซิลด้วยความร้อน</Option>
                            <Option value="2">มัดสายรัด</Option>
                          </Select>
                          <Row gutter={7}>
                            <Col xs={14}>
                              <Select
                                placeholder="---เลือกรูปแบบสายรัด---"
                                style={{ width: '100%' }}
                              >
                                <Option value="1">แบบที่ 1</Option>
                                <Option value="2">แบบที่ 2</Option>
                                <Option value="3">ระบุเอง</Option>
                              </Select>
                            </Col>
                            <Col xs={10}><Input placeholder="ระบุรูปแบบสายรัด" /></Col>
                          </Row>
                          <Row gutter={7}>
                            <Col xs={14}>{ColorSelect}</Col>
                            <Col xs={10}><Input placeholder="ระบุสี" /></Col>
                          </Row>
                        </Fragment>,
                      status:
                        <Fragment>
                          <RadioGroup onChange={() => { }}>
                            <Radio value={1}>ปกติ</Radio>
                            <Radio value={2}>ผิดปกติ</Radio>
                          </RadioGroup>
                          <p />
                          ระบุเหตุผล (กรณีผิดปกติ) <TextArea />
                        </Fragment>,
                    },
                    // { id: 2 },
                    // { id: 3 },
                  ],
                }}
                loading={false}
                hidePagination
                scroll={{ x: 1300 }}
                bordered
              />
            </Card>
          </Col>
        </Row>
        <ListItem
          title={<Fragment>Appearance</Fragment>}
          icon="file-done"
          data={mock3}
          options={{
            headStyle: cardHeadStyle,
            style: {
              marginTop: 16,
              border: '1px solid rgba(172, 31, 45, 0.4)',
            },
          }}
        />
      </div>
    );
  }
}

export default InformationStep;