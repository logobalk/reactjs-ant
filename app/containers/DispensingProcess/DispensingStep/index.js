/**
 *
 * SamplingProcess
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Steps, Row, Col, Icon, Button, Menu, Dropdown } from 'antd';

import AuditTrailHeader from 'components/AuditTrailHeader';
import Layout from 'components/CardLayout';
import ListInfo from 'components/ListInfo';

// for material identification protype
import MaterialIdentificationTable from 'containers/MaterialIndentificationForm/IndentificationForm/Table';

import messages from '../messages';

import styles from './index.less';
import EnvironmentStep from './Environtment';
import TypeMethodStep from './TypeMethod';
import InformationStep from './Information';
import VerificationStep from './Verification';
import LineClearance from './LineClearance';
import ContainerVerificationStep from './ContainerVerification';
import FinalSummaryStep from './FinalSummary';

const { Step } = Steps;
const info = [
  [
    {
      title: <Fragment><Icon type="table" /> Material Group</Fragment>,
      content: '1001 - Penicilin',
    },
    {
      title: <Fragment><Icon type="rise" /> Grade</Fragment>,
      content: 'A',
    },
    {
      title: <Fragment><Icon type="bank" /> Room No.</Fragment>,
      content: '108',
    },
    {
      title: <Fragment><Icon type="bars" /> Queue</Fragment>,
      content: '1',
    },
  ],
  [
    {
      title: <Fragment><Icon type="calendar" /> Dispensing Date</Fragment>,
      content: '17/03/2019 07:45:28',
    },
    {
      title: <Fragment><Icon type="file" /> Item Code</Fragment>,
      content: '10000001',
    },
    {
      title: <Fragment><Icon type="profile" /> Item Name</Fragment>,
      content: 'Hydroxine Di Hydrochloride',
    },
    {
      title: <Fragment><Icon type="project" /> Batch</Fragment>,
      content: 'M000000011',
    },
  ],
];
const steps = [{
  title: 'Line Clearance',
  content: <LineClearance />,
}, {
  title: 'Environment & Procedure',
  content: <EnvironmentStep />,
}, {
  title: 'Dispensing Method',
  content: <TypeMethodStep />,
}, {
  title: 'Dispensing Verification',
  content: <VerificationStep />,
}, {
  title: 'Dispensing Infomation',
  content: <InformationStep />,
}, {
  title: 'Container Verification',
  content: <ContainerVerificationStep />,
}, {
  title: 'Final Summary',
  content: <FinalSummaryStep />,
}, {
  title: 'Material Identification',
  content: <MaterialIdentificationTable />,
}];

/* eslint-disable react/prefer-stateless-function */
export class DispensingStepper extends React.Component {
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
              title={<FormattedMessage {...messages.header} />}
              description="Dispensing Step"
              extra={
                <Fragment>
                  <Button type="primary" icon="fire" className={styles.incidentBtn}>Incident Request</Button>
                  <span style={{ marginRight: 8 }} />
                  <Dropdown
                    overlay={
                      <Menu>
                        {/* <Menu.Item key="0">
                          <Icon type="barcode" /> Print Sticker
                        </Menu.Item> */}
                        <Menu.Item key="1">
                          <Icon type="file-text" /> Print Report
                        </Menu.Item>
                      </Menu>
                    }
                    trigger={['click']}
                  >
                    <Button type="primary" icon="printer" className={styles.printBtn}>Print</Button>
                  </Dropdown>
                  <span style={{ marginRight: 8 }} />
                  <Button type="primary" icon="check">Complete</Button>
                </Fragment>
              }
            >
              <QueueAnim>
                <div key="1">
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
                  <ListInfo list={info} />
                </div>
                <div key="2">
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
      </Fragment>
    );
  }
}

export default DispensingStepper;
