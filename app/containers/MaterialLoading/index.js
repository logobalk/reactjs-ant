/**
 *
 * MaterialLoading
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Button, Card, Form, Row, Col, Select, DatePicker } from 'antd';

import MaterialLoadingTable from 'containers/MaterialLoading/table';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMaterialLoading from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import styles from './index.less';
import columns from './table/columns';
import { data } from './table/mockdata';

const { RangePicker } = DatePicker;
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
export class MaterialLoading extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  handleSubmit = (e) => {
    e.preventDefault();

  }

  onChange = (e) => {

  }

  goToMaterialIdentity = () => {
    history.push('/material-identity-label');
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <Helmet>
          <title>Material Loading | Sampling & Dispensing</title>
        </Helmet>
        <Card
          title={
            <span>
              <FormattedMessage {...messages.header} />
            </span>
          }
          bordered={false}
          bodyStyle={{
            padding: '24px 24px',
          }}
        >
          <QueueAnim>
            <div key="1">
              <Form className={styles.form} onSubmit={this.handleSearch}>
                <p style={{ paddingBottom: 15 }}>Please specific material group and grade before material loading</p>
                <Row>
                  <Col md={12}>
                    <FormItem label="Summarize Date" {...formItemLayout}>
                      {getFieldDecorator('samplingDate', {
                        rules: [{
                          // required: true,
                          message: 'Please input material code!',
                        }],
                      })(
                        <RangePicker style={{ width: '100%' }} />
                      )}
                    </FormItem>
                  </Col>
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
                          <Option value="A">Wait for loading</Option>
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
                    onClick: (event) => { this.goToMaterialIdentity(); },       // click row
                  }),
                }}
              />
            </div>
          </QueueAnim>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  materialLoading: makeSelectMaterialLoading(),
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

const withReducer = injectReducer({ key: 'materialLoading', reducer });
const withSaga = injectSaga({ key: 'materialLoading', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create(),
)(MaterialLoading);
