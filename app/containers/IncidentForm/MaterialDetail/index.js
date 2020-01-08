import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import Layout from 'components/CardLayout';
import { Icon, List, Button } from 'antd';
import styles from './index.less';
import './index.css';

class MaterialDetail extends Component {

  static propTypes = {
    data: PropTypes.array,
    horizontal: PropTypes.bool,
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    options: PropTypes.object,
    icon: PropTypes.string,
  };

  static defaultProps = {};


  render() {
    const { data, horizontal, title = 'Material Detail', icon = 'file-text', options = {}, goBack, backBtnTitle, backBtnIcon } = this.props;

    return (
      <Layout
        title={
          <span>
            {icon && <Icon type={icon} style={{ marginRight: 7 }} />}
            {title}
          </span>
        }
        bordered={false}
        className={
          className(
            'material-detail-card',
            {
              'horizontal': horizontal,
            })
        }
        extra={
          <Fragment>
            {goBack &&
              <Button
                className={styles.backBtn}
                icon={backBtnIcon === null ? null : 'arrow-left'}
                onClick={goBack}
              >
                {backBtnTitle || 'Back'}
              </Button>
            }
          </Fragment>
        }
        {...options}
      >
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.label}
                description={!horizontal ? item.value : null}
                style={{ width: '100%' }}
              />
              {horizontal && item.value}
            </List.Item>
          )}
        />
      </Layout>
    );
  }
}

export default MaterialDetail;