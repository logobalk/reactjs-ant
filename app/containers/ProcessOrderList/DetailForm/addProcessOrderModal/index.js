import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Input, Form, Row, Col, DatePicker } from 'antd';
import MaterialListTable from '../table';
import columns from './columns';
import { data } from './mockdata';
import styles from '../../index.less';

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
class AddProcessOrderModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
  };

  render() {
    const { visible, onOk } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        wrapClassName="marterial-list-modal"
        title={
          <Fragment>
            Add Process Order
          </Fragment>
        }
        maskClosable={false}
        closable={false}
        visible={visible}
        onOk={onOk}
        footer={
          <Fragment>
            <Button onClick={onOk}>Cancel</Button>
            <Button type="primary" icon="plus">Add Selected</Button>
          </Fragment>
        }
        width={1100}
      >
        {/* <Search
          placeholder="Search Process Order"
          enterButton={<Fragment><Icon type="search" /><span style={{ marginLeft: 8 }} />Search</Fragment>}
          onSearch={value => console.log(value)}
        /> */}
        <Form className={styles.form} onSubmit={this.handleSearch}>
          <Row>
            <Col md={12}>
              <FormItem label="Process Order Date" {...formItemLayout}>
                {getFieldDecorator('selectionDate', {
                  rules: [{
                    // required: true,
                    message: 'Please select material group!',
                  }],
                })(
                  <RangePicker style={{ width: '100%' }} />
                )}
              </FormItem>
            </Col>
            <Col md={12}>
              <FormItem label="Process Order" {...formItemLayout}>
                {getFieldDecorator('processOrderId', {
                  rules: [{
                    // required: true,
                    message: 'Please select material group!',
                  }],
                })(
                  <Input placeholder="Please input process order ID" />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit" icon="search">Search</Button>
            <span style={{ marginLeft: 7 }} />
            <Button onClick={this.handleReset} icon="redo">Reset</Button>
          </Row>
        </Form>
        <p />
        {/* <Row>
          <Col md={10}><Text strong>Process Order : </Text>1057504</Col>
          <Col md={14} style={{ textAlign: 'right' }}>
            <Col md={24}><Text strong>Material No. : </Text>24000013</Col>
            <Col md={24}><Text strong>Material Name : </Text>ANTAZALLERGE EYE DROPS 10 ML</Col>
          </Col>
        </Row>
        <p /> */}
        <MaterialListTable
          columns={columns}
          data={data}
          // size="middle"
          scroll={{ x: 800 }}
        // hidePagination
        />
      </Modal>
    );
  }
}

export default Form.create()(AddProcessOrderModal);
