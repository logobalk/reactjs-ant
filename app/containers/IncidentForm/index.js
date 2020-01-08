/**
 *
 * IncidentForm
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
import { Row, Col, Form } from 'antd';
import { withStyles } from '@material-ui/core/styles';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectIncidentForm from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import MaterialDetail from './MaterialDetail';
import IncidentFormDetail from './IncidentFormDetail';

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  textField: {
    marginTop: 0,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '100%',
  },
});

/* eslint-disable react/prefer-stateless-function */
export class IncidentForm extends React.Component {
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
            <Col key={0} xs={24} md={7}>
              <MaterialDetail
                data={mock}
                goBack={this.goBack}
                backBtnTitle="Cancel"
                backBtnIcon={null}
              />
            </Col>
            <Col key={1} xs={24} md={17}>
              <IncidentFormDetail
                form={form}
                goBack={this.goBack}
                backBtnTitle="Cancel"
                backBtnNoIcon
              />
            </Col>
          </QueueAnim>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  incidentForm: makeSelectIncidentForm(),
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

const withReducer = injectReducer({ key: 'incidentForm', reducer });
const withSaga = injectSaga({ key: 'incidentForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
  Form.create(),
)(IncidentForm);
