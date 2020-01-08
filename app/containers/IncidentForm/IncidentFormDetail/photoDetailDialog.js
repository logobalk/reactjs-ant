import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal, Row, Col, Input, Dropdown, Menu } from 'antd';
import Img from 'components/Header/Img';
import photo1 from '../../../images/photo1.png';
class PhotoDetailDialog extends React.Component {
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
        title="Photo Detail"
        visible={isOpen}
        onOk={onOk}
        onCancel={onCancel}
      // footer={null}
      >
        <Row gutter={12}>
          <Col xs={8}>
            <Img
              squared
              alt="example"
              src={photo1}
            />

          </Col>
          <Col xs={16}>
            <Input placeholder="Please input issue detail" defaultValue="รถยนต์ที่ขนส่งสินค้า" />
            <p>Update at: 04 Feb 2019</p>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="0">
                    <Icon type="upload" /> Select from file
                  </Menu.Item>
                  <Menu.Item key="1">
                    <Icon type="camera" /> Take a photo
                  </Menu.Item>
                </Menu>
              }
              trigger={['click']}>
              <Button icon="edit">Edit Photo</Button>
            </Dropdown>
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default PhotoDetailDialog;