/**
 *
 * StatusBox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const style = {
  color: '#fff',
  fontWeight: 600,
  padding: '5px 10px',
  borderRadius: '4px',
};
const colors = {
  success: '#389e0d',
  error: '#f5222d',
  warn: '#d4b106',
  default: '#8c8c8c',
};
class StatusBox extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProp = {};

  render() {
    const { type = 'default', text = '' } = this.props;

    return (
      <span style={{ ...style, background: colors[type] }}>{text}</span>
    );
  }
}

export default StatusBox;
