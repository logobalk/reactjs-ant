import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import { FormattedMessage } from 'react-intl';
import { Form, Button, Icon } from 'antd';
import Layout from 'components/CardLayout';
import ListInfo from 'components/ListInfo';
import MaterialGradeFilterBar from 'components/MaterialGradeFilterBar';
import history from 'utils/history';
import messages from '../messages';
import Table from './table';
import { data } from './table/mockdata';
import styles from '../index.less';

const info = [
  [
    {
      title: <Fragment><Icon type="calendar" /> Dispensing Date</Fragment>,
      content: '17/03/2019 07:45:28',
    },
    {
      title: <Fragment><Icon type="user" /> Loaded By</Fragment>,
      content: 'Phongsathon Suriyo',
    },
  ],
  [
    {
      title: <Fragment><Icon type="table" /> Material Group</Fragment>,
      content: '1001 - Penicilin',
    },
    {
      title: <Fragment><Icon type="clock-circle" /> Loaded Time</Fragment>,
      content: '17/03/2019 08:45:28',
    },
  ],
];
class SummarizeDetail extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  goBack = () => {
    history.push('/dispensing-summarize');
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    const components = {
      body: {
        cell: ({ isValidStatus, record, ...props }) => {
          if (isValidStatus) {
            const { status } = record;
            if (status) {
              const { className } = props;
              return (
                <td
                  {...props}
                  className={
                    classNames([
                      className,
                      {
                        [styles.success]: status === 'Loaded',
                        [styles.warn]: status === 'Wait',
                      },
                    ])
                  }
                >
                  {props.children}
                </td>
              );
            }
          }
          return (
            <td {...props}>
              {props.children}
            </td>
          );
        },
      },
    };

    return (
      <Layout
        title={<FormattedMessage {...messages.header} />}
        description="Detail of data for Store"
        extra={
          <Fragment>
            <Button icon="arrow-left" onClick={this.goBack}>Back</Button>
            {/* <span style={{ marginLeft: 7 }} />
            <Button icon="check" type="primary">Done</Button> */}
          </Fragment>
        }
      >
        <QueueAnim>
          <div key="1">
            <ListInfo list={info} />
          </div>
          <p />
          <div key="2">
            <MaterialGradeFilterBar />
            <Table
              data={data}
              tableOptions={{
                components,
                bordered: true,
              }}
            />
          </div>
        </QueueAnim>
      </Layout>
    );
  }
}

export default Form.create()(SummarizeDetail);