/**
 *
 * SummarizeMaterialStore
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SummarizeMaterialView from 'containers/SummarizeMaterial';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSummarizeMaterialStore from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import columns from './table/columns';
import { data } from './table/mockdata';


/* eslint-disable react/prefer-stateless-function */
export class SummarizeMaterialStore extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Summarize Material Store | Sampling & Dispensing</title>
        </Helmet>
        <SummarizeMaterialView
          title={<FormattedMessage {...messages.header} />}
          columns={columns}
          data={data}
          width={1800}
          finish
        />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  summarizeMaterialStore: makeSelectSummarizeMaterialStore(),
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

const withReducer = injectReducer({ key: 'summarizeMaterialStore', reducer });
const withSaga = injectSaga({ key: 'summarizeMaterialStore', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SummarizeMaterialStore);
