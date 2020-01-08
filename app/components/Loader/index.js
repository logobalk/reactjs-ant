/**
 *
 * Loader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './index.less';

class Loader extends React.PureComponent {
  static propTypes = {};

  static defaultProp = {};

  render() {
    return (
      <div className={styles.loader}></div>
    );
  }
}

export default Loader;
export { default as RippleLoader } from './ripple';