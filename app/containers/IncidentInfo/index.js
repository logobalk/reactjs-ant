/**
 *
 * IncidentInfo
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Form, Row, Col } from 'antd';

import MaterialDetail from 'containers/IncidentInfo/MaterialDetail';
import IncidentInfoDetail from 'containers/IncidentInfo/IncidentInfoDetail';
import ApprovalList from 'containers/IncidentInfo/ApprovalList';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectIncidentInfo from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';


const mock = [
  { label: 'Inspection Lot', value: '100000005584' },
  { label: 'Lot Created On', value: '20.12.2018' },
  { label: 'Material Code', value: '5923121991' },
  { label: 'Material Name', value: 'HYDROXYZINE DI HYDROCHILORIDE' },
  { label: 'Batch No.', value: 'M000002079' },
  { label: 'Supplier Batch', value: '-' },
  { label: 'Manufacturer', value: '-' },
  { label: 'Container', value: '1' },
  { label: 'Storage Condition', value: '-' },
  { label: 'LotCt', value: 'EA' },
  { label: 'Insp.Lot Qty', value: '17.007' },
  { label: 'BUn', value: 'KG' },
  { label: 'Actutual lot Qty', value: '17.007' },
  { label: 'System Status', value: 'CRTD PASG SPRQ' },
  { label: 'Last Receiving Date', value: '25.10.2018' },
  { label: 'Shelf life EXP.date', value: '11.05.2023' },
];

const mock2 = [
  { user: 'Suphannee Pr', role: 'Line', status: 'accept' },
  { user: 'Denpoom', role: 'QA', status: 'reject' },
  { user: 'Phongsathon', role: 'QC', status: '' },
];

/* eslint-disable react/prefer-stateless-function */
export class IncidentInfo extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    form: PropTypes.object,
  };

  static defaultProps = {};

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addPhoto = () => {
    this.setState(state => ({
      issues: [
        ...state.issues,
        { id: state.count, value: '' },
      ],
      count: state.count + 1,
    }));
  }

  deletePhoto = (e) => {
    console.log(e.target);
  }

  goBack = () => {
    history.push('/incident');
  }

  render() {
    const { form } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>Incident Form | Sampling & Dispensing</title>
        </Helmet>
        <Row gutter={16}>
          <QueueAnim>
            <Col key="1" xs={24} md={7}>
              <MaterialDetail data={mock} horizontal goBack={this.goBack} />
              <ApprovalList data={mock2} />
            </Col>
            <Col key="2" xs={24} md={17}>
              <IncidentInfoDetail form={form} goBack={this.goBack} />
            </Col>
          </QueueAnim>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  incidentInfo: makeSelectIncidentInfo(),
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

const withReducer = injectReducer({ key: 'incidentInfo', reducer });
const withSaga = injectSaga({ key: 'incidentInfo', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create(),
)(IncidentInfo);
