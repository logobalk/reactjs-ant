import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal, Icon, Button, Row, Col } from 'antd';

import ListInfo from 'components/ListInfo';
import WeighingModal from 'components/WeightingModal';

import Table from '../table';
import columns from '../table/columns.measuring';
import styles from '../index.less';

const info = [
  [
    {
      title: 'Volumetric Type',
      content: 'Cylinder',
    },
    {
      title: 'Req Qty',
      content: '20 L',
    },
  ],
  [
    {
      title: 'Volume Size',
      content: '1000 ml',
    },
    {
      title: 'Actual Qty',
      content: <b style={{ color: '#3f6600' }}>20 L</b>,
    },
  ],
];
const mock = [
  {
    id: 1,
    value: '5',
    unit: 'L',
    validStatus: 'Incomplete',
  },
  {
    id: 2,
    value: '5',
    unit: 'L',
    validStatus: 'Incomplete',
  },
  {
    id: 3,
    value: '10',
    unit: 'L',
    validStatus: 'Complete',
  },
];
class MeasuringProcessModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
  };

  state = {
    visible: false,
  }

  openModal = () => {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  onClickRow = (e) => {
    const { type, id } = e.target;
    if (type === 'button' && id === 'weighing') {
      this.openModal();
    }
  }

  render() {
    const { visible, onOk } = this.props;
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
        <WeighingModal
          visible={this.state.visible}
          onCancel={this.closeModal}
        />
        <Modal
          title={
            <Row>
              <Col xs={12} style={{ paddingTop: 5 }}>
                <Icon type="dashboard" /> Dispensing Measuring Process
              </Col>
              <Col xs={12} style={{ textAlign: 'right' }}>
                <Button className={styles.addBtn} type="primary" icon="plus">Add Weight</Button>
              </Col>
            </Row>
          }
          visible={visible}
          onOk={onOk}
          onCancel={onOk}
          width="90%"
          maskClosable={false}
          closable={false}
          okText={<span><Icon type="check" /> Complete</span>}
        >
          <ListInfo list={info} />
          <p />
          <Table
            withNoFilter
            width={1000}
            columns={columns}
            data={mock}
            tableOptions={{
              components,
              bordered: true,
              hidePagination: true,
              onRow: () => ({
                onClick: (event) => { this.onClickRow(event); },
              }),
            }}
          />
        </Modal>
      </Fragment>
    );
  }
}

export default MeasuringProcessModal;