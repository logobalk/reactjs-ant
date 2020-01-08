/**
 *
 * SummarizeMaterialListStore
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SummarizeMaterialList from 'containers/SummarizeMaterialList';
import {
  SAMPLING_SUMMARIZE_STORE_DETAIL_PATH,
} from 'containers/Navigator/constants';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSummarizeMaterialListStore from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class SummarizeMaterialListStore extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  goToDetail = () => {
    history.push(SAMPLING_SUMMARIZE_STORE_DETAIL_PATH);
  }

  render() {
    return (
      <SummarizeMaterialList title="Store" onClickRow={this.goToDetail} />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  summarizeMaterialListStore: makeSelectSummarizeMaterialListStore(),
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
  key: 'summarizeMaterialListStore',
  reducer,
});
const withSaga = injectSaga({ key: 'summarizeMaterialListStore', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SummarizeMaterialListStore);
