/**
 *
 * NoticeIcon
 *
 */

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Icon, Tabs, Badge, Spin } from 'antd';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import HeaderDropdown from '../HeaderDropdown';
import List from './NoticeList';
import styles from './index.less';

const { TabPane } = Tabs;

class NoticeIcon extends React.PureComponent {
  static Tab = TabPane;

  static propTypes = {};

  static defaultProp = {
    onItemClick: () => { },
    onPopupVisibleChange: () => { },
    onTabChange: () => { },
    onClear: () => { },
    loading: false,
    clearClose: false,
    locale: {
      emptyText: 'No notifications',
      clear: 'Clear',
      loadedAll: 'Loaded',
      loadMore: 'Loading more',
    },
    emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
  };

  state = {
    visible: false,
  };

  onItemClick = (item, tabProps) => {
    const { onItemClick } = this.props;
    const { clickClose } = item;
    onItemClick(item, tabProps);
    if (clickClose) {
      this.popover.click();
    }
  };

  onClear = name => {
    const { onClear, clearClose } = this.props;
    onClear(name);
    if (clearClose) {
      this.popover.click();
    }
  };

  onTabChange = tabType => {
    const { onTabChange } = this.props;
    // onTabChange(tabType);
  };

  onLoadMore = (tabProps, event) => {
    const { onLoadMore } = this.props;
    onLoadMore(tabProps, event);
  };

  getNotificationBox = () => {
    const { visible } = this.state;
    const { children, loading, locale } = this.props;
    if (!children) {
      return null;
    }
    const panes = React.Children.map(children, child => {
      const {
        list,
        title,
        name,
        count,
        emptyText,
        emptyImage,
        showClear,
        loadedAll,
        scrollToLoad,
        skeletonCount,
        skeletonProps,
        loading: tabLoading,
      } = child.props;
      const len = list && list.length ? list.length : 0;
      const msgCount = count || count === 0 ? count : len;
      const tabTitle = msgCount > 0 ? `${title} (${msgCount})` : title;
      return (
        <TabPane tab={tabTitle} key={name}>
          <List
            data={list}
            emptyImage={emptyImage}
            emptyText={emptyText}
            loadedAll={loadedAll}
            loading={tabLoading}
            locale={locale}
            onClear={() => this.onClear(name)}
            onClick={item => this.onItemClick(item, child.props)}
            onLoadMore={event => this.onLoadMore(child.props, event)}
            scrollToLoad={scrollToLoad}
            showClear={showClear}
            skeletonCount={skeletonCount}
            skeletonProps={skeletonProps}
            title={title}
            visible={visible}
          />
        </TabPane>
      );
    });

    return (
      <Fragment>
        <Spin spinning={false} delay={0.5}>
          <Tabs className={styles.tabs} onChange={this.onTabChange}>
            {panes}
          </Tabs>
        </Spin>
      </Fragment>
    );
  }

  handleVisibleChange = visible => {
    const { onPopupVisibleChange } = this.props;
    this.setState({ visible });
    onPopupVisibleChange(visible);
  };

  render() {
    const { visible } = this.state;
    const { className, count, popupVisible, bell } = this.props;
    const noticeButtonClass = classNames(className, styles.noticeButton);
    const NoticeBellIcon = bell || <Icon type="bell" className={styles.icon} />;
    const notificationBox = this.getNotificationBox();
    const popoverProps = {};
    if ('popupVisible' in this.props) {
      popoverProps.visible = popupVisible;
    }

    return (
      <HeaderDropdown
        placement="bottomRight"
        overlay={notificationBox}
        overlayClassName={styles.popover}
        trigger={['click']}
        visible={visible}
        onVisibleChange={this.handleVisibleChange}
        {...popoverProps}
        ref={node => (this.popover = ReactDOM.findDOMNode(node))} // eslint-disable-line
      >
        <span className={classNames(noticeButtonClass, { opened: visible })}>
          <Badge count={count} style={{ boxShadow: 'none' }} className={styles.badge}>
            {NoticeBellIcon}
          </Badge>
        </span>
      </HeaderDropdown>
    );
  }
}

export default NoticeIcon;
