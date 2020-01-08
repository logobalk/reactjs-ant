
import React from 'react';
import { withStyles } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import {
  Icon,
} from 'antd';

import HeaderSearch from 'components/HeaderSearch';
import Notification from './notification';
import OtherMenu from './otherMenu';
import styles from './menuHeader.style';

class MenuHeader extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <div >
        {/* <HeaderSearch
          className={classes.menuButton}
          placeholder="Search"
          dataSource={[
            'example1',
            'example2',
            'example3',
          ]}
          onSearch={value => {
            console.log('input', value); // eslint-disable-line
          }}
          onPressEnter={value => {
            console.log('enter', value); // eslint-disable-line
          }}
        /> */}
        {/* <Notification className={classes.menuButton} /> */}
        <OtherMenu />
      </div >
    );
  }
}
export default withStyles(styles)(MenuHeader);
