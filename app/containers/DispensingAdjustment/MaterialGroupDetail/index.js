/**
 *
 * SamplingProcess
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Icon, Button, Modal } from 'antd';

import AuditTrailHeader from 'components/AuditTrailHeader';
import MaterialGradeFilterBar from 'components/MaterialGradeFilterBar';
import ListInfo from 'components/ListInfo';
import Layout from 'components/CardLayout';
import DispensingModal from 'containers/DispensingProcess/DispensingModal';


import history from 'utils/history';
import AdjustmentModal from '../AdjustmentModal';
import MaterialGroupTable from './table';
import { data } from './table/mockdata';
import columns from './table/columns';
// import columns2 from './table/columns.modal';
import messages from '../messages';


const info = [
  [
    {
      title: <Fragment><Icon type="table" /> Material Group</Fragment>,
      content: '1001 - Penicilin',
    },
    {
      title: <Fragment><Icon type="bank" /> Room No.</Fragment>,
      content: '108',
    },
  ],
  [
    {
      title: <Fragment><Icon type="calendar" /> Dispensing Date</Fragment>,
      content: '17/03/2019 07:45:28',
    },
    {
      title: <Fragment><Icon type="profile" /> Num of Dispensed</Fragment>,
      content: '3',
    },
  ],
];
const info2 = [
  [
    {
      title: <Fragment><Icon type="table" /> Material Group</Fragment>,
      content: '1001 - Penicilin',
    },
  ],
  [
    {
      title: <Fragment><Icon type="rise" /> Grade</Fragment>,
      content: 'A',
    },
  ],
];
/* eslint-disable react/prefer-stateless-function */
export class MaterialGroupDetail extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {
    visible: false,
    visible2: false,
  }

  onRowClick = (e) => {
    const { type, id } = e.target;
    const role = e.target.getAttribute('role');
    if (type === 'button' && id === 'start') {
      this.openModal();
    } else if (type === 'button' && id === 'detail') {
      this.goToDispensingStep();
    }
    if (role === 'menuitem') {
      // console.log(e.target.getElementsByTagName('I')[0]);
      this.openAdjustModal();
    }
  }

  openModal = () => {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  openAdjustModal = () => {
    this.setState({ visible2: true });
  }

  closeAdjustModal = () => {
    this.setState({ visible2: false });
  }

  goToDispensingStep = () => {
    history.push('/dispensing-adjustment/step');
  }

  goBack = () => {
    history.push('/dispensing-adjustment');
  }

  render() {
    const { visible, visible2 } = this.state;

    return (
      <Fragment>
        {/* <Modal
          maskClosable={false}
          closable={false}
          visible={visible}
          title={
            <Fragment>
              Dispensing Process : Select material
            </Fragment>
          }
          footer={
            <Fragment>
              <Button onClick={this.closeModal}>Cancel</Button>
              <Button onClick={this.goToDispensingStep} type="primary">Start Dispensing <Icon type="arrow-right" /></Button>
            </Fragment>
          }
          width="90%"
        >
          <ListInfo list={info2} />
          <p />
          <MaterialIdentityTable
            columns={columns2}
            data={data}
            width={1000}
            tableOptions={{
              rowKey: 'id',
              hidePagination: true,
            }}
            withNoFilter
          />
        </Modal> */}
        <AuditTrailHeader readOnly />
        <AdjustmentModal
          visible={visible2}
          onOk={this.closeAdjustModal}
        />
        <DispensingModal
          visible={visible}
          onCancel={this.closeModal}
          onOk={this.goToDispensingStep}
        />
        <Layout
          title={<FormattedMessage {...messages.header} />}
          description={<FormattedMessage {...messages.description2} />}
          extra={
            <Fragment>
              <Button icon="arrow-left" onClick={this.goBack}>Back</Button>
              {/* <span style={{ marginLeft: 7 }} />
              <Button type="primary" icon="poweroff" onClick={this.openModal}>Dispensing</Button> */}
            </Fragment>
          }
        >
          <QueueAnim>
            <div key="1">
              <ListInfo list={info} />
              <p />
            </div>
            <div key="2">
              <MaterialGradeFilterBar />
              <MaterialGroupTable
                columns={columns}
                data={data}
                width={1300}
                tableOptions={{
                  rowKey: 'id',
                  bordered: true,
                  onRow: () => ({
                    onClick: (event) => { this.onRowClick(event); },       // click row
                  }),
                  // hidePagination: true,
                }}
              />
            </div>
          </QueueAnim>
        </Layout>
      </Fragment>
    );
  }
}

export default MaterialGroupDetail;
