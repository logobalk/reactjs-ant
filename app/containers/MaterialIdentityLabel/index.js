/**
 *
 * MaterialIdentityLabel
 *
 */

import React, { Fragment } from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Card, PageHeader, Divider, Typography, Row, Icon, Col, Button, Modal } from 'antd';
import QueueAnim from 'rc-queue-anim';

import AuditTrailHeader from 'components/AuditTrailHeader';
import MaterialIdentityTable from 'containers/MaterialIdentityLabel/table';
import ScanBarcodeModal from 'components/ScanBarcodeModal';
// import SpecificationModal from 'containers/MaterialIdentityLabel/Specification/modal';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMaterialIdentityLabel from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import columns from './table/columns';
import { data } from './table/mockdata';
import styles from './index.less';
import './index.css';

const colInfo = {
  xs: 24,
  sm: 12,
  md: 8,
};

const { Text } = Typography;
/* eslint-disable react/prefer-stateless-function */
export class MaterialIdentityLabel extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {
    visible: false,
    visibleSpec: false,
  }

  handleScanBarcode = () => {
    this.openModal();
  }

  toggleModal = () => {
    this.setState(state => ({ visible: !state.visible }));
  }

  openModal = () => {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  toggleSpecificationModal = () => {
    this.setState(state => ({ visibleSpec: !state.visibleSpec }));
  }

  openSpecificationModal = () => {
    this.setState({ visibleSpec: true });
  }

  closeSpecificationModal = () => {
    this.setState({ visibleSpec: false });
  }


  warningMessage = () => {
    Modal.warning({
      title: 'In progress...',
    });
  }

  render() {
    const { visible, visibleSpec } = this.state;

    // modify cell for style staus column
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

    return (
      <Fragment>
        <Helmet>
          <title>Material Indentity Label | Sampling & Dispensing</title>
        </Helmet>
        {/* <SpecificationModal
          visible={visibleSpec}
          onOk={this.closeSpecificationModal}
        /> */}
        <ScanBarcodeModal
          visible={visible}
          onOk={this.closeModal}
        />
        <QueueAnim>
          <div key="1">
            <AuditTrailHeader />
          </div>
          <div key="2">
            <Card
              className={styles.card}
              title={
                <PageHeader
                  title={<FormattedMessage {...messages.header} />}
                  subTitle={<FormattedMessage {...messages.description} />}
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
                <Fragment>
                  <Button
                    icon="arrow-left"
                    onClick={() => { history.goBack(); }}
                  >Back</Button>
                  <span style={{ paddingLeft: 7 }} />
                  {/* <Button
                    className={styles.specBtn}
                    type="primary"
                    htmlType="submit"
                    icon="audit"
                    onClick={this.openSpecificationModal}
                  >Specification</Button>
                  <span style={{ paddingLeft: 7 }} /> */}
                  <Button type="primary" icon="check">Complete</Button>
                </Fragment>
              }
            >
              <Text strong style={{ fontSize: 15 }}>Information</Text>
              <p style={{ marginBottom: 20 }} />
              <Row style={{ marginLeft: 100 }}>
                <Col {...colInfo}>
                  <Text strong><Icon type="copy" /> Group :</Text>1001 (Penicilin)
                </Col>
                <Col {...colInfo}>
                  <Text strong><Icon type="calendar" /> Summarize Date :</Text> 12 March 2019
                </Col>
              </Row>
              <Row style={{ marginLeft: 100 }}>
                <Col {...colInfo}>
                  <Text strong><Icon type="rise" /> Grade :</Text> A, C, D
                </Col>
                <Col {...colInfo}>
                  <Text strong><Icon type="user" /> Summarize By :</Text> 100000000 : Phongsathon Suriyo
                </Col>
              </Row>
              <p />
              <Divider style={{ margin: '12px 0' }} />
              {/* <Row span={24} style={{ marginBottom: 12 }}>
            <Col {...colButton}>
              <Button
                className={styles.specBtn}
                type="primary"
                htmlType="submit"
                icon="audit"
                onClick={this.openSpecificationModal}
              >
                Specification
              </Button>
            </Col>
            <Col {...colButton} style={{ textAlign: 'right' }}>
              <Button
                type="primary"
                onClick={this.warningMessage}
              >
                Start Sampling<Icon type="arrow-right" />
              </Button>
            </Col>
          </Row> */}
              <MaterialIdentityTable
                columns={columns}
                data={data}
                width={1300}
                tableOptions={{
                  components,
                  rowKey: 'seqNo',
                  bordered: true,
                }}
              />
            </Card>
          </div>
        </QueueAnim>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  materialIdentityLabel: makeSelectMaterialIdentityLabel(),
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

const withReducer = injectReducer({ key: 'materialIdentityLabel', reducer });
const withSaga = injectSaga({ key: 'materialIdentityLabel', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MaterialIdentityLabel);
