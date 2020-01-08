/**
 *
 * DispensingProcess
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import QueueAnim from 'rc-queue-anim';

import { dispensingProcessRoutes } from 'containers/App/routes/dispensingRoutes';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDispensingProcess from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class DispensingProcess extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Dispensing Process | Sampling & Dispensing</title>
        </Helmet>
        <QueueAnim type={['right', 'left']}>
          {dispensingProcessRoutes.map(({ ...props }) => (
            <Route {...props} />
          ))}
        </QueueAnim>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dispensingProcess: makeSelectDispensingProcess(),
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

const withReducer = injectReducer({ key: 'dispensingProcess', reducer });
const withSaga = injectSaga({ key: 'dispensingProcess', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DispensingProcess);
