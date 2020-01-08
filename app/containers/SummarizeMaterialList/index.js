/**
 *
 * SummarizeMaterialList
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { Card, Form, Button, DatePicker, Row, Col, PageHeader, Select } from 'antd';

import SummarizeListTable from 'containers/SummarizeMaterialList/table';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSummarizeMaterialList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import styles from './index.less';
import { data } from './table/mockdata';

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
const { RangePicker } = DatePicker;
const { Option } = Select;
/* eslint-disable react/prefer-stateless-function */
export class SummarizeMaterialList extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  handleSearch = (e) => {
    e.preventDefault();
  }

  goToDetail = () => {
    const { onClickRow } = this.props;
    if (onClickRow) onClickRow();
  }

  render() {
    const { title = '' } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <Helmet>
          <title>Summarize Material | Sampling & Dispensing</title>
        </Helmet>
        <Card
          title={
            <PageHeader
              title={
                <span style={{ fontWeight: 500 }}>
                  <FormattedMessage {...messages.header} />
                </span>
              }
              subTitle={title}
              style={{
                padding: 0,
              }}
            />
          }
          bordered={false}
          bodyStyle={{
            // padding: '24px 24px',
          }}
        >
          <QueueAnim>
            <div key="1">
              <Form className={styles.form} onSubmit={this.handleSearch}>
                <p style={{ paddingBottom: 15 }}>Summarize material list and detail</p>
                <Row>
                  <Col md={12}>
                    <FormItem label="Grouping Date" {...formItemLayout}>
                      {getFieldDecorator('groupingDate', {
                        rules: [{
                          // required: true,
                          message: 'Please select grouping date!',
                        }],
                      })(
                        <RangePicker onChange={() => { }} style={{ width: '100%' }} />
                      )}
                    </FormItem>
                  </Col>
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
                          <Option value="1001">1001 - Penicilin</Option>
                          <Option value="1002">1002 - Cephalosporin</Option>
                          <Option value="1003">1003 - Carbapenem</Option>
                          <Option value="1004">1004 - API and Other</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                  {/* <Col md={12}>
                    <FormItem label="Status" {...formItemLayout}>
                      {getFieldDecorator('status', {
                        rules: [{
                          // required: true,
                          message: 'Please select status!',
                        }],
                      })(
                        <Select
                          onChange={() => { }}
                          placeholder="---Please select status---"
                        >
                          <Option value="A">In process</Option>
                          <Option value="C">Loaded</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col> */}
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Button type="primary" htmlType="submit" icon="search">Search</Button>
                  <Button style={{ marginLeft: 8 }} onClick={this.handleReset} icon="redo">Reset</Button>
                </Row>
              </Form>
            </div>
            <p />
            <div key="2">
              <SummarizeListTable
                data={data}
                tableOptions={{
                  rowClassName: (record, index) => styles.row,
                  onRow: (record, rowIndex) => ({
                    onClick: (event) => { this.goToDetail(); },       // click row
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
  summarizeMaterialList: makeSelectSummarizeMaterialList(),
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

const withReducer = injectReducer({ key: 'summarizeMaterialList', reducer });
const withSaga = injectSaga({ key: 'summarizeMaterialList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withRouter,
  Form.create(),
)(SummarizeMaterialList);
