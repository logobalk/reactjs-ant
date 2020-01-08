/**
 *
 * WeighingModalExample
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { Card, Button } from 'antd';

import WeightingModal from 'components/WeightingModal';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectWeighingModalExample from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class WeighingModalExample extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  state = {
    visible: false,
    mode: 'statistic',
  }

  showModal = () => {
    this.setState({
      visible: true,
      mode: '',
    });
  }

  showModalWithTareMode = () => {
    this.setState({
      visible: true,
      mode: 'tare',
    });
  }

  showModalStatistic = () => {
    this.setState({
      visible: true,
      mode: 'statistics',
    });
  }

  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, mode } = this.state;

    return (
      <div>
        <Card
          title={
            <span>
              <FormattedMessage {...messages.header} />
            </span>
          }
          bordered={false}
        >
          <Button icon="dashboard" onClick={this.showModal}>Start Weighting (Gross Only)</Button>
          <p />
          <Button icon="dashboard" onClick={this.showModalWithTareMode}>Start Weighting (N, T, G#)</Button>
          <p />
          <Button icon="dashboard" onClick={this.showModalStatistic}>Start Weighting (Statistics Mode)</Button>
        </Card>
        <WeightingModal visible={visible} onOk={this.handleOk} onCancel={this.handleCancel} mode={mode} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  weighingModalExample: makeSelectWeighingModalExample(),
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

const withReducer = injectReducer({ key: 'weighingModalExample', reducer });
const withSaga = injectSaga({ key: 'weighingModalExample', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WeighingModalExample);
