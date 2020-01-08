import React, { Fragment } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Form, Row, Col, Button, Card, List, Divider } from 'antd';
// import PropTypes from 'prop-types';
import ListInfo from 'components/ListInfo';
import history from 'utils/history';
import MaterialTable from './Table';
import Layout from '../Layout';
import styles from '../index.less';

const info = [
  [
    {
      title: 'Material No.',
      content: '10000069',
    },
    {
      title: 'Batch No.',
      content: '0000057398',
    },
    {
      title: 'Receive By(RM Store)',
      content: <Button type="primary" icon="scan">Scan</Button>,
    },
    {
      title: 'Review By(LO Scientist)',
      content: <Button type="primary" icon="scan">Scan</Button>,
    },
    {
      title: 'Approved By(LO Supervisor)',
      content: <Button type="primary" icon="scan">Scan</Button>,
    },
  ],
  [
    {
      title: 'Material Name',
      content: 'Hydroxine Di Hydrochloride',
    },
    {
      title: 'Carton Size',
      content: '17.007 KG',
    },
    {
      title: 'Form Created By',
      content: 'Phongsathon Suriyo',
    },
    {
      title: 'Form Created On',
      content: '04/04/2019 15:48:15',
    },
    {
      title: 'Total Carton',
      content: '4/10',
    },
  ],
];

/* eslint-disable react/prefer-stateless-function */
export class IndentificationForm extends React.Component {
  static propTypes = {
    // form: PropTypes.object,
  };

  static defaultProps = {};

  handleSubmit = (e) => {
    e.preventDefault();
  }

  onBack = () => {
    history.push('/material-identification');
  }

  render() {
    // const { getFieldDecorator } = this.props.form;

    return (
      <Layout
        title="บันทึกการส่งวิเคราะห์"
        extra={
          <Fragment>
            <Button icon="arrow-left" onClick={this.onBack}>Back</Button>
            <span style={{ marginLeft: 7 }} />
            {/* <Button icon="delete" type="danger">Delete</Button>
            <span style={{ marginLeft: 7 }} /> */}
            <Button icon="printer" type="primary" onClick={this.onCancel} className={styles.printBtn}>Print</Button>
            <span style={{ marginLeft: 7 }} />
            <Button icon="check" type="primary">Complete</Button>
          </Fragment>
        }
      >
        <QueueAnim>
          <div key="1">
            <ListInfo list={info} />
          </div>
          <p />
          <Row key="2">
            <MaterialTable />
          </Row>
        </QueueAnim>
      </Layout>
    );
  }
}


export default Form.create()(IndentificationForm);
