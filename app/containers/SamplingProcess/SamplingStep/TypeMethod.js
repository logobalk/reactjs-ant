import React from 'react';
import { Select, Radio, Row, Col, Typography, Card, Input, Popover, Icon } from 'antd';
import styles from './index.less';

const RadioGroup = Radio.Group;
const { Option } = Select;
const { Text } = Typography;
const { TextArea } = Input;
const typeInfo = {
  receiving: 'เป็นรายการสินค้ากลุ่มที่มาจากการทำรับปกติ',
  recurring: 'เป็นรายการที่เคยผ่านการสุ่มและมีการเก็บในสต็อก และถึงรอบในการสุ่ม',
  repeat: 'เป็นรายการที่ทาง QC ขอเบิกเพิ่มในการทำวิเคราะห์ของ QC',
};
class MethodStep extends React.Component {
  render() {
    return (
      <Card className={styles.card}>
        <Row>
          <Col xs={5} style={{ textAlign: 'right' }}><Text strong>Select sampling type :</Text></Col>
          <Col xs={14} style={{ marginLeft: 10 }}>
            <RadioGroup onChange={() => { }}>
              <Radio value={1}>Receiving <Popover content={typeInfo.receiving}><Icon type="question-circle" /></Popover></Radio>
              <Radio value={2}>Recurring <Popover content={typeInfo.recurring}><Icon type="question-circle" /></Popover></Radio>
              <Radio value={3}>Repeat <Popover content={typeInfo.repeat}><Icon type="question-circle" /></Popover></Radio>
            </RadioGroup>
          </Col>
        </Row>
        <p />
        <Row>
          <Col xs={5} style={{ textAlign: 'right' }}><Text strong>ระบุเหตุผล :</Text></Col>
          <Col xs={14} style={{ marginLeft: 10 }}>
            <TextArea rows={4} />
          </Col>
        </Row>
        <p />
        <Row>
          <Col xs={5} style={{ textAlign: 'right' }}><Text strong>Date&Time :</Text></Col>
          <Col xs={12} style={{ marginLeft: 10 }}>21/03/2019 09:03:02</Col>
        </Row>
        <p />
        <Row>
          <Col xs={5} style={{ textAlign: 'right' }}><Text strong>Select sampling method :</Text></Col>
          <Col xs={14} style={{ marginLeft: 10, marginBottom: 8 }}>
            <RadioGroup onChange={() => { }} defaultValue={1}>
              <Radio value={1}>Weighing scale</Radio>
              <Radio value={2}>Volumetric Measuring</Radio>
              <Radio value={3}>Full Drum</Radio>
            </RadioGroup>
          </Col>
        </Row>
        <p />
        <Row>
          <Col xs={5} style={{ textAlign: 'right' }}><Text strong>Select weighing machine :</Text></Col>
          <Col xs={9} style={{ marginLeft: 10 }}>
            <Select
              placeholder="---Please select weighing machine---"
              style={{ width: '100%' }}
            >
              <Option value="1">Sartorius - SECURA3102-1S</Option>
              <Option value="2">Mettler - ICS685</Option>
            </Select>
          </Col>
        </Row>
        <p />
        <Row>
          <Col xs={5} style={{ textAlign: 'right' }}><Text strong>Select volumetric type :</Text></Col>
          <Col xs={9} style={{ marginLeft: 10 }}>
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
          </Col>
        </Row>
        <p />
        <Row>
          <Col xs={5} style={{ textAlign: 'right' }}><Text strong>Select cylinder volume :</Text></Col>
          <Col xs={9} style={{ marginLeft: 10 }}>
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
          </Col>
        </Row>
        <p />
        <Row>
          <Col xs={5} style={{ textAlign: 'right' }}></Col>
          <Col xs={9} style={{ marginLeft: 10 }}>
            <Input placeholder="กรุณาระบุขนาดกระบวกตวง (ml)" />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default MethodStep;