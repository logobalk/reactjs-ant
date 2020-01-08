/**
 *
 * DispensingAdjustment
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import DispensingStep from 'containers/DispensingProcess/DispensingStep';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDispensingAdjustment from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

import MaterialGroupList from './MaterialGroupList';
import MaterialGroupDetail from './MaterialGroupDetail';

/* eslint-disable react/prefer-stateless-function */
export class DispensingAdjustment extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <div>
        <Helmet>
          <title>Dispensing Request Process | Sampling & Dispensing</title>
        </Helmet>
        <QueueAnim type={['right', 'left']}>
          <Route path="/dispensing-adjustment" exact component={MaterialGroupList} />
          <Route path="/dispensing-adjustment/group" exact component={MaterialGroupDetail} />
          <Route path="/dispensing-adjustment/step" exact component={DispensingStep} />
        </QueueAnim>
        {/* <FormattedMessage {...messages.header} /> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dispensingAdjustment: makeSelectDispensingAdjustment(),
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

const withReducer = injectReducer({ key: 'dispensingAdjustment', reducer });
const withSaga = injectSaga({ key: 'dispensingAdjustment', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DispensingAdjustment);
