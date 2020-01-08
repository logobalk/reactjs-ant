import React from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';

export default [
  {
    title: 'Action',
    dataIndex: 'id',
    key: 'action',
    align: 'center',
    render: (id, record) => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="1">
              <Icon type="plus" /> Separate
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="delete" /> Remove
            </Menu.Item>
          </Menu>
        }
        trigger={['click']}>
        <Button id="move" icon="edit" type="primary">Edit</Button>
      </Dropdown>

    ),
  },
  {
    title: 'No.',
    dataIndex: 'id',
    width: 50,
  }, {
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
  }, {
    title: 'Queue',
    dataIndex: 'queue',
    key: 'queue',
    width: 50,
  }, {
    title: 'Room No.',
    dataIndex: 'roomNo',
    editable: true,
  }, {
    title: 'Item Code',
    dataIndex: 'itemCode',
  }, {
    title: 'Item Name',
    dataIndex: 'itemName',
  }, {
    title: 'Batch No.',
    dataIndex: 'batchNo',
  }, {
    title: 'Qty',
    dataIndex: 'quantity',
  },
  {
    title: 'UOM',
    dataIndex: 'unit',
    align: 'center',
  },
  // {
  //   title: 'Humidity',
  //   dataIndex: 'condition2',
  //   align: 'center',
  // }, {
  //   title: 'Special Condition for Material 1',
  //   dataIndex: 'condition3',
  //   align: 'center',
  // },
  // {
  //   title: 'Special Condition for Material 2',
  //   dataIndex: 'condition4',
  //   align: 'center',
  // },
  {
    title: 'PO',
    dataIndex: 'processOrder',
    align: 'center',
  },
];