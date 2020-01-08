/**
 *
 * SamplingProcess
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import QueueAnim from 'rc-queue-anim';

import { samplingProcessRoutes } from 'containers/App/routes/samplingRoutes';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSamplingProcess from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import MaterialGroupList from './MaterialGroupList';
import MaterialGroupDetail from './MaterialGroupDetail';
import SamplingStep from './SamplingStep';


/* eslint-disable react/prefer-stateless-function */
export class SamplingProcess extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <Fragment>
        <QueueAnim type={['right', 'left']}>
          {samplingProcessRoutes.map(({ ...props }) => (
            <Route {...props} />
          ))}
        </QueueAnim>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  samplingProcess: makeSelectSamplingProcess(),
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

const withReducer = injectReducer({ key: 'samplingProcess', reducer });
const withSaga = injectSaga({ key: 'samplingProcess', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SamplingProcess);
