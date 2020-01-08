import React from 'react';
import { Button, Select } from 'antd';
import styles from '../index.less';

const { Option } = Select;
export default [
  {
    title: 'Remove                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ',
    dataIndex: 'action',
    align: 'center',
    width: 80,
    render: () => <Button icon="delete" type="danger" />,
  },
  {
    title: 'No.',
    dataIndex: 'id',
    align: 'center',
    width: 80,
  }, {
    title: 'Select Weighing Machine',
    dataIndex: 'type',
    width: 300,
    render: () =>
      <Select
        placeholder="---Please select machine---"
        style={{ width: '100%' }}
      >
        <Option value="1">No. 1 Sartorius - SECURA3102-1S</Option>
        <Option value="2">No. 2 Mettler - ICS685</Option>
        <Option value="3">Custom</Option>
      </Select>,
  }, {
    title: 'Weighing',
    dataIndex: 'weighing',
    align: 'center',
    render: () => <Button type="primary" icon="dashboard" id="weighing">Weighing</Button>,
  }, {
    title: 'Value',
    dataIndex: 'value',
    align: 'center',
    width: 100,
  },
  {
    title: 'UOM',
    dataIndex: 'unit',
    align: 'center',
    width: 200,
    render: () =>
      <Select
        placeholder="---Please select unit---"
        style={{ width: '100%' }}
      >
        <Option value="1">Kg</Option>
        <Option value="2">G</Option>
      </Select>,
  },
  {
    title: 'Sticker',
    dataIndex: 'sticker',
    align: 'center',
    render: () => <Button className={styles.printBtn} type="primary" icon="printer">Print</Button>,
  },
  {
    title: 'System Validation',
    dataIndex: 'validStatus',
    align: 'center',
    width: 100,
    onCell: record => ({
      record,
      isValidStatus: true,
    }),
  },
];