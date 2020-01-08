import React from 'react';
import { Button, Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Icon type="swap" /> Reorder
    </Menu.Item>
    <Menu.Item key="1" style={{ color: 'red' }}>
      <Icon type="delete" /> Remove
    </Menu.Item>
  </Menu>
);

export default [
  {
    title: 'Remove',
    dataIndex: 'id',
    key: 'action',
    align: 'center',
    // render: (id, record) => (
    //   <Dropdown overlay={menu} trigger={['click']}>
    //     <Button id="move" icon="caret-down" type="primary" title={id}>Edit</Button>
    //   </Dropdown>
    // ),
    render: () => <Button icon="delete" type="danger"></Button>,
  },
  {
    title: 'No.',
    dataIndex: 'id',
    width: 50,
    align: 'center',
  }, {
    title: 'Queue',
    dataIndex: 'id',
    key: 'queue',
    width: 50,
    align: 'center',
  }, {
    title: 'Inspection Lot Origin',
    dataIndex: 'inspectionLotOrigin',
    key: 'lotOrigin',
    align: 'center',
    width: 50,
  }, {
    title: 'Item Code',
    dataIndex: 'itemCode',
    key: 'itemCode',
  }, {
    title: 'Item Name',
    dataIndex: 'itemName',
    key: 'itemName',
  }, {
    title: 'Batch No.',
    dataIndex: 'batchNo',
    key: 'batchNo',
  },
  // {
  //   title: 'Storage Location',
  //   dataIndex: 'storageLocation',
  //   key: 'storageLocation',
  //   width: 100,
  // }, {
  //   title: 'BIN',
  //   dataIndex: 'bin',
  //   key: 'bin',
  // },
  {
    title: 'Lot Size',
    children: [
      {
        title: 'Qty',
        align: 'center',
        dataIndex: 'lotSize',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'lotUnit',
        width: 50,
        align: 'center',
      },
    ],
  }, {
    title: 'Container',
    children: [
      {
        title: 'Qty',
        align: 'center',
        dataIndex: 'containerQty',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'containerUnit',
        width: 50,
        align: 'center',
      },
    ],
  },
  {
    title: 'Normal Plan',
    dataIndex: 'normalPlan',
    key: 'normalPlan',
    editable: true,
    width: 100,
  }, {
    title: 'Deviation Plan',
    dataIndex: 'deviationPlan',
    key: 'deviationPlan',
    editable: true,
    width: 100,
  }, {
    title: 'Total Sampling',
    dataIndex: 'totalSampling',
    key: 'totalSampling',
    width: 50,
  },
  {
    title: 'Reason',
    dataIndex: 'reason',
  },
];