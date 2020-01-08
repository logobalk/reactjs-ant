/**
 *
 * IncidentList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Collapse, Icon, Form } from 'antd';
import {
  INCIDENT_DETIAL_PATH,
} from 'containers/Navigator/constants';

import history from 'utils/history';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectIncidentList from './selectors';
import reducer from './reducer';
import saga from './saga';
// import messages from './messages';
import FilterForm from './IncidentFilterForm';
import IncidentTable from './IncidentTable';
import lessStyles from './index.less';
import './index.css';

const { Panel } = Collapse;
/* eslint-disable react/prefer-stateless-function */
export class IncidentList extends React.Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    // classes: PropTypes.object,
    form: PropTypes.object,
  };

  static defaultProps = {};

  toggleCollapse = () => {
    this.setState(state => ({
      collapse: !state.collapse,
    }));
  }

  handleChange = () => {

  }

  goToDetail = () => {
    history.push(INCIDENT_DETIAL_PATH);
  }

  render() {
    return (
      <div className={classNames(lessStyles.root, 'incident-list')}>
        {/* <FormattedMessage {...messages.header} /> */}
        <Helmet>
          <title>Incident List | Sampling & Dispensing</title>
        </Helmet>
        <QueueAnim>
          <div key="1">
            <Collapse
              className={lessStyles.collapse}
              defaultActiveKey={['1']}
              onChange={() => { }}
              expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : -90} />}
            >
              <Panel header={<span><Icon type="file-search" />Incident List</span>} key="0">
                <FilterForm form={this.props.form} />
              </Panel>
            </Collapse>
          </div>
          <div key="2">
            <IncidentTable
              onRow={() => ({
                onClick: () => { this.goToDetail(); },
              })}
            />
          </div>
        </QueueAnim>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  incidentList: makeSelectIncidentList(),
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

const withReducer = injectReducer({ key: 'incidentList', reducer });
const withSaga = injectSaga({ key: 'incidentList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  Form.create(),
)(IncidentList);
