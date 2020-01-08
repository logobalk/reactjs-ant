/**
 *
 * MaterialGroup
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Card, Tabs, Icon, Button } from 'antd';
import AuditTrailHeader from 'components/AuditTrailHeader';
import ListInfo from 'components/ListInfo';
import StatusBox from 'components/StatusBox';

import MaterialGroupTable from 'containers/MaterialGroup/MaterialGroupTable';
import AddInspectionLotModal from 'containers/MaterialGroup/AddInspectionLotModal';
import SummarizeModal from 'containers/MaterialGroup/SummarizeModal';
import MoveModal from 'containers/MaterialGroup/MaterialMoveModal';
import {
  SAMPLING_MATERIAL_GROUP_LIST_PATH,
} from 'containers/Navigator/constants';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMaterialGroup from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import styles from './index.less';

const { TabPane } = Tabs;
const info = [
  [
    {
      title: <Fragment><Icon type="calendar" /> Lot Created On</Fragment>,
      content: '15/03/2019 - 20/03/2019',
    },
    {
      title: <Fragment><Icon type="clock-circle" /> Grouping Date</Fragment>,
      content: '21/03/2019 14:07:15',
    },
  ],
  [
    {
      title: <Fragment><Icon type="table" /> Num Of Inspection Lot</Fragment>,
      content: '20',
    },
    {
      title: <Fragment><Icon type="user" /> Grouping By</Fragment>,
      content: 'Phongsathon Suriyo',
    },
  ],
];

/* eslint-disable react/prefer-stateless-function */
export class MaterialGroup extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {
    visible: false,
    visibleMove: false,
    visibleAdd: false,
  }

  openModal = (id) => {
    this.setState({ [id]: true });
  }

  closeModal = (id) => {
    this.setState({ [id]: false });
  }


  onTabChange = (key) => {
    // console.log(key);
  }

  onClickMove = (e) => {
    // const { id, type } = e.target;
    // if (type === 'button' && id === 'move') { // check for listen move button only
    //   this.openMoveModal();
    // }
  }

  goBack = () => {
    history.push(SAMPLING_MATERIAL_GROUP_LIST_PATH);
  }

  render() {
    const { visible, visibleMove, visibleAdd } = this.state;
    const { materialGroup } = this.props;
    const data = materialGroup && materialGroup.materials;

    return (
      <Fragment>
        <Helmet>
          <title>Material Group Detail | Sampling & Dispensing</title>
        </Helmet>
        <AddInspectionLotModal
          visible={visibleAdd}
          onOk={() => this.closeModal('visibleAdd')}
        />
        <SummarizeModal
          visible={visible}
          onOk={() => this.closeModal('visible')}
        />
        <MoveModal
          visible={visibleMove}
          onOk={() => this.closeModal('visibleMove')}
        />
        <QueueAnim>
          <div key="1">
            <AuditTrailHeader noEnvironment defaultUser inProcessing />
          </div>
          <div key="2">
            <Card
              className={styles.card}
              title={
                <span>
                  <FormattedMessage {...messages.header} />
                </span>
              }
              bordered={false}
              bodyStyle={{
                padding: '24px 24px',
              }}
              extra={
                <Fragment>
                  {/* <Button type="primary" icon="save" className={styles.saveBtn}>Save</Button> */}
                  <Button icon="arrow-left" onClick={this.goBack}>Back</Button>
                  <span style={{ paddingLeft: 7 }} />
                  <Button type="primary" icon="plus" className={styles.addBtn} onClick={() => this.openModal('visibleAdd')}>
                    {'Add Inspection Lot'}
                  </Button>
                </Fragment>
              }
            >
              <ListInfo list={info} />
              <p />
              <Tabs defaultActiveKey="1" onChange={this.onTabChange}>
                <TabPane tab={<span><Icon type="experiment" />Penicillin</span>} key="1">
                  <MaterialGroupTable
                    data={data}
                    tableOptions={{
                      onRow: (record, rowIndex) => ({
                        onClick: (event) => { this.onClickMove(event); },       // click row
                      }),
                    }}
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
            </Card>
          </div>
        </QueueAnim>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  materialGroup: makeSelectMaterialGroup(),
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

const withReducer = injectReducer({ key: 'materialGroup', reducer });
const withSaga = injectSaga({ key: 'materialGroup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MaterialGroup);
