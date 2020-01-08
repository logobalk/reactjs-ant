/**
 *
 * HeaderDropdown
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import styles from './index.less';


class HeaderDropdown extends React.PureComponent {
  static propTypes = {};

  static defaultProp = {};

  render() {
    const { overlayClassName, ...props } = this.props;

    return (
      <Dropdown overlayClassName={classNames(styles.container, overlayClassName)} {...props} />
    );
  }
}

export default HeaderDropdown;
