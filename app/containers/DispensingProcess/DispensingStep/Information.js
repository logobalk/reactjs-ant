import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';

import MeasuringModal from './MeasuringProcessModal';
import WeighingProcessModal from './WeighingProcessModal';
import Table from './table';
import columns from './table/columns.information.weighing';
import columns2 from './table/columns.information.measuring';
import styles from './index.less';

const createData = (
  id,
  roomNo,
  itemCode,
  itemName,
  batchNo,
  quantity,
  actualQty,
  unit,
  status,
  processOrder,
  validStatus,
  numOfWeighting,
) => ({
  id,
  roomNo,
  itemCode,
  itemName,
  batchNo,
  quantity,
  actualQty,
  unit,
  status,
  processOrder,
  validStatus,
  numOfWeighting,
});

class InformationStep extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  state = {
    visible: false,
    visible2: false,
  }

  onClickRow = (e) => {
    const { type } = e.target;
    if (type === 'button') {
      this.openModal();
    }
  }

  onClickRow2 = (e) => {
    const { type } = e.target;
    if (type === 'button') {
      this.openMeasuringModal();
    }
  }

  openModal = () => {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  openMeasuringModal = () => {
    this.setState({ visible2: true });
  }

  closeMeasuringModal = () => {
    this.setState({ visible2: false });
  }

  renderWeightInfo = () => [
    createData(1, '108', '10000001', 'Hydroxine Di Hydrochloride', 'M000000011', '12.569', <b style={{ color: '#d4b106' }}>12.000</b>, 'Kg', 'Pending', '1051079', 'Incomplete', '1/2'),
    createData(2, '108', '10000001', 'Hydroxine Di Hydrochloride', 'M000000011', '0.010', <b style={{ color: '#3f6600' }}>0.010</b>, 'G', 'Pending', '1051080', 'Complete', '1/1'),
  ];

  renderVolumeInfo = () => [
    createData(1, '108', '10000001', 'Hydroxine Di Hydrochloride', 'M000000011', '20', <b style={{ color: '#3f6600' }}>20</b>, 'L', 'Pending', '1051079', 'Complete', '3/3'),
  ];

  render() {
    const { visible, visible2 } = this.state;
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
                        [styles.success]: status === 'Complete',
                        [styles.incomplete]: status === 'Incomplete',
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
        <WeighingProcessModal
          visible={visible}
          onOk={this.closeModal}
        />
        <MeasuringModal
          visible={visible2}
          onOk={this.closeMeasuringModal}
        />
        <i>***Prototype for weighing method</i>
        <Table
          withNoFilter
          width={1000}
          columns={columns}
          data={this.renderWeightInfo()}
          tableOptions={{
            components,
            bordered: true,
            hidePagination: true,
            onRow: () => ({
              onClick: (event) => { this.onClickRow(event); },
            }),
          }}
        />
        <p />
        <i>***Prototype for volumetric measuring method</i>
        <Table
          withNoFilter
          width={1000}
          columns={columns2}
          data={this.renderVolumeInfo()}
          tableOptions={{
            components,
            bordered: true,
            hidePagination: true,
            onRow: () => ({
              onClick: (event) => { this.onClickRow2(event); },
            }),
          }}
        />
      </Fragment>
    );
  }
}

export default InformationStep;