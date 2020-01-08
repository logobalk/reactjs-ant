import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select, Card, Button, Icon, Row, Col, Modal } from 'antd';
import Img from 'components/Img';
import Layout from 'components/CardLayout';
import styles from './index.less';

import AddIssueTypeModal from './addIssueModal';
import AddPhotoDialog from './addPhotoDialog';
import PhotoDetailDialog from './photoDetailDialog';
import SendIncidentDialog from './sendIncidentDialog';

import photo1 from '../../../images/photo1.png';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

const formItemCardLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const { confirm } = Modal;

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this image?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

class IncidentFormDetail extends React.Component {

  static propTypes = {
    form: PropTypes.object,
  };

  static defaultProps = {};

  state = {
    visible: false,
    visible2: false,
    isOpen: false,
    send: false,
  }


  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hiddenModal = () => {
    this.setState({
      visible: false,
    });
  }

  showAddModal = () => {
    this.setState({
      visible2: true,
    });
  }

  hideAddModal = () => {
    this.setState({
      visible2: false,
    });
  }

  showPhotoDetailModal = () => {
    this.setState({
      isOpen: true,
    });
  }

  hiddenPhotoDetailModal = () => {
    this.setState({
      isOpen: false,
    });
  }

  showSendIncidentModal = () => {
    this.setState({
      send: true,
    });
  }

  hiddenSendIncidentModal = () => {
    this.setState({
      send: false,
    });
  }


  handleChange = (e) => {

  }

  render() {
    const { visible2 } = this.state;
    const { goBack, backBtnTitle, backBtnNoIcon } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout
        title={
          <span>
            <Icon type="form" style={{ marginRight: 7 }} />
            Incident Form
          </span>
        }
        bordered={false}
        extra={
          <Fragment>
            {goBack &&
              <Button
                className={styles.backBtn}
                icon={backBtnNoIcon ? null : 'arrow-left'}
                onClick={goBack}
              >
                {backBtnTitle || 'Back'}
              </Button>
            }
          </Fragment>
        }
      >
        <AddIssueTypeModal
          visible={visible2}
          onOk={this.hideAddModal}
          onCancel={this.hideAddModal}
        />
        <AddPhotoDialog
          isOpen={this.state.visible}
          onOk={this.hiddenModal}
          onCancel={this.hiddenModal}
        />
        <PhotoDetailDialog
          isOpen={this.state.isOpen}
          onOk={this.hiddenPhotoDetailModal}
          onCancel={this.hiddenPhotoDetailModal}
        />
        <SendIncidentDialog
          isOpen={this.state.send}
          onOk={this.hiddenSendIncidentModal}
          onCancel={this.hiddenSendIncidentModal}
        />
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Incident Description" {...formItemLayout}>
            {getFieldDecorator('description', {
              rules: [{
                required: false,
                message: 'Please input incident code!',
              }],
            })(
              <TextArea rows={4} placeholder="Please input description" />
            )}
          </FormItem>
          {/* <FormItem label="Issue Type (Image)" {...formItemLayout}>
            {getFieldDecorator('issueType', {
              rules: [{
                required: false,
                message: 'Please input incident code!',
              }],
            })(
              <Select onChange={this.handleChange} placeholder="Please select issue type">
                <Option value="1">พบสิ่งแปลกปลอมปนเปื้อนภายในเนื้อวัตถุดิบ</Option>
                <Option value="2">พบ Appearance ของวัตถุดิบไม่ตรงกับ Material master "mm03"</Option>
                <Option value="3">พบสัตว์พาหะปะปน</Option>
                <Option value="4">พบภาชนะบรรจุภายในชำรุดหรือฉีกขาด</Option>
                <Option value="5">พบข้อมูล COA และฉลากจากผู้ขายไม่ตรงกัน</Option>
                <Option value="6">อื่นๆ</Option>
              </Select>
            )}
          </FormItem> */}
          <div style={{ textAlign: 'right' }}>
            <Button type="primary" className={styles.addBtn} icon="plus" onClick={this.showAddModal}>Add Issue</Button>
            {/* <Button type="default" style={{ marginRight: 7 }}>Cancel</Button> */}
            <Button type="primary" htmlType="submit" icon="mail" onClick={this.showSendIncidentModal}>Send Incident</Button>
          </div>
          <Card
            type="inner"
            title="Issue Type : ภาชนะบรรจุฉีกขาดไม่ทะลุถึงสินค้า"
            style={{ marginTop: 20 }}
            extra={
              <Fragment>
                <Button type="danger" icon="delete" style={{ marginRight: 7 }}>Remove</Button>
                <Button icon="camera" onClick={this.showModal}>Add Photo</Button>
              </Fragment>
            }
          >
            <FormItem label="Issue Detail" {...formItemCardLayout}>
              {getFieldDecorator('issueDetail', {
                rules: [{
                  required: false,
                  message: 'Please input issue detail!',
                }],
                initialValue: 'ทดสอบ',
              })(
                <Input
                  placeholder="Please input issue detail"
                />
              )}
            </FormItem>
            <Row gutter={12}>
              <Col xs={24} sm={12} md={8} style={{ marginTop: 10 }}>
                <Card
                  hoverable
                  cover={
                    <Img
                      squared
                      alt="example"
                      src={photo1}
                    />
                  }
                  actions={[<Icon type="edit" onClick={this.showPhotoDetailModal} />, <Icon type="delete" onClick={showDeleteConfirm} />]}
                >
                  <span className={styles.nowrap}>01. รถยนต์ที่ขนส่งสินค้า</span>
                </Card>
              </Col>
            </Row>
          </Card>
        </Form>
      </Layout>
    );
  }
}

export default IncidentFormDetail;