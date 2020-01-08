import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';
import Content from './index';

class SpecificationModal extends React.Component {
  static propTypes = {
    visible: PropTypes.bool,
    onOk: PropTypes.func,
  };

  static defaultProps = {};

  render() {
    const { visible, onOk } = this.props;

    return (
      <Modal
        wrapClassName="specification-modal"
        title={<span>Specification</span>}
        visible={visible}
        onOk={onOk}
        maskClosable={false}
        closable={false}
        width="70%"
        bodyStyle={{
          padding: '12px 24px 20px 24px',
        }}
        footer={
          <Fragment>
            <Button onClick={onOk}>Cancel</Button>
            <Button type="primary" onClick={onOk}>Ok</Button>
          </Fragment>
        }
      >
        <Content />
      </Modal>
    );
  }
}

export default SpecificationModal;