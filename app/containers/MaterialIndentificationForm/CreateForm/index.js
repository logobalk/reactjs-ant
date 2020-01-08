import React, { Fragment } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Form, Row, Col, Input, InputNumber, Select, Popover, Icon, Button } from 'antd';
import PropTypes from 'prop-types';
import history from 'utils/history';
import Layout from '../Layout';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
    md: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
    md: { span: 18 },
  },
};
const inlineStyle = {
  display: 'inline-block',
  width: 'calc(50% - 5px)',
};
const FormItem = Form.Item;
const { Option } = Select;
/* eslint-disable react/prefer-stateless-function */
export class CreateForm extends React.Component {
  static propTypes = {
    form: PropTypes.object,
  };

  static defaultProps = {};

  handleSubmit = (e) => {
    e.preventDefault();
  }

  onCancel = () => {
    history.push('/material-identification');
  }

  goToDetail = () => {
    history.push('/material-identification/detail');
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout
        title="สร้างบันทึกการส่งวิเคราะห์"
        extra={
          <Fragment>
            <Button onClick={this.onCancel}>Cancel</Button>
            <span style={{ marginLeft: 7 }} />
            <Button icon="check" type="primary" onClick={this.goToDetail}>Done</Button>
          </Fragment>
        }
      >
        <Form onSubmit={this.handleSubmit}>
          <QueueAnim>
            <Row key="1">
              <Col md={12}>
                <FormItem label="Material No." {...formItemLayout}>
                  {getFieldDecorator('materialNo', {
                    rules: [{
                      required: true,
                      message: 'Please input material no.!',
                    }],
                  })(
                    <Input placeholder="Please input material no." />
                  )}
                </FormItem>
              </Col>
              <Col md={12}>
                <FormItem label="Material Name" {...formItemLayout}>
                  {getFieldDecorator('materialName', {
                    rules: [{
                      required: true,
                      message: 'Please input material name!',
                    }],
                  })(
                    <Input placeholder="Please input material name" />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row key="2">
              <Col md={12}>
                <FormItem label="Batch No." {...formItemLayout}>
                  {getFieldDecorator('batchNo', {
                    rules: [{
                      required: true,
                      message: 'Please input batch no.!',
                    }],
                  })(
                    <Input placeholder="Please input batch no." />
                  )}
                </FormItem>
              </Col>
              <Col md={12}>
                <FormItem label="Total Carton" {...formItemLayout} style={{ marginBottom: 0 }}>
                  <FormItem style={inlineStyle}>
                    {getFieldDecorator('total', {
                      rules: [{
                        required: true,
                        message: 'Please input total carton!',
                      }],
                    })(
                      <InputNumber
                        precision={3}
                        placeholder="Please input total carton"
                        style={{ width: '100%' }}
                      />
                    )}
                  </FormItem>
                  <span style={{ ...inlineStyle, width: '10px', textAlign: 'center' }} />
                  <FormItem style={inlineStyle}>
                    {getFieldDecorator('unit', {
                      rules: [{
                        required: true,
                        message: 'Please select unit!',
                      }],
                    })(
                      <Select style={{ width: '100%' }} placeholder="---Please select unit---">
                        <Option value="1">G</Option>
                        <Option value="2">KG</Option>
                        <Option value="3">Drum</Option>
                      </Select>
                    )}
                  </FormItem>
                </FormItem>
              </Col>
            </Row>
            <Row key="3">
              <Col md={12}>
                <FormItem label="Operator Name" {...formItemLayout}>
                  {getFieldDecorator('operator', {
                    rules: [{
                      required: true,
                    }],
                  })(
                    <Input
                      addonAfter={
                        <Popover
                          content="Scan barcode will generate operator name and ID"
                        >
                          <Icon
                            type="barcode"
                            style={{ cursor: 'pointer' }}
                            onClick={this.openScanBarcodeModal}
                          />
                        </Popover>
                      }
                      placeholder="Input operator name or scan barcode"
                    />
                  )}
                </FormItem>
              </Col>
              <Col md={12}>
                <FormItem label="Carton Size" {...formItemLayout}>
                  {getFieldDecorator('cartonSize', {
                    rules: [{
                      required: true,
                      message: 'Please input carton size!',
                    }],
                  })(
                    <Input placeholder="Please input carton size" />
                  )}
                </FormItem>
              </Col>
            </Row>
          </QueueAnim>
        </Form>
      </Layout>
    );
  }
}


export default Form.create()(CreateForm);
