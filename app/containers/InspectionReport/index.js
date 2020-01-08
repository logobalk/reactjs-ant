/**
 *
 * InspectionReport
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Row, Col, Icon } from 'antd';

import AuditTrailHeader from 'components/AuditTrailHeader';
import MaterialDetail from 'containers/IncidentForm/MaterialDetail';
import CheckListForm from 'containers/InspectionReport/CheckListForm';
import {
  INSPECTION_LIST_PATH,
  INCIDENT_DETIAL_PATH,
} from 'containers/Navigator/constants';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInspectionReport from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

const mock = [
  { label: 'Status', value: <span style={{ fontWeight: 600, color: '#5b8c00' }}>Passed</span> },
  { label: 'Incident No.', value: <Link to={INCIDENT_DETIAL_PATH}>SBRM19S0001 <Icon type="caret-right" /></Link> },
  { label: 'Inspection Lot', value: '100000005584' },
  { label: 'Lot Created On', value: '20.12.2018' },
  { label: 'Material Code', value: '5923121991' },
  { label: 'Material Name', value: 'HYDROXYZINE DI HYDROCHILORIDE' },
  { label: 'Batch No.', value: 'M000002079' },
  { label: 'Supplier Batch', value: '-' },
  { label: 'Manufacturer', value: '-' },
  { label: 'Storage Condition', value: '-' },
  { label: 'No.Container', value: '1' },
  { label: 'LotCt.', value: 'EA' },
  { label: 'Lot Qty.', value: '17.007' },
  { label: 'Actual Lot Quantity', value: '17.007' },
  { label: 'Base Unit', value: 'KG' },
  { label: 'System Status', value: 'CRTD PASG SPRQ' },
  { label: 'Last Receiving Date', value: '25.10.2018' },
  { label: 'Production Date', value: '03.11.2018' },
  { label: 'Shelf life EXP.date', value: '11.05.2023' },
];
/* eslint-disable react/prefer-stateless-function */
export class InspectionReport extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  goBack = () => {
    history.push(INSPECTION_LIST_PATH);
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Inspection Report | Sampling & Dispensing</title>
        </Helmet>
        <Row gutter={16}>
          <QueueAnim>
            <Col key="1" xs={24}>
              <AuditTrailHeader noEnvironment defaultUser />
            </Col>
            <Col key="2" xs={24} md={7}>
              {/* <FormattedMessage {...messages.header} /> */}
              <MaterialDetail
                data={mock}
                horizontal
                goBack={this.goBack}
                backBtnIcon={null}
                backBtnTitle="Cancel"
              />
            </Col>
            <Col key="3" xs={24} md={17}>
              <CheckListForm
                goCancel={this.goBack}
              />
            </Col>
          </QueueAnim>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  inspectionReport: makeSelectInspectionReport(),
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

const withReducer = injectReducer({ key: 'inspectionReport', reducer });
const withSaga = injectSaga({ key: 'inspectionReport', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(InspectionReport);
