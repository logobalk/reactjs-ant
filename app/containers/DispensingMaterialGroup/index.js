/**
 *
 * DispensingMaterialGroup
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Button, Tabs, Icon } from 'antd';

import AuditTrailHeader from 'components/AuditTrailHeader';
import Layout from 'components/CardLayout';
import ListInfo from 'components/ListInfo';
import MaterialGroupTable from 'containers/DispensingMaterialGroup/table';


import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectDispensingMaterialGroup from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { data } from './table/mockdata';

const info = [
  [
    {
      title: <Fragment><Icon type="calendar" /> Grouping Date</Fragment>,
      content: '17/03/2019 07:45:28',
    },
    {
      title: <Fragment><Icon type="user" /> Grouping By</Fragment>,
      content: 'Phongsathon Suriyo',
    },
  ],
  [
    {
      title: <Fragment><Icon type="table" /> Num of Process Order</Fragment>,
      content: '3',
    },
    {
      title: <Fragment><Icon type="profile" /> Num of Material</Fragment>,
      content: '10',
    },
  ],
];
const { TabPane } = Tabs;
/* eslint-disable react/prefer-stateless-function */
export class DispensingMaterialGroup extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  goBack = () => {
    history.push('/dispensing-group');
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Dispensing Material Group Detail | Sampling & Dispensing</title>
        </Helmet>
        <QueueAnim>
          <div key="1">
            <AuditTrailHeader noEnvironment noAuditMode />
          </div>
          <div key="2">
            <Layout
              title={<FormattedMessage {...messages.header} />}
              description="Dispensing Verification"
              extra={
                <Fragment>
                  <Button icon="arrow-left" onClick={this.goBack}>Back</Button>
                  <span style={{ marginLeft: 7 }} />
                  <Button icon="check" type="primary">Complete</Button>
                </Fragment>
              }
            >
              <ListInfo list={info} />
              <p />
              <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
                <TabPane tab={<span><Icon type="experiment" />Penicillin</span>} key="1">
                  <MaterialGroupTable
                    data={data}
                  // tableOptions={{
                  //   onRow: (record, rowIndex) => ({
                  //     onClick: (event) => { this.onClickMove(event); },       // click row
                  //   }),
                  // }}
                  />
                </TabPane>
                <TabPane tab={<span><Icon type="fire" />Cephalosporin</span>} key="2">
                  <MaterialGroupTable data={[]} />
                </TabPane>
                <TabPane tab={<span><Icon type="deployment-unit" />Carbapenem</span>} key="3">
                  <MaterialGroupTable data={[]} />
                </TabPane>
                <TabPane tab={<span><Icon type="disconnect" />API (Non-Pen, Non-Cep, Non Carbapenem)</span>} key="4">
                  <MaterialGroupTable data={[]} />
                </TabPane>
              </Tabs>
            </Layout>
          </div>
        </QueueAnim>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  dispensingMaterialGroup: makeSelectDispensingMaterialGroup(),
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

const withReducer = injectReducer({ key: 'dispensingMaterialGroup', reducer });
const withSaga = injectSaga({ key: 'dispensingMaterialGroup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DispensingMaterialGroup);
