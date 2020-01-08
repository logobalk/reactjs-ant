import React from 'react';
import { Radio, Row, Col, Typography, Popover, Icon, Input, Card } from 'antd';

const RadioGroup = Radio.Group;
const { Text } = Typography;
const { TextArea } = Input;
const typeInfo = {
  receiving: 'เป็นรายการสินค้ากลุ่มที่มาจากการทำรับปกติ',
  recurring: 'เป็นรายการที่เคยผ่านการสุ่มและมีการเก็บในสต็อก และถึงรอบในการสุ่ม',
  repeat: 'เป็นรายการที่ทาง QC ขอเบิกเพิ่มในการทำวิเคราะห์ของ QC',
};
class TypeStep extends React.Component {
  render() {
    return (
      <Card>
        <Row>
          <Col xs={4} style={{ textAlign: 'right' }}><Text strong>Select sampling type :</Text></Col>
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
          <Col xs={4} style={{ textAlign: 'right' }}><Text strong>ระบุเหตุผล :</Text></Col>
          <Col xs={14} style={{ marginLeft: 10 }}>
            <TextArea rows={4} />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default TypeStep;