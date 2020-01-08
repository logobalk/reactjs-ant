import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Card, PageHeader, Divider, Button, Icon } from 'antd';
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';

import AuditTrailHeader from 'components/AuditTrailHeader';
import Layout from 'components/CardLayout';
import ListInfo from 'components/ListInfo';
import ScanBarcodeModal from 'components/ScanBarcodeModal';
import MaterialIdentityTable from 'containers/MaterialIdentityLabel/table';

import history from 'utils/history';
import messages from '../messages';
import columns from './table/columns';
import { data } from './table/mockdata';
import styles from './index.less';

const info = [
  [
    {
      title: <Fragment><Icon type="table" /> Material Group</Fragment>,
      content: '1001 - Penicilin',
    },
    {
      title: <Fragment><Icon type="rise" /> Grade</Fragment>,
      content: 'A ,C ,D',
    },
  ],
  [
    {
      title: <Fragment><Icon type="calendar" /> Dispensing Date</Fragment>,
      content: '17/03/2019 07:45:28',
    },
    {
      title: <Fragment><Icon type="profile" /> Num of Material</Fragment>,
      content: '20',
    },
  ],
];
class MaterialIdentityLabel extends React.Component {


  static propTypes = {};

  static defaultProps = {};

  state = {
    visible: false,
  }

  openModal = () => {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  goBack = () => {
    history.push('/dispensing-verification');
  }

  onRowClick = (e) => {
    const { type, id } = e.target;
    if (type === 'button' && id === 'barcode') {
      this.openModal();
    }
  }

  render() {
    const { visible } = this.state;
    const components = {
      body: {
        cell: ({ isValidStatus, record, ...props }) => {
          if (isValidStatus) {
            const status = record.validStatus;
            if (status) {
              const { className } = props;
              return (
                <td
                  {...props}
                  className={
                    classNames([
                      className,
                      {
                        [styles.success]: status === 'PASS',
                        [styles.fail]: status === 'FAIL',
                      },
                    ])
                  }
                >
                  {props.children}
                </td>
              );
            }
          }
          return (
            <td {...props}>
              {props.children}
            </td>
          );
        },
      },
    };

    return (
      <Fragment>
        <ScanBarcodeModal
          onOk={this.closeModal}
          visible={visible}
        />
        <QueueAnim>
          <div key="1">
            <AuditTrailHeader />
          </div>
          <div key="2">
            <Layout
              className={styles.card}
              title={<FormattedMessage {...messages.header} />}
              description="Material Identity Label"
              extra={
                <Fragment>
                  <Button
                    icon="arrow-left"
                    onClick={this.goBack}
                  >Back</Button>
                  <span style={{ paddingLeft: 7 }} />
                  {/* <Button
                    className={styles.specBtn}
                    type="primary"
                    htmlType="submit"
                    icon="audit"
                    onClick={this.openSpecificationModal}
                  >Specification</Button>
                  <span style={{ paddingLeft: 7 }} /> */}
                  <Button type="primary" icon="check">Complete</Button>
                </Fragment>
              }
            >
              <ListInfo list={info} />
              <p />
              <MaterialIdentityTable
                columns={columns}
                data={data}
                width={1300}
                tableOptions={{
                  components,
                  rowKey: 'id',
                  bordered: true,
                  onRow: () => ({
                    onClick: (event) => { this.onRowClick(event); },        // click row
                  }),
                }}
              />
            </Layout>
          </div>
        </QueueAnim>
      </Fragment>
    );
  }
}

export default MaterialIdentityLabel;