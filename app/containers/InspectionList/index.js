/**
 *
 * InspectionList
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import history from 'utils/history';
import Table from 'components/AntTable';
import {
  INSPECTION_REPORT_PATH,
} from 'containers/Navigator/constants';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectInspectionList from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import columns from './columns';
import SearchBar from './Search';
import styles from './inspectionList.less';

/* eslint-disable react/prefer-stateless-function */
export class InspectionList extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    inspectionList: PropTypes.object,
  };

  static defaultProps = {};

  goToConformPage = () => {
    history.push(INSPECTION_REPORT_PATH);
  }

  render() {
    const { inspectionItems = [] } = this.props.inspectionList;

    return (
      <Fragment>
        {/* <FormattedMessage {...messages.header} /> */}
        <Helmet>
          <title>Inspection List | Sampling & Dispensing</title>
          <meta
            name="description"
            content="SIAM Pharmaceutical | Sampling & Dispensing"
          />
        </Helmet>
        <QueueAnim>
          <div key="1" style={{ textAlign: 'center', background: '#fff' }}>
            <SearchBar />
            <Table
              selectedRows={[]}
              loading={false}
              data={{
                list: inspectionItems,
                pagination: {
                  showQuickJumper: false,
                  defaultPageSize: 10,
                  pageSizeOptions: ['10', '20', '40'],
                },
              }}
              columns={columns}
              onSelectRow={() => { }}
              onChange={() => { }}
              scroll={{ x: 1000 }}
              rowKey="id"
              size="medium"
              rowClassName={(record, index) => styles.row}
              onRow={(record, rowIndex) => ({
                onClick: (event) => { this.goToConformPage(); },       // click row
              })}
            />
          </div>
        </QueueAnim>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  inspectionList: makeSelectInspectionList(),
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

const withReducer = injectReducer({ key: 'inspectionList', reducer });
const withSaga = injectSaga({ key: 'inspectionList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(InspectionList);
