/**
 *
 * Indident Filter Form
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import  history from 'utils/history';
import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
// import classNames from 'classnames';
import styles from '../index.less';

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

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;

class IncidentFilterForm extends React.PureComponent {
  static propTypes = {};

  static defaultProp = {};

  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('nothing to do!');
      console.log('Received values of form: ', values);
    });
  }

  goToCreate = () => {
    history.push('/incident-form');
  }

  render() {
    // const { overlayClassName } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSearch}>
        <Row>
          <Col md={12}>
            <FormItem label="Incident Code" {...formItemLayout}>
              {getFieldDecorator('incidentCode', {
                rules: [{
                  required: false,
                  message: 'Please input incident code!',
                }],
              })(
                <Input placeholder="Please input incident code" />
              )}
            </FormItem>
          </Col>
          <Col md={12}>
            <FormItem label="Material Code" {...formItemLayout}>
              {getFieldDecorator('materialCode', {
                rules: [{
                  required: false,
                  message: 'Please input material code!',
                }],
              })(
                <Input placeholder="Please input material code" />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormItem label="Conclusion Status" {...formItemLayout}>
              {getFieldDecorator('status', {
                rules: [{
                  required: false,
                  message: 'Please select status!',
                }],
              })(
                <Select
                  onChange={this.handleChange}
                  placeholder="Please select status"
                >
                  <Option value="accept">Accept</Option>
                  <Option value="reject">Reject</Option>
                  <Option value="pending">Pending</Option>
                </Select>
              )}
            </FormItem>
          </Col>
          <Col md={12}>
            <FormItem label="Material Name" {...formItemLayout}>
              {getFieldDecorator('materialName', {
                rules: [{
                  required: false,
                  message: 'Please input material name!',
                }],
              })(
                <Input placeholder="Please input material name" />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormItem label="Incident date" {...formItemLayout}>
              {getFieldDecorator('incidentDate', {
                rules: [{
                  required: false,
                  message: 'Please input incident date!',
                }],
              })(
                <RangePicker style={{ width: '100%' }} />
              )}
            </FormItem>
          </Col>
          <Col md={12}>
            <FormItem label="Inspection Lot" {...formItemLayout}>
              {getFieldDecorator('inspectionLot', {
                rules: [{
                  required: false,
                  message: 'Please input inspection lot!',
                }],
              })(
                <Input placeholder="Please input inspection lot" />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormItem label="Batch Number" {...formItemLayout}>
              {getFieldDecorator('batch', {
                rules: [{
                  required: false,
                  message: 'Please input batch number!',
                }],
              })(
                <Input placeholder="Please input batch number" />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button type="primary" icon="plus" className={styles.addBtn} onClick={this.goToCreate}>Create</Button>
            <span style={{ marginLeft: 7 }} />
            <Button type="primary" htmlType="submit" icon="search">Search</Button>
            <span style={{ marginLeft: 7 }} />
            <Button onClick={this.handleReset} icon="redo">Reset</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default IncidentFilterForm;
