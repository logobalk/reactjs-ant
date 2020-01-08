/**
 *
 * MaterialGroupList
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
import history from 'utils/history';
import { Button, Card, DatePicker, Form, PageHeader, Row, Col, Select } from 'antd';

import MaterialGroupListTable from 'containers/MaterialGroupList/table';
import {
  SAMPLING_MATERIAL_GROUP_DETAIL_PATH,
} from 'containers/Navigator/constants';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMaterialGroupList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import styles from './index.less';
import columns from './table/columns';
import { data } from './table/mockdata';
import MaterialGroupingModal from './groupingModal';

const visibleStateMap = {
  grouping: 'visibleGrouping',
};
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const { Option } = Select;
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
export class MaterialGroupList extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    form: PropTypes.object,
  };

  static defaultProps = {};

  state = {
    visibleGrouping: false,
  }

  handleSearch = (e) => {
    e.preventDefault();
  }

  goToMaterialGroupDetail = () => {
    history.push(SAMPLING_MATERIAL_GROUP_DETAIL_PATH);
  }

  toggleModal = () => {
    this.setState(state => ({ visible: !state.visible }));
  }

  openModal = (e) => {
    const { id } = e.target;
    this.setState({ [visibleStateMap[id]]: true });
  }

  closeModal = (e) => {
    const { id } = e.target;
    this.setState({ [visibleStateMap[id]]: false });
  }


  render() {
    const { visibleGrouping } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <Fragment>
        <MaterialGroupingModal
          visible={visibleGrouping}
          onOk={this.closeModal}
          cancelBtnId="grouping"
        />
        <Helmet>
          <title>Material Group List | Sampling & Dispensing</title>
        </Helmet>
        <Card
          title={
            <PageHeader
              title={
                <span style={{ fontWeight: 500 }}>
                  <FormattedMessage {...messages.header} />
                </span>
              }
              subTitle="Pre-Sampling Item Sequence"
              style={{
                padding: 0,
              }}
            />
          }
          bordered={false}
          bodyStyle={{
            // padding: '24px 24px',
          }}
          extra={
            <Button className={styles.requestBtn} type="primary" icon="plus" onClick={this.openModal} id="grouping">Grouping</Button>
          }
        >
          <QueueAnim>
            <div key="1">
              <Form className={styles.form} onSubmit={this.handleSearch}>
                <p style={{ paddingBottom: 15 }}>List of Material Grouping & Material Grouping process</p>
                <Row>
                  <Col md={12}>
                    <FormItem label="Grouping Date" {...formItemLayout}>
                      {getFieldDecorator('groupDate', {
                        rules: [{
                          // required: true,
                          message: 'Please select grouping date!',
                        }],
                      })(
                        <RangePicker onChange={() => { }} />
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
                          <Option value="A">In process</Option>
                          <Option value="F">Completed</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit" icon="search">Search</Button>
                  <Button style={{ marginLeft: 8 }} onClick={this.handleReset} icon="redo">Reset</Button>
                </Row>
              </Form>
            </div>
            <p />
            <div key="2">
              <MaterialGroupListTable
                columns={columns}
                withNoFilter
                data={data}
                tableOptions={{
                  rowClassName: () => styles.row,
                  onRow: () => ({
                    onClick: () => { this.goToMaterialGroupDetail(); },       // click row
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
  materialGroupList: makeSelectMaterialGroupList(),
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

const withReducer = injectReducer({ key: 'materialGroupList', reducer });
const withSaga = injectSaga({ key: 'materialGroupList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create(),
)(MaterialGroupList);
