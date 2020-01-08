/**
 *
 * ScanBarcodeModal
 *
 */

import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Modal, Icon, Button } from 'antd';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './index.less';

class ScanBarcodeModal extends React.Component {
  static propTypes = {};

  static defaultProp = {};

  render() {
    const { visible, onOk } = this.props;

    return (
      <div>
        <Modal
          wrapClassName="scan-barcode-modal"
          title={
            <Fragment>
              <FormattedMessage {...messages.header} />
            </Fragment>
          }
          maskClosable={false}
          closable={false}
          visible={visible}
          onOk={onOk}
          footer={
            <Fragment>
              <Button onClick={onOk}>Cancel</Button>
            </Fragment>
          }
        >
          <div style={{ textAlign: 'center' }}>
            <div className={styles.barcode}>
              <Icon type="barcode" style={{ fontSize: 100 }} />
              <div className={styles.laser}></div>
            </div>
            Scanning...
          </div>
        </Modal>
      </div>
    );
  }
}

export default ScanBarcodeModal;
