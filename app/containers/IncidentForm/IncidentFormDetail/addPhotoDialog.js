import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal, Upload } from 'antd';

class AddPhotoDialog extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {};

  render() {
    const { isOpen, onOk, onCancel } = this.props;

    return (
      <Modal
        title="Add Photo"
        visible={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        footer={null}
      >
        <div style={{ textAlign: 'center', padding: '30px 0' }}>
          <Upload>
            <Button>
              <Icon type="upload" /> Click to Upload
            </Button>
          </Upload>
          <p />
          <p>Or</p>
          <Button icon="camera" >Take a photo</Button>
        </div>
      </Modal>
    );
  }
}

export default AddPhotoDialog;