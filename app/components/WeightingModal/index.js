/**
 *
 * WeightingModal
 *
 */

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
// import styled from 'styled-components';
import { Modal, Icon, Button } from 'antd';
import Loader from 'components/Loader';


import { FormattedMessage } from 'react-intl';
import messages from './messages';
import logo from './scale.svg';
import { processGMode } from './Sartorius/g-mode';
import { processNTGMode } from './Sartorius/ntg-mode';
import { processStatisticMode } from './Sartorius/statistics-mode';
import WeightingLayout from './Layout/weighting';
import StatisticsLayout from './Layout/statistics';

const gross = 'gross';
const tare = 'tare';
const statistics = 'statistics';

class WeightingModal extends Component {
  static propTypes = {
    mode: PropTypes.string,
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProp = {
    mode: 'gross',
    visible: false,
    onOk: () => { },
    onCancel: () => { },
  };

  state = {
    isFocus: true,
    isLoading: false,
    temp: '',
    data: {},
    comp: [],
    line: 0,
    divider: 0,
    error: false,
    completed: false,
  }

  componentWillUnmount() {
    this.removeListener();
  }

  componentDidUpdate() {
    const { visible } = this.props;
    if (visible) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    this.addListener();
  }

  handleClose = () => {
    const { onCancel } = this.props;
    onCancel();
    this.removeListener();
    this.resetWeightingValue();
  }

  addListener = () => {
    this.removeListener();
    document.addEventListener('keypress', this.handleKeydown);
    window.addEventListener('focus', this.handleWindowFocus);
    window.addEventListener('blur', this.handleWindowFocus);
  }

  removeListener = () => {
    document.removeEventListener('keypress', this.handleKeydown);
    window.removeEventListener('focus', this.handleWindowFocus);
    window.removeEventListener('blur', this.handleWindowFocus);
  }

  resetWeightingValue = () => {
    this.setState({
      isFocus: true,
      isLoading: false,
      temp: '',
      data: {},
      comp: [],
      line: 0,
      divider: 0,
      error: false,
      completed: false,
    });
  }

  setWindowFocus = (status) => {
    this.setState({ isFocus: status });
  }

  setWeightValueObject = (obj) => {
    this.setState(state => ({
      data: {
        ...state.data,
        ...obj,
      },
    }));
  };

  setWeightTempValue = (value) => {
    this.setState(state => ({
      temp: state.temp + value,
    }));
  }

  clearWeightTempValue = () => {
    this.setState({ temp: '' });
  }

  increaseNumberOfLine = () => {
    this.setState(state => ({ line: state.line + 1 }));
  }

  resetNumberOfLine = () => {
    this.setState({ line: 0 });
  }

  handleError = (err) => {
    this.setState({ error: true });
  }

  setCompleteStatus = () => {
    this.setState({ completed: true });
  }

  increaseDivider = () => {
    this.setState(state => ({ divider: state.divider + 1 }));
  }

  addComponent = (obj) => {
    this.setState(state => ({
      comp: [
        ...state.comp,
        obj,
      ],
    }));
  }

  handleWeightingMode = (value, line, divider) => {
    const { mode } = this.props;
    switch (mode) {
      case gross:
        return processGMode(value, line, divider);
      case tare:
        return processNTGMode(value, line, divider);
      case statistics:
        return processStatisticMode(value, line, divider);
      default:
        return processGMode(value, line, divider);
    }
  }

  handleWindowFocus = (e) => {
    const { type } = e;
    if (type === 'focus') {
      this.setWindowFocus(true);
    } else {
      this.setWindowFocus(false);
    }
  }

  handleKeydown = (e) => {
    const { isLoading } = this.state;
    if (!isLoading) {
      this.setState({
        isLoading: true,
      });
    }
    this.handleStoreKeyValue(e);
  }

  handleStoreKeyValue = (e) => {
    const { key } = e;
    const { temp, line, divider, completed, error } = this.state;
    const { mode } = this.props;

    if (completed || error) return;

    // Process current line when receive "Enter" key
    if (key === 'Enter') {
      try {
        // test
        // this.setWeightValueObject({ test: 'test' });

        const obj = this.handleWeightingMode(temp, line, divider);
        // process if received divider (GLP mode)
        if (obj && obj === 'divider') {
          this.resetNumberOfLine();
          this.clearWeightTempValue();
          this.increaseDivider();
          return;
        }

        // process when complete all received line
        if (!obj) {
          this.setCompleteStatus();
          console.log(this.state.data);
          return;
        }

        // handle statistic mode
        if (Array.isArray(obj)) {
          this.addComponent(obj[0]);
        } else {
          this.setWeightValueObject(obj);
        }
        // console.log(obj);

      } catch (err) {
        this.handleError();
      }

      // Increase number of line
      this.increaseNumberOfLine();

      // Clear temp after process current line
      this.clearWeightTempValue();
      return;
    }

    // Store current key to temp (string of current line)
    this.setWeightTempValue(key);
  }

  renderLayout() {
    const { data } = this.state;
    const { mode } = this.props;
    switch (mode) {
      case statistics:
        return (<StatisticsLayout data={data} />);
      default:
        return (<WeightingLayout data={data} />);
    }
  }

  render() {
    const { isFocus, isLoading, completed, data, error, comp } = this.state;
    const { visible, onOk, mode } = this.props;
    const isProcess = (Object.keys(data).length === 0 && comp.length === 0) || error;

    return (
      <Modal
        wrapClassName="weighting-modal"
        title={<FormattedMessage {...messages.header} />}
        visible={visible}
        onOk={onOk}
        maskClosable={false}
        closable={false}
        width={(mode === statistics && !isProcess) ? 1000 : 500}
        footer={
          <Fragment>
            {
              ((Object.keys(data).length > 0 || comp.length > 0) && !completed) &&
              <div style={{ display: 'inline-block', float: 'left' }}>
                {isFocus && <div style={{ marginLeft: 20 }}><Loader /> </div>}
                {!isFocus && <h3><Icon type="exclamation-circle" /> Click to window for active</h3>}
              </div>
            }
            <Button onClick={this.handleClose}>Cancel</Button>
            {(completed || error) && <Button type="primary" onClick={this.resetWeightingValue}>Reset</Button>}
          </Fragment>
        }
      >
        {
          isProcess ?
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <span
                className={
                  className(
                    'ant-badge-status-dot',
                    { 'ant-badge-status-processing': isFocus && !error },
                    { 'ant-badge-status-default': !isFocus || error },
                  )
                }
                style={{ width: 100, height: 100, background: '#fff' }}>
                <img className="weighting-logo" src={logo} alt="weighting-logo" width="100" />
              </span>
              {
                !error && (
                  !isLoading ?
                    <Fragment>
                      {isFocus && <h3>Press print button for weighting</h3>}
                      {!isFocus && <h3><Icon type="exclamation-circle" /> Click to window for active</h3>}
                    </Fragment>
                    : <Loader />
                )
              }
              {
                error && <h3 style={{ color: '#AC1F2D' }}><Icon type="exclamation-circle" /> Sorry wrong input format!</h3>
              }
            </div>
            : this.renderLayout()
        }
      </Modal>
    );
  }
}

export default WeightingModal;
