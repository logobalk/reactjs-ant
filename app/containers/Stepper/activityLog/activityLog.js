/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import history from 'utils/history';
import uuid from 'uuid';
import { Card, Form, Button, DatePicker, Row, Col, PageHeader, Select } from 'antd';
import { FormattedMessage } from 'react-intl';
import QueueAnim from 'rc-queue-anim';
import messages from './messages';
import Table from './Table';
import styles from './activityLog.style';


class ActivityLog extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  handleFilterDataUpdate(field, key) {
    return (args, value) => {
    };
  }

  handleOnStart= () =>{
    history.push('/tool-equipment-checking/material-group');
  }

  render() {
    const { classes, title = '' } = this.props;
    const { getFieldDecorator } = this.props.form;
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
    return (
      <div>
        <Card
          title={
            <PageHeader
              title={
                <span style={{ fontWeight: 500 }}>
                  <FormattedMessage {...messages.header} />
                </span>
              }
              subTitle="Tool & Equipment Efficiency"
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
            <Button className={styles.requestBtn} type="primary" icon="poweroff" onClick={this.handleOnStart} id="grouping">Start Checking</Button>
          }
        >
          <QueueAnim>
            <div key="1">
              <Form className={styles.form} onSubmit={this.handleSearch}>
                <p style={{ paddingBottom: 15 }}>Sampling Checking & Activity log</p>
                <Row>
                  <Col md={12}>
                    <FormItem label="Create Date" {...formItemLayout}>
                      {getFieldDecorator('groupDate', {
                        rules: [{
                          required: true,
                          message: 'Please select material group!',
                        }],
                      })(
                        <RangePicker onChange={() => { }} />
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
              <Table />
            </div>
          </QueueAnim>
        </Card>
      </div>
    );
  }
}

export default compose(
  Form.create(), withStyles(styles))(ActivityLog);
