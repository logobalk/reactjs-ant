/**
 *
 * SamplingProcess
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Typography, Steps, Row, Col, Icon, Divider, Button, Menu, Dropdown } from 'antd';

import AuditTrailHeader from 'components/AuditTrailHeader';
import MaterialIdentificationTable from 'containers/MaterialIndentificationForm/IndentificationForm/Table';
import MaterialIdentityTable from 'containers/MaterialIdentityLabel/table';

import messages from '../messages';
import Layout from '../layout';
import styles from './index.less';
import LineClearance from './LineClearance';
import EnvironmentStep from './Environtment';
import ToolsChecking from './ToolsChecking';
import TypeMethodStep from './TypeMethod';
import InformationStep from './Information';

const components = {
  body: {
    cell: ({ isValidStatus, record, ...props }) => {
      if (isValidStatus) {
        const status = record.validStatus;
        if (status) {
          const { className } = props;
          return (
            <td
              {...props}
              className={
                classNames([
                  className,
                  {
                    [styles.success]: status === 'PASS',
                    [styles.fail]: status === 'FAIL',
                  },
                ])
              }
            >
              {props.children}
            </td>
          );
        }
      }
      return (
        <td {...props}>
          {props.children}
        </td>
      );
    },
  },
};

const { Text } = Typography;
const { Step } = Steps;
const colInfo = {
  xs: 24,
  sm: 12,
  md: 8,
};
const steps = [{
  title: 'Line Clearance',
  content: <LineClearance />,
}, {
  title: 'Environment & Procedure',
  content: <EnvironmentStep />,
}, {
  title: 'Tool Checking',
  content: <ToolsChecking />,
}, {
  title: 'Material Loading',
  content:
    <MaterialIdentityTable
      withNoFilter
      width={1000}
      tableOptions={{
        components,
        rowKey: 'seqNo',
        bordered: true,
      }}
    />,
}, {
  title: 'Type & Method',
  content: <TypeMethodStep />,
}, {
  title: 'Sampling Information',
  content: <InformationStep />,
}, {
  title: 'Final Summary',
  content:
    <Fragment>
      <TypeMethodStep />
      <div style={{ marginTop: 16 }} />
      <InformationStep />
    </Fragment>,
}, {
  title: 'Sampling Identification',
  content: <MaterialIdentificationTable />,
}];

/* eslint-disable react/prefer-stateless-function */
export class SamplingStepper extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  state = {
    current: 6,
  };

  next = () => {
    this.setState(state => ({ current: state.current + 1 }));
  }

  prev = () => {
    this.setState(state => ({ current: state.current - 1 }));
  }

  render() {
    const { current } = this.state;

    return (
      <Fragment>
        <QueueAnim>
          <div key="1">
            <AuditTrailHeader readOnly />
          </div>
          <div key="2">
            <Layout
              title={<FormattedMessage {...messages.description3} />}
              extra={
                <Fragment>
                  <Button type="primary" icon="fire" className={styles.incidentBtn}>Incident Request</Button>
                  <span style={{ marginRight: 7 }} />
                  <Dropdown
                    overlay={
                      <Menu>
                        <Menu.Item key="0">
                          <Icon type="barcode" /> Print Sticker
                        </Menu.Item>
                        <Menu.Item key="1">
                          <Icon type="file-text" /> Print Report
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={['click']}
                  >
                    <Button type="primary" icon="printer" className={styles.printBtn}>Print</Button>
                  </Dropdown>
                  <span style={{ marginRight: 7 }} />
                  <Button type="primary" icon="check">Complete</Button>
                </Fragment>
              }
            >
              <QueueAnim>
                <div key="1">
                  <Text strong style={{ fontSize: 15 }}>Information</Text>
                  <p style={{ marginBottom: 20 }} />
                  <Row style={{ textAlign: 'center' }}>
                    <Col {...colInfo}>
                      <Text strong><Icon type="copy" /> Group :</Text> 1001 - Penicilin
                    </Col>
                    <Col {...colInfo}>
                      <Text strong><Icon type="rise" /> Grade :</Text> A
                    </Col>
                    <Col {...colInfo}>
                      <Text strong><Icon type="calendar" /> Loading Date :</Text> 12 March 2019
                    </Col>
                  </Row>
                  <Row style={{ textAlign: 'center' }}>
                    <Col {...colInfo}>
                      <Text strong><Icon type="calendar" /> Item Code :</Text> 10000001
                    </Col>
                    <Col {...colInfo}>
                      <Text strong><Icon type="calendar" /> Item Name :</Text> Hydroxine Di Hydrochloride
                    </Col>
                    <Col {...colInfo}>
                      <Text strong><Icon type="calendar" /> Batch :</Text> M000000099
                    </Col>
                  </Row>
                  <p />
                  <Divider style={{ margin: '12px 0' }} />
                </div>
                <div key="2">
                  <Row>
                    <Col xs={12}>
                      {current > 0 && <Button icon="caret-left" onClick={() => this.prev()}>Previous </Button>}
                    </Col>
                    <Col xs={12}>
                      {(current < steps.length - 1) && (
                        <Button
                          type="primary"
                          className={styles.nextBtn}
                          onClick={() => this.next()}
                        >
                          Next <Icon type="caret-right" />
                        </Button>
                      )}
                    </Col>
                  </Row>
                  <p />
                  <Steps className={styles.step} size="small" current={current} labelPlacement="vertical">
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                  </Steps>
                  <div className={styles.stepsContent}>{steps[current].content}</div>
                </div>
              </QueueAnim>
            </Layout>
          </div>
        </QueueAnim>
      </Fragment >
    );
  }
}

export default SamplingStepper;
