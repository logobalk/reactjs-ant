import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, Row, Col, Input } from 'antd';

const { TextArea } = Input;
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
class AddInspectionLotModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    form: PropTypes.object,
  };

  static defaultProps = {};

  render() {
    const { visible, onOk } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        id="test"
        wrapClassName="marterial-moving-modal"
        title={
          <Fragment>
            Add Inspection Lot
          </Fragment>
        }
        maskClosable={false}
        closable={false}
        visible={visible}
        onOk={onOk}
        footer={
          <Fragment>
            <Button onClick={onOk}>Cancel</Button>
            <Button onClick={onOk} type="primary" icon="plus">Add</Button>
          </Fragment>
        }
      >
        <Form onSubmit={this.handleOnSubmit}>
          <Row>
            <Col md={24}>
              <FormItem label="Inspection Lot" {...formItemLayout}>
                {getFieldDecorator('inspectionLot', {
                  rules: [{
                    // required: true,
                    message: 'Please input inspection lot!',
                  }],
                })(
                  <Input placeholder="Please input inspection lot" />
                )}
              </FormItem>
            </Col>
            <Col md={24}>
              <FormItem label="Reason" {...formItemLayout}>
                {getFieldDecorator('reason', {
                  rules: [{
                    // required: true,
                    message: 'Please input reason!',
                  }],
                })(
                  <TextArea placeholder="Please input reason" />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(AddInspectionLotModal);