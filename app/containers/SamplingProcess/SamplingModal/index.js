import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Button, Typography } from 'antd';

const { Text } = Typography;

class SamplingModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {};

  render() {
    const { visible, onOk, onCancel } = this.props;

    return (
      <Modal
        wrapClassName="sampling-modal"
        title={
          <Fragment>
            Confirm Start Sampling
          </Fragment>
        }
        maskClosable={false}
        closable={false}
        visible={visible}
        footer={
          <Fragment>
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={onOk} type="primary">Start Sampling <Icon type="arrow-right" /></Button>
          </Fragment>
        }
      >
        <p><Text strong>Queue : </Text>1</p>
        <p><Text strong>Group : </Text>1001 - Penicilin</p>
        <p><Text strong>Grade : </Text>A</p>
        <p><Text strong>Item Code : </Text>10000001</p>
        <p><Text strong>Item Name : </Text>Hydroxine Di Hydrochloride</p>
        <p><Text strong>Batch : </Text>M000000099</p>
      </Modal>
    );
  }
}

export default SamplingModal;