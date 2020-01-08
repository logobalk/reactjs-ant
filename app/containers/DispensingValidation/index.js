/**
 *
 * DispensingValidation
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDispensingValidation from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import MaterialGroupList from './MaterialGroupList';
import MaterialIdentityLabel from './MaterialIdentityLabel';

/* eslint-disable react/prefer-stateless-function */
export class DispensingValidation extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Dispensing Verification | Sampling & Dispensing</title>
        </Helmet>
        <QueueAnim type={['right', 'left']}>
          <Route path="/dispensing-verification" exact component={MaterialGroupList} />
          <Route path="/dispensing-verification/validate" exact component={MaterialIdentityLabel} />
        </QueueAnim>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dispensingValidation: makeSelectDispensingValidation(),
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

const withReducer = injectReducer({ key: 'dispensingValidation', reducer });
const withSaga = injectSaga({ key: 'dispensingValidation', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DispensingValidation);
