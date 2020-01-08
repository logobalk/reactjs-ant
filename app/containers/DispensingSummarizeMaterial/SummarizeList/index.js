import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Form, Row, Button, Col, Select, DatePicker } from 'antd';
import Layout from 'components/CardLayout';
import history from 'utils/history';
import messages from '../messages';
import Table from './table';
import { data } from './table/mockdata';
import styles from '../index.less';

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
class SummarizeList extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  goToDetail = (e) => {
    history.push('/dispensing-summarize/detail');
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout
        title={<FormattedMessage {...messages.header} />}
        description="List for Store"
      >
        <QueueAnim>
          <div key="1">
            <Form className={styles.form} onSubmit={this.handleSearch}>
              <p style={{ paddingBottom: 15 }}>Dispensing summarize data list</p>
              <Row>
                <Col md={12}>
                  <FormItem label="Material Group" {...formItemLayout}>
                    {getFieldDecorator('group', {
                      rules: [{
                        // required: true,
                        message: 'Please select group!',
                      }],
                    })(
                      <Select
                        onChange={() => { }}
                        placeholder="---Please select material group---"
                      >
                        <Option value="all">All Group</Option>
                        <Option value="1001">1001 - Penicilin</Option>
                        <Option value="1002">1002 - Cephalosporin</Option>
                        <Option value="1003">1003 - Carbapenem</Option>
                        <Option value="1004">1004 - API and Other</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Dispensing Date" {...formItemLayout}>
                    {getFieldDecorator('dispensingDate', {
                      rules: [{
                        // required: true,
                        message: 'Please select dispensing date!',
                      }],
                    })(
                      <RangePicker onChange={() => { }} style={{ width: '100%' }} />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormItem label="Room No." {...formItemLayout}>
                    {getFieldDecorator('roomNo', {
                      rules: [{
                        // required: true,
                        message: 'Please select room no.!',
                      }],
                    })(
                      <Select
                        onChange={this.handleChange}
                        placeholder="---Please select room no.---"
                      >
                        <Option value="1">101</Option>
                        <Option value="2">102</Option>
                        <Option value="3">103</Option>
                        <Option value="4">104</Option>
                        <Option value="5">105</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Status" {...formItemLayout}>
                    {getFieldDecorator('status', {
                      rules: [{
                        // required: true,
                        message: 'Please select group!',
                      }],
                    })(
                      <Select
                        onChange={() => { }}
                        placeholder="---Please select status---"
                      >
                        <Option value="all">All Status</Option>
                        <Option value="1001">In progress</Option>
                        <Option value="1002">Loaded</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit" icon="search">Search</Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset} icon="redo">Reset</Button>
              </Row>
            </Form>
          </div>
          <p />
          <div key="2">
            <Table
              data={data}
              tableOptions={{
                rowClassName: () => styles.row,
                onRow: () => ({
                  onClick: (e) => { this.goToDetail(e); },
                }),
              }}
            />
          </div>
        </QueueAnim>
      </Layout>
    );
  }
}

export default Form.create()(SummarizeList);