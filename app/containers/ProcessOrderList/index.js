/**
 *
 * ProcessOrderList
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectProcessOrderList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import ProcessOrderSelectionList from './SearchForm';
import DetailForm from './DetailForm';

/* eslint-disable react/prefer-stateless-function */
export class ProcessOrderList extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  checkType = () => {
    const { location: { pathname } } = this.props;
    const path = pathname.split('/');
    if (path.length > 2) return 'create';
    return 'list';
  }

  render() {

    return (
      <Fragment>
        <Helmet>
          <title>Process Order List | Sampling & Dispensing</title>
        </Helmet>
        {
          this.checkType() === 'create' ?
            <DetailForm title={<FormattedMessage {...messages.header} />} />
            :
            <ProcessOrderSelectionList title={<FormattedMessage {...messages.header} />} />
        }

      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  processOrderList: makeSelectProcessOrderList(),
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

const withReducer = injectReducer({ key: 'processOrderList', reducer });
const withSaga = injectSaga({ key: 'processOrderList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProcessOrderList);
