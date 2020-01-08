import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import MaterialListTable from '../table';
import columns from './columns';
import { data } from './mockdata';

class MaterialListModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
  };

  render() {
    const { visible, onOk } = this.props;

    return (
      <Modal
        wrapClassName="marterial-list-modal"
        title={
          <Fragment>
            Process Order : 1057504
          </Fragment>
        }
        maskClosable={false}
        closable={false}
        visible={visible}
        onOk={onOk}
        footer={
          <Fragment>
            <Button onClick={onOk} type="primary">OK</Button>
          </Fragment>
        }
        width={1000}
      >
        <MaterialListTable
          columns={columns}
          data={data}
          size="middle"
          scroll={{ x: 800 }}
          hidePagination
        />
      </Modal>
    );
  }
}

export default MaterialListModal;
