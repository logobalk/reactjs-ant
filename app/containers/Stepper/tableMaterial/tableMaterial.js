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
import columns from './Table/columns';
import AddUserModal from './AddUserModal';
import messages from './messages';
import Table from './Table';
import './index.less';
import styles from './tableMaterial.style';


class TableMaterial extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProp = {};

  state = {
    visible: false,
    detail: {},
  }

  openModal = (detail) => (e) => {
    console.log('detail====>', detail)
    this.setState({ visible: true, detail });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  handleFilterDataUpdate(field, key) {
    return (args, value) => {
    };
  }


  handleOnStart = (detail) => () => {
    if (detail.type === 'N2 Gas') {
      history.push('/tool-equipment-checking/n2-gas');
    }
    if (detail.type === 'Weighing Scale Efficiency') {
      history.push('/tool-equipment-checking/weighing-scale-efficiency');
    }
    if (detail.type === 'Pressure Diff') {
      history.push('/tool-equipment-checking/pressure-diff');
    }
    if (detail.type === 'Weighing  booth  Efficiency') {
      history.push('/tool-equipment-checking/weighing-booth-efficiency');
    }
  }

  onClickRow = (e) => {
    console.log('onClickRow')
    const { type, id } = e.target;
    if (type === 'button' && id === 'list') {
      this.openModal();
    }
  }


  render() {
    const { classes } = this.props;
    const { visible, detail } = this.state;
    const Description = ({ term, children, span = 6 }) => (
      <div>
        <Col xs={12} sm={6} md={6}>
          <div className="description">
            <div className="term">{term} :</div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={6}>
          <div className="description">
            <div className="detail">{children}</div>
          </div>
        </Col>
      </div>
    );

    const content = (
      <Row>
        <Description term="Created By">Admin</Description>
        <Description term="Creation Time">2019-04-19 : 10.23 AM</Description>
        <Description term="Round(s)">1</Description>
        <Description term="Remarks" span={24}>
          on progress
        </Description>
      </Row>
    );

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
        >
          <QueueAnim>
            <AddUserModal visible={visible} onCancel={this.closeModal} onOk={this.handleOnStart(detail)} />
            <div key="1">
              <Form className={styles.form} onSubmit={this.handleSearch}>
                <p >Sampling Checking & Material Group</p>
                {/* <Row> */}
                <div className="wrap">
                  <div className="content padding">{content}</div>
                </div>
                {/* </Row> */}
              </Form>
            </div>
            <p />
            <div key="2">
              <Table
                columns={columns(this.openModal)}
              // handleSelectRows={() => this.handleOnStart}
              // onRow={() => ({
              //   onClick: (e) => { this.onClickRow(e); },
              // })}
              />
            </div>
          </QueueAnim>
        </Card>
      </div>
    );
  }
}

export default compose(
  Form.create(), withStyles(styles))(TableMaterial);
