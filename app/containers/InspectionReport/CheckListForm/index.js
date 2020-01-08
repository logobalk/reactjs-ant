import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import className from 'classnames';
import { Card, Icon, List, Tabs, Row, Col, Button, Divider, Radio, Alert, Input } from 'antd';
import Layout from 'components/CardLayout';
import {
  INCIDENT_CREATE_PATH,
} from 'containers/Navigator/constants';
import history from 'utils/history';
import styles from './index.less';

const { TabPane } = Tabs;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const radioMock = <RadioGroup><Radio value={1}>Conform</Radio><Radio value={2}>Non-Conform</Radio></RadioGroup>;

class CheckListForm extends Component {

  static propTypes = {
    title: PropTypes.string,
    goCancel: PropTypes.func,
  };

  static defaultProps = {};


  state = {
    activeTab: '1',
  }

  callback = (key) => {
    this.setState({ activeTab: key });
    // console.log(key);
  }

  goToCOAPreview = () => {
    this.setState({ activeTab: '2' });
  }

  onClickIncidentRequest = () => {
    history.push(INCIDENT_CREATE_PATH);
  }

  checkLists = [
    { label: '1) Item Code / Item Name', form: radioMock },
    { label: '2) Batch No. (Internal Batch)', form: radioMock },
    { label: '3) Supplier Batch', form: radioMock },
    { label: '4) Country of Origin', form: radioMock },
    { label: '5) Manufacturer', form: radioMock },
    { label: '6) Quantity base on UOM', form: radioMock },
    { label: '7) Total Container', form: radioMock },
    { label: '8) Storage Condition', form: radioMock },
    {
      label: '9) Last Receiving Date',
      form: radioMock,
      description: <span style={{ color: 'red' }}>***Over 3 years / Data not found</span>,
    },
    {
      label: '10) Shelf life of Raw material after Receiving',
      form: radioMock,
      description: <span style={{ color: 'red' }}>***Production over 1 year / Not as conditional</span>,
    },
    {
      label:
        <Fragment>
          11) COA{' '}
          <Button type="primary" shape="round" icon="search" size="small" onClick={this.goToCOAPreview}>Preview</Button>
        </Fragment>,
      form: radioMock,
    },
    {
      label:
        <Fragment>
          {'12) การตรวจสอบและบันทึกสภาพความสมบูรณ์ของสินค้า'}
          <p />
          <RadioGroup><Radio value={1}>สมบูรณ์</Radio><Radio value={2}>ไม่สมบูรณ์</Radio></RadioGroup>
          <p />
          {'รายละเอียด'}<TextArea />
          <p />
          {'จำนวนที่พบ'}<Input />
        </Fragment>,
      form: radioMock,
    },
    { label: '13) Final Conclusion', form: radioMock },
  ];

  render() {
    const { activeTab } = this.state;
    const { title = 'Material Inspection Report', goCancel } = this.props;

    return (
      <Layout
        title={
          <span>
            <Icon type="profile" style={{ marginRight: 7 }} />
            {title}
          </span>
        }
        bordered={false}
        extra={
          <Fragment>
            {goCancel &&
              <Button
                className={styles.cancelBtn}
                // icon={backBtnIcon === null ? null : 'arrow-left'}
                onClick={goCancel}
              >
                {'Cancel'}
              </Button>
            }
          </Fragment>
        }
      >
        <Alert message="Waiting for incident conclusion" type="warning" showIcon />
        <p />
        <Tabs activeKey={activeTab} onChange={this.callback}>
          <TabPane tab="Summarize Report" key="1">
            <Card
              bordered={false}
              bodyStyle={{
                padding: '0 15px',
              }}
            >
              <List
                itemLayout="horizontal"
                dataSource={this.checkLists}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.label}
                      description={item.description ? item.description : null}
                    />
                    {item.form}
                  </List.Item>
                )}
              />
            </Card>
          </TabPane>
          <TabPane tab="COA (Preview)" key="2">
            <Card
              bordered={false}
              bodyStyle={{
                textAlign: 'center',
                margin: '100px 0',
              }}
            >
              COA (Preview)
            </Card>
          </TabPane>
        </Tabs>
        <Divider style={{ marginTop: 15, marginBottom: 10 }} />
        <Row>
          <Col xs={12}>
            <Button type="primary" icon="fire" className={styles.incidentBtn} onClick={this.onClickIncidentRequest}>Incident Request</Button>
          </Col>
          <Col xs={12} className={styles.btnRight}>
            {/* <Button type="primary" icon="stop" className={styles.rejectBtn}>Reject</Button> */}
            <Button type="primary" icon="check" className={styles.acceptBtn}>Accept</Button>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default CheckListForm;