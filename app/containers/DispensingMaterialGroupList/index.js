/**
 *
 * DispensingMaterialGroupList
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Row, Col, Select, DatePicker, Button } from 'antd';

import MaterialGroupTable from 'containers/DispensingMaterialGroupList/table';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDispensingMaterialGroupList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Layout from './layout';
import styles from './index.less';

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
/* eslint-disable react/prefer-stateless-function */
export class DispensingMaterialGroupList extends React.Component {
  static propTypes = {
    form: PropTypes.object,
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  handleSearch = (e) => {
    e.preventDefault();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <Helmet>
          <title>Dispensing Material Group List | Sampling & Dispensing</title>
        </Helmet>
        <Layout
          title={<FormattedMessage {...messages.header} />}
          description="List of material group"

        >
          <QueueAnim>
            <div key="1">
              <Form className={styles.form} onSubmit={this.handleSearch}>
                <p className={styles.p}>Search list of dispensing material group</p>
                <Row>
                  <Col md={12}>
                    <FormItem label="Grouping Date" {...formItemLayout}>
                      {getFieldDecorator('groupingDate', {
                        rules: [{
                          // required: true,
                          message: 'Please select grouping group!',
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
                <Row style={{ textAlign: 'center' }}>
                  <Button type="primary" htmlType="submit" icon="search">Search</Button>
                  <span style={{ marginLeft: 7 }} />
                  <Button onClick={this.handleReset} icon="redo">Reset</Button>
                </Row>
              </Form>
            </div>
            <p />
            <div key="2">
              <MaterialGroupTable />
            </div>
          </QueueAnim>
        </Layout>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dispensingMaterialGroupList: makeSelectDispensingMaterialGroupList(),
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
  key: 'dispensingMaterialGroupList',
  reducer,
});
const withSaga = injectSaga({ key: 'dispensingMaterialGroupList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create(),
)(DispensingMaterialGroupList);
