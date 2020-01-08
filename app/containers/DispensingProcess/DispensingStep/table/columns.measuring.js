import React from 'react';
import { Button, Select, Input } from 'antd';
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
    title: 'Volumetric Value',
    dataIndex: 'value',
    align: 'center',
    // width: 100,
    render: (value) => <Input defaultValue={value} placeholder="Please input volumetric value" disabled />,
  },
  {
    title: 'UOM',
    dataIndex: 'unit',
    align: 'center',
    width: 200,
    // render: () =>
    //   <Select
    //     placeholder="---Please select unit---"
    //     style={{ width: '100%' }}
    //   >
    //     <Option value="1">L</Option>
    //     <Option value="2">ML</Option>
    //     <Option value="3">EA</Option>
    //   </Select>,
  },
  {
    title: 'Sticker',
    dataIndex: 'sticker',
    align: 'center',
    width: 100,
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