import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, Input, Card, Icon, Row, Col, Button } from 'antd';
import Layout from 'components/CardLayout';
import Img from 'components/Img';
import styles from './index.less';
import photo1 from '../../../images/photo1.png';
import photo2 from '../../../images/photo2.png';


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


class IncidentInfoDetail extends Component {

  static propTypes = {
    form: PropTypes.object,
  };

  static defaultProps = {};

  handleChange = (e) => {

  }

  goBack = () => {
    const { goBack } = this.props;
    if (goBack) goBack();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Layout
        title={
          <span>
            <Icon type="form" style={{ marginRight: 7 }} />
            Incident Info
          </span>
        }
        bordered={false}
        extra={
          <Button className={styles.backBtn} icon="arrow-left" onClick={this.goBack}>Back</Button>
        }
      >
        <Alert message="Waiting for conclusion" type="warning" showIcon />
        <p />
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="Incident Description" {...formItemLayout}>
            {getFieldDecorator('description', {
              rules: [{
                required: false,
                message: 'Please input incident code!',
              }],
              initialValue: 'ทดสอบ 779 ฝ่าย QC รบกวนกด Accept และ Consult QA เพื่อ Accept',
            })(
              <TextArea rows={4} placeholder="Please input description" readOnly />
            )}
          </FormItem>
          <Card
            type="inner"
            title="Issue Type : ภาชนะบรรจุฉีกขาดไม่ทะลุถึงสินค้า"
            style={{ marginTop: 20 }}
          >
            <FormItem label="Issue Detail" {...formItemCardLayout}>
              {getFieldDecorator('issueDetail', {
                rules: [{
                  required: false,
                  message: 'Please input issue detail!',
                }],
                initialValue: '',
              })(
                <Input
                  placeholder="Please input issue detail"
                  readOnly
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
                >
                  <span className={styles.nowrap}>01. รถยนต์ที่ขนส่งสินค้า</span>
                </Card>
              </Col>
            </Row>
          </Card>
          <Card
            type="inner"
            title="Issue Type : Example1"
            style={{ marginTop: 20 }}
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
                  readOnly
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
                      src={photo2}
                    />
                  }
                >
                  <span className={styles.nowrap}>01. Sub Type234234234234234</span>
                </Card>
              </Col>
            </Row>
          </Card>
        </Form>
      </Layout>
    );
  }
}

export default IncidentInfoDetail;