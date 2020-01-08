import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import className from 'classnames';
import { Card, Icon, List, Avatar, Button, Dropdown, Menu, Tag } from 'antd';
import RejectDialog from 'containers/IncidentInfo/IncidentInfoDetail/rejectDialog';

class ApprovalList extends Component {

  static propTypes = {
    data: PropTypes.array,
  };

  static defaultProps = {};

  state = {
    isOpen: false,
  }

  onClick = (e) => {
    this.showDialog();
  }

  showDialog = () => {
    this.setState({ isOpen: true });
  }

  hideDialog = () => {
    this.setState({ isOpen: false });
  }

  renderStatusBox = (status) => {
    switch (status) {
      case 'accept':
        return (<Tag color="green"><Icon type="check" /> Accept</Tag>);
      case 'reject':
        return (<Tag color="red"><Icon type="close" /> Reject</Tag>);
      default:
        return (<Tag color="grey"><Icon type="down" /> Action</Tag>);
    }
  }

  render() {
    const { isOpen } = this.state;
    const { data } = this.props;
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item>
          <Icon type="check" /> Accept
        </Menu.Item>
        <Menu.Item>
          <Icon type="close" /> Reject
        </Menu.Item>
        <Menu.Item>
          <Icon type="info" /> Acknowledge
        </Menu.Item>
      </Menu>
    );

    return (
      <Fragment>
        <RejectDialog isOpen={isOpen} onOk={this.hideDialog} onCancel={this.hideDialog} />
        <Card
          title={
            <span>
              <Icon type="user" style={{ marginRight: 7 }} />
              Approval List
            </span>
          }
          bordered={false}
          bodyStyle={{ padding: '12px 18px' }}
        >
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size="large" icon="user" />}
                  title={`${item.user} | ${item.role}`}
                  description={
                    <Fragment>
                      <Dropdown overlay={menu} placement="topLeft" trigger={['click']}>
                        {this.renderStatusBox(item.status)}
                      </Dropdown>
                      {item.status && <span>26 Oct 2018 : 3.45 PM</span>}
                    </Fragment>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      </Fragment>
    );
  }
}

export default ApprovalList;