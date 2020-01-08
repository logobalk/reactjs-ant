/**
 *
 * MaterialIndentificationList
 *
 */

import React from 'react';
import className from 'classnames';
// import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Collapse, Icon, Form, Row, Col, Input, Button, DatePicker, Select } from 'antd';

import MaterialListTable from 'containers/MaterialIndentificationList/Table';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMaterialIndentificationList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import styles from './index.less';
import './index.css';

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
const { Panel } = Collapse;
const { RangePicker } = DatePicker;
const { Option } = Select;
const FormItem = Form.Item;
/* eslint-disable react/prefer-stateless-function */
export class MaterialIndentificationList extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  handleSearch = (e) => {
    e.preventDefault();
  }

  onCreate = () => {
    history.push('/material-identification/create');
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className={styles.root}>
        <Helmet>
          <title>Material Indentification | Sampling & Dispensing</title>
        </Helmet>
        <QueueAnim>
          <div key="1">
            <Collapse
              className={className(styles.collapse, 'material-iden')}
              defaultActiveKey={['0']}
              onChange={() => { }}
              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : -90} />}
            >
              <Panel
                header={
                  <span>
                    <Icon type="experiment" />
                    <span style={{ marginLeft: 5 }} />
                    <FormattedMessage {...messages.header} />
                  </span>
                }
                key="0"
              >
                <Form onSubmit={this.handleSearch}>
                  <Row>
                    <Col md={12}>
                      <FormItem label="Material" {...formItemLayout}>
                        {getFieldDecorator('itemCode', {
                          rules: [{
                            required: false,
                            message: 'Please input material!',
                          }],
                        })(
                          <Input placeholder="Please input material" />
                        )}
                      </FormItem>
                    </Col>
                    <Col md={12}>
                      <FormItem label="Batch" {...formItemLayout}>
                        {getFieldDecorator('batch', {
                          rules: [{
                            required: false,
                            message: 'Please input batch!',
                          }],
                        })(
                          <Input placeholder="Please input batch" />
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <FormItem label="Last Received Date " {...formItemLayout}>
                        {getFieldDecorator('receivedDate', {
                          rules: [{
                            required: false,
                            message: 'Please input last received date!',
                          }],
                        })(
                          <RangePicker style={{ width: '100%' }} />
                        )}
                      </FormItem>
                    </Col>
                    <Col md={12}>
                      <FormItem label="Item Status" {...formItemLayout}>
                        {getFieldDecorator('status', {
                          rules: [{
                            required: false,
                            message: 'Please input status!',
                          }],
                        })(
                          <Select style={{ width: '100%' }} onChange={() => {}} placeholder="---Please select status---">
                            <Option value="1">All</Option>
                            <Option value="2">Open</Option>
                            <Option value="3">Completed</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <FormItem label="Drum Status" {...formItemLayout}>
                        {getFieldDecorator('drum', {
                          rules: [{
                            required: false,
                            message: 'Please input drum status!',
                          }],
                        })(
                          <Select style={{ width: '100%' }} onChange={() => {}} placeholder="---Please select drum status---">
                            <Option value="1">All</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                      <Button type="primary" icon="plus" className={styles.addBtn} onClick={this.onCreate}>Create</Button>
                      <span style={{ marginLeft: 8 }} />
                      <Button type="primary" htmlType="submit" icon="search">Search</Button>
                      <span style={{ marginLeft: 8 }} />
                      <Button onClick={this.handleReset} icon="redo">Clear</Button>
                    </Col>
                  </Row>
                </Form>
              </Panel>
            </Collapse>
          </div>
          <div key="2">
            <MaterialListTable />
          </div>
        </QueueAnim>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  materialIndentificationList: makeSelectMaterialIndentificationList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'materialIndentificationList',
  reducer,
});
const withSaga = injectSaga({ key: 'materialIndentificationList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create(),
)(MaterialIndentificationList);
