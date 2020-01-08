import React from 'react';
import PropTypes from 'prop-types';
import { Input, Switch, InputNumber, Textarea } from 'antd';
import Table from 'containers/MaterialIdentityLabel/table';
import Chip from '@material-ui/core/Chip';
import Home from '@material-ui/icons/Home';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import styles from './pressureDiff.style';
import columns from './columns';

class PressureDiffTable extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProps = {};

  renderEnvironment = () => [
    [
      {
        id: 1,
        chipEnable: true,
        roomNo: '103 CORRIDOR',
        acceptanceLimit: '25-35 PA',
        result: <InputNumber defaultValue="30" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
      {
        id: 2,
        chipEnable: true,
        roomNo: '104 WEIGHING (D)',
        acceptanceLimit: '10-20 PA',
        result: <InputNumber defaultValue="15" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
      {
        id: 3,
        chipEnable: false,
        roomNo: 'จะต้องไม่น้อยกว่า 15 Pascal',
        acceptanceLimit: '',
        result: <InputNumber disabled defaultValue="15" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
    ], [
      {
        id: 4,
        chipEnable: true,
        roomNo: '106 CORRIDOR',
        acceptanceLimit: '25-35 PA',
        result: <InputNumber defaultValue="30" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
      {
        id: 5,
        chipEnable: true,
        roomNo: '107 WEIGHING (D)',
        acceptanceLimit: '10-20 PA',
        result: <InputNumber defaultValue="15" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
      {
        id: 6,
        chipEnable: false,
        roomNo: 'จะต้องไม่น้อยกว่า 15 Pascal',
        acceptanceLimit: '',
        result: <InputNumber disabled defaultValue="15" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
    ], [
      {
        id: 7,
        chipEnable: true,
        roomNo: '106 CORRIDOR',
        acceptanceLimit: '25-35 PA',
        result: <InputNumber defaultValue="30" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
      {
        id: 8,
        chipEnable: true,
        roomNo: '108 WEIGHING (D)',
        acceptanceLimit: '10-20 PA',
        result: <InputNumber defaultValue="15" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
      {
        id: 9,
        chipEnable: false,
        roomNo: 'จะต้องไม่น้อยกว่า 15 Pascal',
        acceptanceLimit: '',
        result: <InputNumber disabled defaultValue="15" onChange={() => { }} />,
        systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
      },
    ],
  ];

  render() {
    const { TextArea } = Input;
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.renderEnvironment() && this.renderEnvironment().map(item =>
          <React.Fragment>
            <div>
              {item && item.map(subItem =>
                <React.Fragment>
                  {subItem.chipEnable && (
                    <Chip
                      key={uuid.v4()}
                      icon={<Home />}
                      label={`Room No. ${subItem.roomNo}`}
                      className={classes.chip}
                      color="primary"
                      style={{ backgroundColor: '#2d8237' }}
                    />
                  )}
                </React.Fragment>
              )}
            </div>
            <Table
              withNoFilter
              columns={columns}
              data={item}
              tableOptions={{
                bordered: true,
                hidePagination: true,
              }}
            />
            <TextArea placeholder="Note" autosize={{ minRows: 2, maxRows: 6 }} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(PressureDiffTable);
