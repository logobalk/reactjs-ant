import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Icon, Button, Typography } from 'antd';

const { Text } = Typography;

class SummarizeModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
  };

  static defaultProps = {};

  render() {
    const { visible, onOk } = this.props;

    return (
      <Modal
        id="test"
        wrapClassName="summarize-modal"
        title={
          <Fragment>
            Confirm Summarize Data
          </Fragment>
        }
        maskClosable={false}
        closable={false}
        visible={visible}
        onOk={onOk}
        footer={
          <Fragment>
            <Button onClick={onOk}>Cancel</Button>
            <Button onClick={onOk} type="primary">Start Summarize <Icon type="arrow-right" /></Button>
          </Fragment>
        }
      >
        <p style={{ color: 'red' }}><i>{'*Data can\'t edit after summarize'}</i></p>
        <p><Text strong>Group : </Text>1001 (Penicilin)</p>
        <p style={{ marginLeft: 50 }}>1002 (Cephalosporin)</p>
        <p style={{ marginLeft: 50 }}>1003 (Carbapenem)</p>
        <p style={{ marginLeft: 50 }}>1004 (Non-Pen,Non-Cep,Non Carbapenem and Other)</p>
        <p><Text strong>Grade : </Text>A, C, D</p>
      </Modal>
    );
  }
}

export default SummarizeModal;