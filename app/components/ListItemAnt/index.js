/**
 *
 * ListItemAnt
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
// import styled from 'styled-components';
import { List, Card, Icon } from 'antd';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import styles from './index.less';
import './index.css';

class ListItemAnt extends React.Component {
  static propTypes = {
    data: PropTypes.array,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    options: PropTypes.object,
    icon: PropTypes.string,
  };

  static defaultProp = {};

  render() {
    const { data = [], title = 'Material Detail', icon = 'file-text', options = {} } = this.props;

    return (
      // <div>
      //   <FormattedMessage {...messages.header} />
      // </div>
      <Card
        title={
          <span>
            {icon && <Icon type={icon} style={{ marginRight: 7 }} />}
            {title}
          </span>
        }
        // bordered={false}
        // className={styles.card}
        bodyStyle={{
          padding: '5px 20px 18px 20px',
        }}
        {...options}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            item.extra
              ?
              <List.Item>
                <List.Item.Meta
                  title={item.label}
                  description={item.description ? item.description : null}
                />
                {item.value}
              </List.Item>
              :
              <List.Item>
                <List.Item.Meta
                  className={className(styles.meta, item.className)}
                  title={item.label}
                  description={item.value}
                />
              </List.Item>
          )}
        />
      </Card>
    );
  }
}

export default ListItemAnt;
