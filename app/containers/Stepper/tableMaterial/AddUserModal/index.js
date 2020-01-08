/**
 *
 * AddUserModal
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import styled from 'styled-components';
import { Modal, Form, Input, Popover, Icon, Col, Row, DatePicker, TimePicker } from 'antd';
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
class AddUserModal extends React.Component {
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
    const { visible, onOk, title, onCancel } = this.props;
    const { getFieldDecorator } = this.props.form;
    const today = new Date();
    const dateFormat = 'DD-MM-YYYY';
    return (
      <Modal
        wrapClassName="add-user-modal"
        title={
          <Fragment>
            {title || <FormattedMessage {...messages.header} />}
          </Fragment>
        }
        maskClosable={false}
        closable={false}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      // footer={
      //   <Fragment>
      //     <Button onClick={onOk}>Cancel</Button>
      //   </Fragment>
      // }
      >
        <Form onSubmit={this.handleOnSubmit}>
          <Row>
            <Col md={24}>
              <FormItem label="Check by " {...formItemLayout}>
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
            <Col md={24}>
              <FormItem label="Date" {...formItemLayout}>
                <DatePicker
                  disabled
                  defaultValue={moment(today, dateFormat)}
                  style={{ width: '100%' }}
                />
              </FormItem>
            </Col>
            <Col md={24}>
              <FormItem label="Time" {...formItemLayout}>
                <TimePicker
                  disabled
                  defaultValue={moment(today, 'HH:mm:ss')}
                  style={{ width: '100%' }}
                />
              </FormItem>
            </Col>
            <Col md={24}>
              <FormItem label="Pressure gauge  No." {...formItemLayout}>
                <Input
                  style={{ width: '100%' }}
                />
              </FormItem>
            </Col>
            <Col md={24}>
              <FormItem label="Weighing  No." {...formItemLayout}>
                <Input
                  style={{ width: '100%' }}
                />
              </FormItem>
            </Col>
          </Row>
        </Form>
        <ScanBarcodeModal visible={visibleBarcode} onOk={this.closeScanBarcodeModal} />
      </Modal>
    );
  }
}

export default Form.create()(AddUserModal);
