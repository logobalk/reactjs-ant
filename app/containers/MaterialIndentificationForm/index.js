/**
 *
 * MaterialIndentificationForm
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMaterialIndentificationForm from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import CreateForm from './CreateForm';
import IndentificationForm from './IndentificationForm';

/* eslint-disable react/prefer-stateless-function */
export class MaterialIndentificationForm extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    location: PropTypes.object,
  };

  static defaultProps = {};

  checkFormType = () => {
    const { location: { pathname } } = this.props;
    if (pathname.indexOf('create') > -1) return 'create';
    return 'detail';
  }

  render() {

    return (
      <Fragment>
        <Helmet>
          <title>Material Indentification Form | Sampling & Dispensing</title>
        </Helmet>
        {this.checkFormType() === 'create'
          ? <CreateForm />
          : <IndentificationForm />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  materialIndentificationForm: makeSelectMaterialIndentificationForm(),
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

const withReducer = injectReducer({
  key: 'materialIndentificationForm',
  reducer,
});
const withSaga = injectSaga({ key: 'materialIndentificationForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MaterialIndentificationForm);
