import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { Form, Button, Icon } from 'antd';
import history from 'utils/history';
import AuditTrailHeader from 'components/AuditTrailHeader';
import Layout from 'components/CardLayout';
import ListInfo from 'components/ListInfo';
import ProcessOrderListTable from './table';
import AddProcessOrderModal from './addProcessOrderModal';
import MaterialListModal from './materialListModal';

import styles from '../index.less';

const info = [
  [
    {
      title: <Fragment><Icon type="ordered-list" /> PO List Status</Fragment>,
      content: 'In progress',
    },
  ],
  [
    {
      title: <Fragment><Icon type="profile" /> Num of PO</Fragment>,
      content: '3',
    },
  ],
];
class DetailForm extends React.Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  };

  static defaultProps = {};

  state = {
    visible: false,
    visiblePO: false,
  }

  openModal = () => {
    this.setState({ visible: true });
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  openAddPOModal = () => {
    this.setState({ visiblePO: true });
  }

  closeAddPOModal = () => {
    this.setState({ visiblePO: false });
  }

  handleSearch = (e) => {
    e.preventDefault();
  }

  onAddPO = () => {
    this.openAddPOModal();
  }

  onClickRow = (e) => {
    const { type, id } = e.target;
    if (type === 'button' && id === 'list') {
      this.openModal();
    }
  }

  goBack = () => {
    history.push('/process-order');
  }

  render() {
    const { visible, visiblePO } = this.state;
    const { title = '' } = this.props;

    return (
      <QueueAnim>
        <AddProcessOrderModal visible={visiblePO} onOk={this.closeAddPOModal} />
        <MaterialListModal visible={visible} onOk={this.closeModal} />
        <div key="1">
          <AuditTrailHeader noAuditMode />
        </div>
        <div key="2">
          <Layout
            title={title}
            description="Select process order"
            extra={
              <Fragment>
                <Button icon="arrow-left" onClick={this.goBack}>Back</Button>
                <span style={{ marginLeft: 7 }} />
                <Button type="primary" icon="plus" onClick={this.onAddPO} className={styles.addBtn}>Add Process Order</Button>
                <span style={{ marginLeft: 7 }} />
                {/* <Button type="primary" className={styles.nextBtn}>Material Group <Icon type="arrow-right" /></Button>
                <span style={{ marginLeft: 7 }} /> */}
                <Button type="primary" icon="check">Complete</Button>
              </Fragment>
            }
          >
            <ListInfo list={info} />
            <p />
            <ProcessOrderListTable
              onRow={() => ({
                onClick: (e) => { this.onClickRow(e); },
              })}
            />
          </Layout>
        </div>
      </QueueAnim>
    );
  }
}

export default Form.create()(DetailForm);