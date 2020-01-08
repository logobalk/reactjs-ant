import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Button, Form, Row, Col, Input } from 'antd';

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
class MaterialMoveModal extends React.Component {
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
            Reorder
          </Fragment>
        }
        maskClosable={false}
        closable={false}
        visible={visible}
        onOk={onOk}
        footer={
          <Fragment>
            <Button onClick={onOk}>Cancel</Button>
            <Button onClick={onOk} type="primary">Reorder <Icon type="arrow-right" /></Button>
          </Fragment>
        }
      >
        <Form onSubmit={this.handleOnSubmit}>
          <Row>
            <Col md={24}>
              <FormItem label="New Queue" {...formItemLayout}>
                {getFieldDecorator('group', {
                  rules: [{
                    // required: true,
                    message: 'Please select grade!',
                  }],
                })(
                  <Input placeholder="Please input new queue" />
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(MaterialMoveModal);