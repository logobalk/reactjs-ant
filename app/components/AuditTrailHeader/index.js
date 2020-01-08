/**
 *
 * AuditTrailHeader
 *
 */

import React, { Fragment } from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Row, Col, Card, Icon, Button, Divider, Typography, Modal } from 'antd';

import AddUserModal from 'components/AddUserModal';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './index.less';

const { confirm } = Modal;
const { Text } = Typography;

class AuditTrailHeader extends React.Component {
  static propTypes = {
    noAuditMode: PropTypes.bool,
    noEnvironment: PropTypes.bool,
    readOnly: PropTypes.bool,
    defaultUser: PropTypes.bool,
    inProcessing: PropTypes.bool,
  };

  static defaultProp = {};

  state = {
    visible: false,
    operators: [
      { id: '1000000', name: 'Phongsathon Suriyoooooooooooooo', role: 'LO Scientist' },
      { id: '1000001', name: 'Denpoom So', role: 'LO Scientist' },
      // { id: '1000003', name: 'Suphannee Pr', role: 'QC' },
    ],
  }

  showModal = () => {
    this.setState({ visible: true });
  }

  hideModal = () => {
    this.setState({ visible: false });
  }

  deleteOperator = (e) => {
    const { id } = e.target;
    const { operators } = this.state;
    const { updateOperatorsState } = this;

    confirm({
      title: 'Are you sure delete this operator?',
      // content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        operators.splice(id, 1);
        updateOperatorsState(operators);
      },
    });
  }

  updateOperatorsState = (operators) => {
    this.setState({ operators });
  }

  inProgress = () => {
    Modal.warning({
      title: 'In progress...',
      // content: 'some messages...some messages...',
    });
  }

  render() {
    const { noAuditMode, noEnvironment, readOnly, defaultUser, inProcessing } = this.props;
    const { operators, visible } = this.state;

    return (
      // <FormattedMessage {...messages.header} />
      <Fragment>
        <AddUserModal
          title="Add operator"
          visible={visible}
          onOk={() => { this.hideModal(); }}
        />
        <Card
          bordered={false}
          style={{ marginBottom: 16 }}
          bodyStyle={{
            padding: '12px 0px',
          }}
        >
          {
            !noAuditMode &&
            <Fragment>
              <Row className={className(styles.row, { [styles.readOnly]: readOnly })}>
                <Col md={readOnly ? 24 : 21}>
                  {
                    !noEnvironment &&
                    <Col xs={24} sm={24} md={10}>
                      <span><b><Icon type="clock-circle" />  Environment Checking : </b></span>
                      <span>(Round 1) 07.30 - 11.00 </span>
                    </Col>
                  }
                  <Col xs={24} sm={12} md={noEnvironment ? 12 : 7}>
                    <span><b><Icon type="calendar" /> Start Time : </b></span>
                    <span>20/03/2019 07:35:10</span>
                  </Col>
                  <Col xs={24} sm={12} md={noEnvironment ? 12 : 7}>
                    <span><b><Icon type="calendar" /> Finish Time : </b></span>
                    <span>20/03/2019 08:22:45</span>
                  </Col>
                </Col>
                {
                  !readOnly &&
                  <Col md={3}>
                    {
                      !inProcessing
                        ? <Button type="primary" icon="poweroff" className={styles.startBtn} onClick={this.inProgress}>Start</Button>
                        : <Button type="primary" icon="check" className={styles.startBtn} onClick={this.inProgress}>Finish</Button>
                    }

                  </Col>
                }
              </Row>
              <Divider style={{ margin: '12px 0' }} />
            </Fragment>
          }
          <Row className={className(styles.row, styles.rowOperator)}>
            <Col xs={24} sm={24} md={3}>
              <span><b><Icon type="user" /> Operator</b></span>
            </Col>
            <Col xs={24} sm={24} md={21}>
              {
                defaultUser ?
                  <Col xs={24} sm={24} md={8} className={className(styles.operator, styles.readOnly)}>
                    <Col xs={12} className={styles.ellipsis} style={{ textAlign: 'left' }}>
                      {'Suphannee Pr'}
                    </Col>
                    <Col xs={12} style={{ textAlign: 'right' }}>
                      <Text strong>LO Scientist</Text>
                    </Col>
                  </Col>
                  :
                  operators.map((operator, idx) =>
                    <Col key={operator.id} xs={24} sm={24} md={8} className={className(styles.operator, { [styles.readOnly]: readOnly })}>
                      {
                        !readOnly &&
                        <Button
                          ghost
                          className={styles.editBtn}
                          style={{ color: '#8c8c8c' }}
                          icon="edit" type="primary"
                          size="small"
                        />
                      }
                      <Col xs={24} sm={24} md={12} className={styles.ellipsis} style={{ textAlign: 'left' }}>
                        {operator.name}
                      </Col>
                      <Col xs={24} sm={24} md={12} style={{ textAlign: 'right' }}>
                        <Text strong>{operator.role}</Text>
                        {
                          !readOnly &&
                          <Button
                            ghost
                            id={idx}
                            className={styles.deleteBtn}
                            style={{ color: '#f5222d' }}
                            icon="delete"
                            type="primary"
                            size="small"
                            onClick={this.deleteOperator}
                          />
                        }
                      </Col>
                    </Col>
                  )
              }
              <Col xs={24} sm={24} md={8} style={{ minHeight: 21 }}>
                {
                  (!readOnly && !defaultUser) &&
                  <Button
                    className={styles.addBtn}
                    shape="round"
                    icon="plus"
                    type="primary"
                    size="small"
                    onClick={this.showModal}
                  >
                    Add Operator
                  </Button>
                }
              </Col>
            </Col>
          </Row>
        </Card>
      </Fragment >
    );
  }
}

export default AuditTrailHeader;
