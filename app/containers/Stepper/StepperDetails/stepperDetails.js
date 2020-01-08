import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Form, Row, Col, Select, Input, Tooltip, Icon, DatePicker, Button } from 'antd';
import moment from 'moment';


class StepperDetails extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  handleFormChange = name => (event) => {
    console.log('event===>', event)
    const { setFiledsDetail, fields } = this.props;
    const newFields = { ...fields, [name]: { value: event } };
    setFiledsDetail(
      newFields
    );
  }

  // handleSelectChange = (value) => {
  //   console.log(value);
  //   this.props.form.setFieldsValue({
  //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
  //   });
  // }

  handleOnStart = () => {
    const { setStartStatus, fields } = this.props;
    console.log('fields====>', fields)
    setStartStatus(true);
  }

  render() {
    const { classes, fields } = this.props;
    const { Option } = Select;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
        md: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
        md: { span: 16 },
      },
    };

    return (
      <Form {...formItemLayout}>
        <Row>
          <Col md={12}>
            <Form.Item
              label="Grade"
            // hasFeedback
            // validateStatus="error"
            >
              {getFieldDecorator('grade', {
                rules: [{
                  required: true,
                }],
              })(
                <Select
                  onChange={this.handleFormChange('grade')}
                  placeholder="Please select grade"
                // value={fields.grade.value}
                >
                  <Option value="A">A</Option>
                  <Option value="C">C</Option>
                  <Option value="D">D</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label="Room No."
            >
              {getFieldDecorator('roomNo', {
                rules: [
                  { required: true, message: 'Please select your room number!', type: 'array' },
                ],
              })(
                <Select
                  mode="multiple"
                  placeholder="Please select room number"
                  onChange={this.handleFormChange('roomNo')}
                // value={fields.roomNo.value}
                >
                  <Option value="104">104</Option>
                  <Option value="107">107</Option>
                  <Option value="108">108</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label="Check by"
            // hasFeedback
            >
              {getFieldDecorator('checkBy', {
                rules: [{
                  required: true,
                }],
              })(
                <Input
                  // value={fields.checkBy.value}
                  onChange={this.handleFormChange('checkBy')}
                  placeholder="Enter full name" id="success" suffix={
                    <Tooltip title="Scan Barcode">
                      <Icon style={{ fontSize: '1.5em' }} type="barcode" />
                    </Tooltip>
                  } />
              )
              }
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label="Check Date"
              hasFeedback
            >
              {getFieldDecorator('startDateTime', {
                rules: [{
                  required: true,
                }],
              })(
                <DatePicker
                  // disabled
                  style={{ width: '100%' }}
                  showTime
                  // defaultValue={fields.startDateTime.value}
                  onChange={this.handleFormChange('startDateTime')}
                // onOk={onOk}
                />
              )
              }
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label="Pressure guage No."
              hasFeedback
            >
              {getFieldDecorator('pressureNo', {
                rules: [{
                  required: true,
                }],
              })(
                <Input
                  // value={fields.pressureNo.value}
                  onChange={this.handleFormChange('pressureNo')}
                  placeholder="Enter guage No." id="success"
                />
              )
              }
            </Form.Item>
          </Col>
          <Col md={12}>
            <Button onClick={this.handleOnStart} type="primary" style={{ float: 'right', width: '30%' }} icon="play-circle">Start</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default compose(
  Form.create())(StepperDetails);
