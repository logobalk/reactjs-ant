/**
 *
 * AddUserModal
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Modal, Form, Input, Row, Select } from 'antd';
import ScanBarcodeModal from 'components/ScanBarcodeModal';

const { Option } = Select;
const FormItem = Form.Item;
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
class AdjustmentModal extends React.Component {
  static propTypes = {
    form: PropTypes.object,
    title: PropTypes.string,
    visible: PropTypes.bool,
    onOk: PropTypes.func,
  };

  static defaultProp = {
    onOk: () => { },
  };

  state = {
    visibleBarcode: false,
  }

  openScanBarcodeModal = () => {
    this.setState({ visibleBarcode: true });
  }

  closeScanBarcodeModal = () => {
    this.setState({ visibleBarcode: false });
  }

  render() {
    const { visibleBarcode } = this.state;
    const { visible, onOk, title } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        wrapClassName="adjustment-modal"
        title={
          <Fragment>
            Add Issue Type
          </Fragment>
        }
        width={500}
        maskClosable={false}
        closable={false}
        visible={visible}
        onOk={onOk}
        onCancel={onOk}
      // footer={
      //   <Fragment>
      //     <Button onClick={onOk}>Cancel</Button>
      //   </Fragment>
      // }
      >
        <Form onSubmit={this.handleOnSubmit}>
          <Row>
            <FormItem label="Issue Type (Image)" {...formItemLayout}>
              {getFieldDecorator('issueType', {
                rules: [{
                  required: true,
                }],
              })(
                <Select onChange={this.handleChange} placeholder="Please select issue type">
                  <Option value="1">พบสิ่งแปลกปลอมปนเปื้อนภายในเนื้อวัตถุดิบ</Option>
                  <Option value="2">พบ Appearance ของวัตถุดิบไม่ตรงกับ Material master "mm03"</Option>
                  <Option value="3">พบสัตว์พาหะปะปน</Option>
                  <Option value="4">พบภาชนะบรรจุภายในชำรุดหรือฉีกขาด</Option>
                  <Option value="5">พบข้อมูล COA และฉลากจากผู้ขายไม่ตรงกัน</Option>
                  <Option value="6">อื่นๆ</Option>
                </Select>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="อื่นๆ" {...formItemLayout}>
              {getFieldDecorator('id', {
                rules: [{
                  required: true,
                }],
              })(
                <Input
                  placeholder="โปรดระบุ"
                />
              )}
            </FormItem>
          </Row>
        </Form>
        <ScanBarcodeModal visible={visibleBarcode} onOk={this.closeScanBarcodeModal} />
      </Modal>
    );
  }
}

export default Form.create()(AdjustmentModal);
