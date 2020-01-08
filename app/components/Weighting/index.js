/**
 *
 * Weighting
 *
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
// import styled from 'styled-components';
import moment from 'moment';
import { Modal, Icon, Button } from 'antd';
import Loader from 'components/Loader';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import img from '../WeightingModal/scale.svg';


const config = {
  withDate: true,
  dateFormat: 'DD-MMM-YYYY HH:mm:ss',
  lineGOnly: 1,
  lineNTG: 3,
  grossKeyword: 'G',
  netKeyword: 'N',
  tareKeyword: 'T',
  subStrIndex: {
    type: 0,
    keyword: [0, 2],
    symbol: [6, 7],
    value: [8, 16],
    unit: [17, 18],
  },
};

class Weighting extends Component {
  static propTypes = {
    tareMode: PropTypes.bool,
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProp = {
    tareMode: false,
    visible: false,
    onOk: () => { },
    onCancel: () => { },
  };

  state = {
    isFocus: true,
    isLoading: false,
    data: [],
    dataObj: {},
    line: 0,
    haveError: false,
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
      data: [],
      dataObj: {},
      line: 0,
      haveError: false,
      completed: false,
    });
  }

  handleKeydown = (e) => {
    const { isLoading } = this.state;
    if (!isLoading) {
      this.setState({
        isLoading: true,
      });
    }
    // console.log('keydown', e);
    this.storeWeitghtValue(e);
  }

  // For SARTORUIS weighting machine pattern
  storeWeitghtValue = (e) => {
    const {
      dateFormat,
      withDate,
      lineGOnly,
      lineNTG,
    } = config;
    const { data, line, haveError } = this.state;
    const { tareMode } = this.props;
    const { key } = e;

    // can't process if have error
    if (haveError) {
      // console.error('still have error!');
      return;
    }

    // demo for mode1 (gross weight only)
    // store key process
    const lineMode = tareMode ? lineNTG : lineGOnly;
    const inputLine = lineMode + (withDate ? 1 : 0);

    // ignore input when receive "Enter" key
    if (key === 'Enter') {
      if (line < inputLine) { // increase line index if current line less than input line
        const currentLine = line + 1;
        this.setState({ line: currentLine });
        try {

          // process date line
          if (withDate && currentLine === 1) {
            const date = data[currentLine - 1];
            // validating date
            const checkDate = moment(date, dateFormat).isValid();
            if (!checkDate) {
              throw new Error('Date format incorrect');
            }
            this.setWeightValueObject({ time: date });
            // console.log(moment(date, dateFormat).toString());
          }

          // process weight value line
          if (currentLine > 1 && currentLine <= inputLine) {
            // TODO : need to validate for each line
            const { grossKeyword, netKeyword, tareKeyword } = config;
            const keywordMaster = {
              [grossKeyword]: 'gross',
              [netKeyword]: 'net',
              [tareKeyword]: 'tare',
            };
            const {
              type,
              keyword,
              symbol,
              value,
              unit,
            } = config.subStrIndex;
            const str = data[currentLine - 1];
            const weightType = str[type];
            const obj = {
              [keywordMaster[weightType]]: {
                keyword: str.substring(...keyword).trim(),
                symbol: str.substring(...symbol).trim(),
                value: str.substring(...value).trim(),
                unit: str.substring(...unit).trim(),
              },
            };
            this.setWeightValueObject(obj);
          }

          // final process when reading complete
          if (currentLine === inputLine) {
            const weightData = this.state.dataObj;
            // console.log(line);
            // console.log(data);
            console.log(weightData);
            this.setState({ completed: true });
          }
        } catch (err) {
          // console.error(err);
          this.setState({ haveError: true });
        }
      }
      return;
    }

    // ignore when current line more than input line
    if (line >= inputLine) return;

    // store input to data array state
    let str = data[line];
    if (!str) str = '';
    str += key;
    data[line] = str;
    this.setState({ data });
    // console.log(data);
  }

  // gross only
  mode1 = () => {

  }

  handleWindowFocus = (e) => {
    const { type } = e;
    if (type === 'focus') {
      this.setWindowFocus(true);
    } else {
      this.setWindowFocus(false);
    }
  }

  setWindowFocus = (status) => {
    this.setState({ isFocus: status });
  }

  setWeightValueObject = (obj) => {
    this.setState(state => ({
      dataObj: {
        ...state.dataObj,
        ...obj,
      },
    }));
  };

  renderListItem = (title, value) => (
    <div className="ant-list-item">
      <div className="ant-list-item-meta">
        <div className="ant-list-item-meta-content">
          <h4 className="ant-list-item-meta-title">{title}</h4>
        </div>
      </div>
      <div className="ant-list-item-content">{value}</div>
    </div>
  )

  render() {
    const { isFocus, isLoading, completed, dataObj, haveError } = this.state;
    const { visible, onOk } = this.props;
    return (
      <Modal
        wrapClassName="weighting-modal"
        title={<FormattedMessage {...messages.header} />}
        visible={visible}
        onOk={onOk}
        maskClosable={false}
        closable={false}
        footer={
          <Fragment>
            <Button onClick={this.handleClose}>Cancel</Button>
            {(completed || haveError) && <Button type="primary" onClick={this.resetWeightingValue}>Reset</Button>}
          </Fragment>
        }
      >
        {
          !completed &&
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <span
              className={
                className(
                  'ant-badge-status-dot',
                  { 'ant-badge-status-processing': isFocus && !haveError },
                  { 'ant-badge-status-default': !isFocus || haveError },
                )
              }
              style={{ width: 100, height: 100, background: '#fff' }}>
              <img className="weighting-logo" src={img} alt="weighting-logo" width="100" />
            </span>
            {
              !haveError && (
                !isLoading ?
                  <Fragment>
                    {isFocus && <h3>Press print button for weighting</h3>}
                    {!isFocus && <h3><Icon type="exclamation-circle" /> Click to window for active</h3>}
                  </Fragment>
                  : <Loader />
              )
            }
            {
              haveError && <h3 style={{ color: '#AC1F2D' }}><Icon type="exclamation-circle" /> Sorry wrong input format!</h3>
            }
          </div>
        }
        {
          completed &&
          <div className="ant-spin-container">
            {this.renderListItem('Weight Time', dataObj.time)}
            {dataObj.net && this.renderListItem('Net Weight', `${dataObj.net.value} ${dataObj.net.unit}`)}
            {dataObj.tare && this.renderListItem('Tare Weight', `${dataObj.tare.value} ${dataObj.tare.unit}`)}
            {dataObj.gross && this.renderListItem('Gross Weight', `${dataObj.gross.value} ${dataObj.gross.unit}`)}
          </div>
        }
      </Modal>
    );
  }
}

export default Weighting;
