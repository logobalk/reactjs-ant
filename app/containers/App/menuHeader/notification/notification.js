
import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import NoticeIcon from 'components/NoticeIcon';

import styles from './notification.style';

const notiMock = [
  {
    id: '000000001',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
    title: 'You have new 14 messages',
    datetime: '2017-08-09',
    type: 'notification',
  },
  {
    id: '000000002',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
    title: 'You have new 14 messages',
    datetime: '2017-08-08',
    type: 'notification',
  }, {
    id: '000000003',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
    title: 'You have new 14 messages',
    datetime: '2017-08-07',
    read: true,
    type: 'notification',
  }, {
    id: '000000004',
    avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
    title: 'You have new 14 messages',
    datetime: '2017-08-07',
    type: 'notification',
  },
];

class Notification extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    anchorEl: null,
  };

  handleNotification = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { className } = this.props;
    const { anchorEl } = this.state;
    const ITEM_HEIGHT = 48;
    const open = Boolean(anchorEl);
    const options = ['None', 'Atria'];
    return (
      <React.Fragment>
        <NoticeIcon
          className={className}
          count={100}
          locale={{
            emptyText: 'component.noticeIcon.Empty',
            clear: 'Clear',
            loadedAll: 'Load More',
            loadMore: 'Loading-more',
          }}
          onClear={() => { }}
          onLoadMore={() => { }}
          onItemClick={() => { }}
          onPopupVisibleChange={() => { }}
          loading
          {...this.props}
        >
          <NoticeIcon.Tab
            count={2}
            list={notiMock}
            title="Notification"
            name="notification"
            emptyText="Empty"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
          // {...loadMoreProps}
          />
          <NoticeIcon.Tab
            count={0}
            list={[]}
            title="Message"
            name="message"
            emptyText="Empty"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
          // {...loadMoreProps}
          />
          <NoticeIcon.Tab
            count={0}
            list={[]}
            title="Event"
            name="event"
            emptyText="Empty"
            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
          // {...loadMoreProps}
          />
        </NoticeIcon>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Notification);
