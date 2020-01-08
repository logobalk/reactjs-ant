import React from 'react';
import classNames from 'classnames';
import { InputNumber, Switch } from 'antd';

import Table from './table';
import columns from './table/columns.env';
import styles from './index.less';

class EnvironmentStep extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  renderEnvironment = () => [
    {
      id: 1,
      criteria: 'Temperature  Condition',
      acceptance: 'NMT 25 C (Fix) (ref.plant data store 1 in "mm03")',
      result: <InputNumber min={1} max={100} defaultValue={23} onChange={() => { }} />,
      validStatus: 'PASS',
    },
    {
      id: 2,
      criteria: 'Special condition 2',
      acceptance: 'NMT 45% Relative Humidity',
      result: <InputNumber
        defaultValue={45}
        min={0}
        max={100}
        formatter={value => `${value}%`}
        parser={value => value.replace('%', '')} onChange={() => { }}
      />,
      validStatus: 'PASS',
    },
    {
      id: 3,
      criteria: 'Special condition 3',
      acceptance: 'Flush N2',
      result: <Switch checkedChildren="Done" defaultChecked />,
      validStatus: 'PASS',
    },
    {
      id: 4,
      criteria: 'Special condition 4',
      acceptance: 'Protect form light',
      result: <Switch checkedChildren="Done" />,
      validStatus: 'FAIL',
    },
  ];

  render() {
    const components = {
      body: {
        cell: ({ isValidStatus, record, ...props }) => {
          if (isValidStatus) {
            const status = record.validStatus;
            if (status) {
              const { className } = props;
              return (
                <td
                  {...props}
                  className={
                    classNames([
                      className,
                      {
                        [styles.success]: status === 'PASS',
                        [styles.fail]: status === 'FAIL',
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
      <Table
        withNoFilter
        columns={columns}
        data={this.renderEnvironment()}
        tableOptions={{
          components,
          bordered: true,
          hidePagination: true,
        }}
      />
    );
  }
}

export default EnvironmentStep;