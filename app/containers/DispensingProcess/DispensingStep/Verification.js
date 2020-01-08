import React, { Fragment } from 'react';
import classNames from 'classnames';

import ScanBarcodeModal from 'components/ScanBarcodeModal';

import Table from './table';
import columns from './table/columns.verification';
import styles from './index.less';

const createData = (
  id,
  roomNo,
  itemCode,
  itemName,
  batchNo,
  quantity,
  unit,
  status,
  processOrder,
  validStatus,
) => ({
  id,
  roomNo,
  itemCode,
  itemName,
  batchNo,
  quantity,
  unit,
  status,
  processOrder,
  validStatus,
});

class VerificationStep extends React.Component {
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

  renderSuccessMsg = (msg) => (<b style={{ color: '#5b8c00' }}>{msg}</b>);

  renderFailMsg = (msg) => (<b style={{ color: '#f5222d' }}>{msg}</b>);

  renderEnvironment = () => [
    createData(1, '108', this.renderSuccessMsg('10000001'), 'Hydroxine Di Hydrochloride', this.renderSuccessMsg('M000000011'), '12.569', 'Kg', 'Pending', '1051079', 'PASS'),
    createData(2, '108', this.renderSuccessMsg('10000001'), 'Hydroxine Di Hydrochloride', this.renderFailMsg('M000000011'), '0.010', 'G', 'Pending', '1051080', 'FAIL'),
  ];

  onClickRow = (e) => {
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
          visible={visible}
          onOk={this.closeModal}
        />
        <Table
          withNoFilter
          columns={columns}
          data={this.renderEnvironment()}
          tableOptions={{
            components,
            bordered: true,
            hidePagination: true,
            onRow: () => ({
              onClick: (event) => { this.onClickRow(event); },
            }),
          }}
        />
      </Fragment>
    );
  }
}

export default VerificationStep;