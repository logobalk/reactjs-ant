
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Button, Form, Input, Row, Col, DatePicker, Popover } from 'antd';
import ScanBarcodeModal from 'components/ScanBarcodeModal';

const { RangePicker } = DatePicker;
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
class GroupingModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    cancelBtnId: PropTypes.string,
    form: PropTypes.object,
  };

  static defaultProps = {};

  state = {
    visibleBarcode: false,
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
  }

  openScanBarcodeModal = () => {
    this.setState({ visibleBarcode: true });
  }

  closeScanBarcodeModal = () => {
    this.setState({ visibleBarcode: false });
  }

  render() {
    const { visibleBarcode } = this.state;
    const { visible, onOk, cancelBtnId } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <Modal
          id="test"
          wrapClassName="material-grouping-modal"
          title={
            <Fragment>
              Material Grouping
            </Fragment>
          }
          maskClosable={false}
          closable={false}
          visible={visible}
          onOk={onOk}
          footer={
            <Fragment>
              <Button onClick={onOk} id={cancelBtnId}>Cancel</Button>
              <Button onClick={onOk} type="primary">Start Grouping <Icon type="arrow-right" /></Button>
            </Fragment>
          }
        >
          <Form onSubmit={this.handleOnSubmit}>
            <Row>
              <Col md={24}>
                <FormItem label="Lot Created On" {...formItemLayout}>
                  {getFieldDecorator('firstDate', {
                    rules: [{
                      // required: true,
                      // message: 'Please select material group!',
                    }],
                  })(
                    <RangePicker onChange={() => { }} style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
              {/* <Col md={24}>
                <FormItem label="Operator Name" {...formItemLayout}>
                  {getFieldDecorator('name', {
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
                <FormItem label="Operator ID" {...formItemLayout}>
                  {getFieldDecorator('id', {
                    rules: [{
                      required: true,
                    }],
                  })(
                    <Input
                      placeholder="Input operator ID"
                    />
                  )}
                </FormItem>
              </Col> */}
            </Row>
          </Form>
        </Modal>
        <ScanBarcodeModal visible={visibleBarcode} onOk={this.closeScanBarcodeModal} />
      </Fragment>
    );
  }
}


export default Form.create()(GroupingModal);