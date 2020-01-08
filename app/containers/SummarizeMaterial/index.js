/**
 *
 * SummarizeMaterial
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';
// import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Alert, Card, Icon, Button } from 'antd';
import { validStatusComponents as components } from 'components/AntTable/components';
import ListInfo from 'components/ListInfo';
import StatusBox from 'components/StatusBox';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSummarizeMaterial from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import SummarizeTable from './SummarizeTable';
import styles from './index.less';

const mockInfo = [
  [
    {
      title: <Fragment><Icon type="clock-circle" /> Grouping Date</Fragment>,
      content: '21/03/2019 14:07:15',
    },
    {
      title: <Fragment><Icon type="copy" /> Group</Fragment>,
      content: '1001 (Penicilin)',
    },
  ],
  [
    {
      title: <Fragment><Icon type="user" /> Grouping By</Fragment>,
      content: 'Phongsathon Suriyo',
    },
    {
      title: <Fragment><Icon type="table" /> Num Of Inspection Lot</Fragment>,
      content: '20',
    },
  ],
];
/* eslint-disable react/prefer-stateless-function */
export class SummarizeMaterial extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    title: PropTypes.element,
    columns: PropTypes.array,
    data: PropTypes.array,
    width: PropTypes.number,
    noti: PropTypes.bool,
    info: PropTypes.array,
    email: PropTypes.bool,
    finish: PropTypes.bool,
  };

  static defaultProps = {};

  onTabChange = (key) => {
    // console.log(key);
  }

  goBack = () => {
    history.goBack();
  }

  render() {
    const { title, columns, data = [], width, noti, info = mockInfo, email, finish } = this.props;

    return (
      <Fragment>
        <Card
          title={
            <span>
              {title}
            </span>
          }
          bordered={false}
          bodyStyle={{
            padding: '24px 24px',
          }}
          extra={
            <Fragment>
              <Button icon="arrow-left" onClick={this.goBack}>Back</Button>
              {email &&
                <Fragment>
                  <span style={{ marginLeft: 7 }} />
                  <Button type="primary" icon="mail" className={styles.mailBtn}>Email</Button>
                </Fragment>
              }
              {finish &&
                <Fragment>
                  <span style={{ marginLeft: 7 }} />
                  <Button type="primary" icon="check">Finish</Button>
                </Fragment>
              }
            </Fragment>
          }
        >
          <QueueAnim>
            <div key="1">
              {
                noti && <div><Alert message="Send e-mail success" type="success" showIcon /><p /></div>
              }
              <ListInfo list={info} />
              <p />
            </div>
            <div key="2">
              <SummarizeTable
                data={data}
                columns={columns}
                width={width}
                components={components}
              />
            </div>
          </QueueAnim>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  summarizeMaterial: makeSelectSummarizeMaterial(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'summarizeMaterial', reducer });
const withSaga = injectSaga({ key: 'summarizeMaterial', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SummarizeMaterial);
