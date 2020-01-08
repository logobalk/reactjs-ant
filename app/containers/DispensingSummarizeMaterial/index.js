/**
 *
 * DispensingSummarizeMaterial
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import SummarizeList from 'containers/DispensingSummarizeMaterial/SummarizeList';
import SummarizeDetail from 'containers/DispensingSummarizeMaterial/SummarizeDetail';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDispensingSummarizeMaterial from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class DispensingSummarizeMaterial extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    location: PropTypes.object,
  };

  static defaultProps = {};

  checkType = () => {
    const { location: { pathname } } = this.props;
    const path = pathname.split('/');
    if (path.length > 2) return 'detail';
    return 'list';
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Dispensing Summarize Material | Sampling & Dispensing</title>
        </Helmet>
        {
          this.checkType() === 'detail'
            ? <SummarizeDetail />
            : <SummarizeList />
        }
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dispensingSummarizeMaterial: makeSelectDispensingSummarizeMaterial(),
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
  key: 'dispensingSummarizeMaterial',
  reducer,
});
const withSaga = injectSaga({ key: 'dispensingSummarizeMaterial', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DispensingSummarizeMaterial);
