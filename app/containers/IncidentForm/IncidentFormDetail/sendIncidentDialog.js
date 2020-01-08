import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal, Upload, Row, Col, Input, Dropdown, Menu } from 'antd';

class SendIncidentDialog extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  render() {
    const { isOpen, onOk, onCancel } = this.props;
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

    return (
      <Modal
        title="Sent Incident Notification"
        visible={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        footer={
          <Button type="primary" icon="mail">Send</Button>
        }
      >
        <p>Send e-mail notification to</p>
        <Input
          placeholder="Enter e-mail address"
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          // suffix={suffix}
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => { this.userNameInput = node; }}
        />
      </Modal>
    );
  }
}

export default SendIncidentDialog;