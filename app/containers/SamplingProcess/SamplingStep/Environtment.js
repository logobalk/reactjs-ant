import React from 'react';
import { InputNumber, Switch } from 'antd';
import Table from 'containers/MaterialIdentityLabel/table';
import columns from './columns.env';

class EnvironmentStep extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  renderEnvironment = () => [
    {
      id: 1,
      creteria: 'Temperature  Condition',
      acceptance: 'NMT 25 C (Fix) (ref.plant data store 1 in "mm03")',
      result: <InputNumber min={1} max={100} defaultValue={23} onChange={() => { }} />,
    },
    {
      id: 2,
      creteria: 'Special condition 2',
      acceptance: 'NMT 45% Relative Humidity',
      result: <InputNumber
        defaultValue={45}
        min={0}
        max={100}
        formatter={value => `${value}%`}
        parser={value => value.replace('%', '')} onChange={() => { }}
      />,
    },
    {
      id: 3,
      creteria: 'Special condition 3',
      acceptance: 'Flush N2',
      result: <Switch checkedChildren="Done" defaultChecked />,
    },
    {
      id: 4,
      creteria: 'Special condition 4',
      acceptance: 'Protect form light',
      result: <Switch checkedChildren="Done" />,
    },
  ];

  render() {
    return (
      <Table
        withNoFilter
        columns={columns}
        data={this.renderEnvironment()}
        tableOptions={{
          bordered: true,
          hidePagination: true,
        }}
      />
    );
  }
}

export default EnvironmentStep;