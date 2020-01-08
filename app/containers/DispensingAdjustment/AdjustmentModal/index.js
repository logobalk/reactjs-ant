/**
 *
 * AddUserModal
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Modal, Form, Input, Row } from 'antd';
import ScanBarcodeModal from 'components/ScanBarcodeModal';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

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
            {title || <FormattedMessage {...messages.header} />}
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
            <FormItem label="Item Code" {...formItemLayout} style={{ marginBottom: 0 }}>
              {getFieldDecorator('itemCode')(
                <span>10000001</span>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="Item Name" {...formItemLayout} style={{ marginBottom: 0 }}>
              {getFieldDecorator('itemName')(
                <span>Hydroxine Di Hydrochloride</span>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="Unit" {...formItemLayout} style={{ marginBottom: 0 }}>
              {getFieldDecorator('unit')(
                <span>KG</span>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="PO" {...formItemLayout} style={{ marginBottom: 0 }}>
              {getFieldDecorator('processOrder')(
                <span>1051079</span>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="Reason" {...formItemLayout} style={{ marginBottom: 5 }}>
              {getFieldDecorator('reason')(
                <span>Increase</span>
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="Batch No." {...formItemLayout}>
              {getFieldDecorator('operator', {
                rules: [{
                  required: true,
                }],
              })(
                <Input
                  placeholder="Input batch no"
                />
              )}
            </FormItem>
          </Row>
          <Row>
            <FormItem label="Adjust Quantity" {...formItemLayout}>
              {getFieldDecorator('id', {
                rules: [{
                  required: true,
                }],
              })(
                <Input
                  placeholder="Input adjust quantity"
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
