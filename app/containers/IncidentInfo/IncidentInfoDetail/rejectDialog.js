import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal, Upload, Row, Col, Input, Dropdown, Menu } from 'antd';

class RejectDialog extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      remark: '',
    };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ remark: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ remark: e.target.value });
  }

  render() {
    const { isOpen, onOk, onCancel } = this.props;
    const { remark } = this.state;

    return (
      <Modal
        title="Reject"
        visible={isOpen}
        onOk={onOk}
        onCancel={onCancel}
      >
        <p>Please input remark for reject</p>
        <Input
          placeholder="Write something"
          value={remark}
          onChange={this.onChangeUserName}
          ref={node => { this.userNameInput = node; }}
        />
      </Modal>
    );
  }
}

export default RejectDialog;