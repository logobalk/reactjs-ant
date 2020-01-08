/**
 *
 * SamplingProcess
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Form, Select, Col, Row, Button, DatePicker } from 'antd';

import MaterialLoadingTable from 'containers/MaterialLoading/table';

import history from 'utils/history';
import { data } from './table/mockdata';
import columns from './table/columns';
import messages from '../messages';
import styles from '../index.less';
import Layout from '../layout';

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

const FormItem = Form.Item;
const { Option } = Select;
/* eslint-disable react/prefer-stateless-function */
export class MaterialGroupList extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    form: PropTypes.object,
  };

  static defaultProps = {};

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  goToDetail = () => {
    history.push('/sampling-process/group');
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout title={<FormattedMessage {...messages.description} />}>
        <QueueAnim interval={100}>
          <div key="1">
            <Form className={styles.form} onSubmit={this.handleSearch}>
              <p style={{ paddingBottom: 15 }}>Please select group for sampling process</p>
              <Row>
                <Col md={12}>
                  <FormItem label="Material Group" {...formItemLayout}>
                    {getFieldDecorator('materialGroup', {
                      rules: [{
                        // required: true,
                        message: 'Please select material group!',
                      }],
                    })(
                      <Select
                        onChange={this.handleChange}
                        placeholder="---Please select material group---"
                      >
                        <Option value="1001">1001 - Penicilin</Option>
                        <Option value="1002">1002 - Cephalosporin</Option>
                        <Option value="1003">1003 - Carbapenem</Option>
                        <Option value="1004">1004 - API and Other</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Summarize Date" {...formItemLayout}>
                    {getFieldDecorator('samplingDate', {
                      rules: [{
                        // required: true,
                        message: 'Please input material code!',
                      }],
                    })(
                      <DatePicker
                        placeholder="---Please select sampling date---"
                        onChange={this.onChange}
                        style={{ width: '100%' }}
                      />
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Loading Date" {...formItemLayout}>
                    {getFieldDecorator('loadingDate', {
                      rules: [{
                        // required: true,
                        message: 'Please input loading date!',
                      }],
                    })(
                      <DatePicker
                        placeholder="---Please select loading date---"
                        onChange={() => {}}
                        style={{ width: '100%' }}
                      />
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Status" {...formItemLayout}>
                    {getFieldDecorator('status', {
                      rules: [{
                        // required: true,
                        message: 'Please select status!',
                      }],
                    })(
                      <Select
                        onChange={this.handleChange}
                        placeholder="---Please select status---"
                      >
                        <Option value="A">Wait for Sampling/Loaded</Option>
                        <Option value="B">In progress</Option>
                        <Option value="D">Completed</Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={24} style={{ textAlign: 'center' }}>
                  {/* <Button className={styles.requestBtn} type="primary" htmlType="submit" icon="alert">Request Material</Button> */}
                  <Button style={{ marginLeft: 0 }} type="primary" htmlType="submit" icon="search">Search</Button>
                  <Button style={{ marginLeft: 8 }} onClick={this.handleReset} icon="redo">Clear</Button>
                </Col>
              </Row>
            </Form>
          </div>
          <p />
          <div key="2">
            <MaterialLoadingTable
              columns={columns}
              data={data}
              // width={1400}
              tableOptions={{
                rowClassName: (record, index) => styles.row,
                onRow: (record, rowIndex) => ({
                  onClick: (event) => { this.goToDetail(); },       // click row
                }),
              }}
            />
          </div>
        </QueueAnim>
      </Layout>
    );
  }
}

export default Form.create()(MaterialGroupList);
