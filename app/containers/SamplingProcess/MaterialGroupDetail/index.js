/**
 *
 * SamplingProcess
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Typography, Row, Col, Icon, Divider } from 'antd';

import AuditTrailHeader from 'components/AuditTrailHeader';
import MaterialIdentityTable from 'containers/MaterialIdentityLabel/table';
import BeforeSamplingModal from 'containers/SamplingProcess/SamplingModal';

import history from 'utils/history';
import { data } from './table/mockdata';
import columns from './table/columns';
import messages from '../messages';
import Layout from '../layout';

const colInfo = {
  xs: 24,
  sm: 12,
  md: 8,
};
const { Text } = Typography;
/* eslint-disable react/prefer-stateless-function */
export class MaterialGroupDetail extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {
    visible: false,
  }

  handleStartSampling = () => {
    this.openModal();
  }

  openModal = () => {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  goToSamplingStep = () => {
    history.push('/sampling-process/step');
  }

  render() {
    return (
      <QueueAnim>
        <div key="0">
          <AuditTrailHeader />
        </div>
        <div key="1">
          <Layout
            title={<FormattedMessage {...messages.description2} />}
            withBackBtn
          >
            <BeforeSamplingModal
              visible={this.state.visible}
              onCancel={this.closeModal}
              onOk={this.goToSamplingStep}
            />
            <Text strong style={{ fontSize: 15 }}>Information</Text>
            <p style={{ marginBottom: 20 }} />
            <Row style={{ textAlign: 'center' }}>
              <Col {...colInfo}>
                <Text strong><Icon type="copy" /> Group :</Text> 1001 - Penicilin
              </Col>
              <Col {...colInfo}>
                <Text strong><Icon type="rise" /> Grade :</Text> A, C, D
              </Col>
              <Col {...colInfo}>
                <Text strong><Icon type="calendar" /> Loading Date :</Text> 12 March 2019
              </Col>
            </Row>
            <p />
            <Divider style={{ margin: '12px 0' }} />
            <MaterialIdentityTable
              columns={columns(this.handleStartSampling)}
              data={data}
              width={1300}
              tableOptions={{
                // components,
                rowKey: 'seqNo',
                bordered: true,
              }}
            />
          </Layout>
        </div>
      </QueueAnim >
    );
  }
}

export default MaterialGroupDetail;
