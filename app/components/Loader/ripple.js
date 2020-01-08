import React from 'react';
import styles from './ripple.less';

class Ripple extends React.PureComponent {
  static propTypes = {};

  static defaultProp = {};

  render() {
    return (
      <div className={styles.ldsRipple}>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Ripple;