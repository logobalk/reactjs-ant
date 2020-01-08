import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Form, Row, Col, Select, Button, Input, DatePicker } from 'antd';
import Layout from 'components/CardLayout';
import history from 'utils/history';
import styles from '../index.less';
import ProcessOrderTable from './table';


const { Option } = Select;
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
class SearchForm extends React.Component {
  static propTypes = {
    form: PropTypes.object,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  };

  static defaultProps = {};

  handleSearch = (e) => {
    e.preventDefault();
  }

  goToCreate = () => {
    history.push('/process-order/create');
  }

  render() {
    const { title = '' } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout
        title={title}
        description="List of process order selection"
      >
        <QueueAnim>
          <div key="1">
            <Form className={styles.form} onSubmit={this.handleSearch}>
              <Row>
                <Col md={12}>
                  <FormItem label="Selection Date" {...formItemLayout}>
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
                  <FormItem label="Status" {...formItemLayout}>
                    {getFieldDecorator('status', {
                      rules: [{
                        // required: true,
                        message: 'Please select grade!',
                      }],
                    })(
                      <Select
                        onChange={this.handleChange}
                        placeholder="---Please select status---"
                      >
                        <Option value="D">In progress</Option>
                        <Option value="F">Completed</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
              {/* <Row>
                <Col md={12}>
                  <FormItem label="Process Order ID" {...formItemLayout}>
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
              </Row> */}
              <Row style={{ textAlign: 'center' }}>
                <Button type="primary" icon="plus" className={styles.addBtn} onClick={this.goToCreate}>Selection</Button>
                <span style={{ marginLeft: 7 }} />
                <Button type="primary" htmlType="submit" icon="search">Search</Button>
                <span style={{ marginLeft: 7 }} />
                <Button onClick={this.handleReset} icon="redo">Reset</Button>
              </Row>
            </Form>
          </div>
          <p />
          <div key="2">
            <ProcessOrderTable />
          </div>
        </QueueAnim>
      </Layout>
    );
  }
}

export default Form.create()(SearchForm);