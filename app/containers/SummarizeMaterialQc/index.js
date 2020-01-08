/**
 *
 * SummarizeMaterialQc
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Icon } from 'antd';

// import StatusBox from 'components/StatusBox';
import SummarizeMaterialView from 'containers/SummarizeMaterial';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSummarizeMaterialQc from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import columns from './table/columns';
import { data } from './table/mockdata';

const mockInfo = [
  [
    {
      title: <Fragment><Icon type="clock-circle" /> Grouping Date</Fragment>,
      content: '21/03/2019 14:07:15',
    },
    {
      title: <Fragment><Icon type="copy" /> Group</Fragment>,
      content: '1001 (Penicilin)',
    },
  ],
  [
    {
      title: <Fragment><Icon type="user" /> Grouping By</Fragment>,
      content: 'Phongsathon Suriyo',
    },
    {
      title: <Fragment><Icon type="table" /> Num Of Inspection Lot</Fragment>,
      content: '20',
    },
  ],
];
/* eslint-disable react/prefer-stateless-function */
export class SummarizeMaterialQc extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Summarize Material QC | Sampling & Dispensing</title>
        </Helmet>
        <SummarizeMaterialView
          title={<FormattedMessage {...messages.header} />}
          columns={columns}
          data={data}
          width={1500}
          info={mockInfo}
          noti
          email
        />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  summarizeMaterialQc: makeSelectSummarizeMaterialQc(),
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

const withReducer = injectReducer({ key: 'summarizeMaterialQc', reducer });
const withSaga = injectSaga({ key: 'summarizeMaterialQc', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SummarizeMaterialQc);
