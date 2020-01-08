import React from 'react';
import { Button, Icon } from 'antd';
import styles from '../index.less';

const renderIconValidation = (status) => {
  if (status === '1') {
    return <Icon type="check-circle" theme="filled" style={{ color: '#3f6600', fontSize: 22 }} />;
  }
  return <Icon type="close-circle" theme="filled" style={{ color: '#f5222d', fontSize: 22 }} />;
};

export default [
  {
    title: 'No.',
    dataIndex: 'id',
    align: 'center',
    width: 50,
  },
  // {
  //   title: 'Room No.',
  //   dataIndex: 'roomNo',
  //   align: 'center',
  //   width: 70,
  // }, 
  {
    title: 'Item Code',
    dataIndex: 'itemCode',
  }, {
    title: 'Item Name',
    dataIndex: 'itemName',
  }, {
    title: 'Batch No.',
    dataIndex: 'batchNo',
  },
  // {
  //   title: 'Req Qty',
  //   dataIndex: 'quantity',
  //   align: 'center',
  // },
  // {
  //   title: 'UOM',
  //   dataIndex: 'unit',
  //   align: 'center',
  // }, 
  {
    title: 'PO',
    dataIndex: 'processOrder',
    align: 'center',
  },
  {
    title: 'PO Material Validation',
    dataIndex: 'materialValidation',
    align: 'center',
    width: 80,
    render: renderIconValidation,
  },
  {
    title: 'PO Material Scan',
    dataIndex: 'barcode1',
    align: 'center',
    width: 80,
    render: (action) => (
      <Button icon="scan" type="primary" id="barcode" />
    ),
  },
  {
    title: 'PO Container Validation',
    dataIndex: 'containerValidation',
    align: 'center',
    width: 80,
    render: renderIconValidation,
  },
  {
    title: 'PO Container Scan',
    dataIndex: 'barcode2',
    align: 'center',
    width: 80,
    render: (action) => (
      <Button icon="scan" type="primary" id="barcode" />
    ),
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