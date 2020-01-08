import React from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';

const buildStatusBox = (status) => {
  const style = {
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
  };

  if (status === 'Completed') {
    return (<span style={{ ...style, background: '#389e0d' }}>Completed</span>);
  }
  if (status === 2) {
    return (<span style={{ ...style, background: '#f5222d' }}>Rejected</span>);
  }
  return (<span style={{ ...style, background: '#d4b106' }}>Pending</span>);
};

export default [
  {
    title: 'Dispensing',
    dataIndex: 'id',
    key: 'action',
    align: 'center',
    width: 80,
    render: (id) => {
      // <Dropdown
      //   overlay={
      //     <Menu>
      //       <Menu.Item key="1">
      //         <Icon type="plus" /> Separate
      //       </Menu.Item>
      //       {/* <Menu.Item key="2">
      //           <Icon type="delete" /> Remove
      //         </Menu.Item> */}
      //     </Menu>
      //   }
      //   trigger={['click']}>
      //   <Button id="move" icon="edit" type="primary">Edit</Button>
      // </Dropdown>
      if ([4, 6].indexOf(id) > -1) {
        return <Button type="primary" icon="poweroff" id="start">Start</Button>;
      }
      if ([1, 2, 3].indexOf(id) > -1) {
        return <Button icon="ordered-list" id="detail">Detail</Button>;
      }
      return <span />;
    },
  },
  {
    title: 'No.',
    dataIndex: 'id',
    align: 'center',
    width: 50,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
    render: buildStatusBox,
  },

  // {
  //   title: 'Room No.',
  //   dataIndex: 'roomNo',
  //   align: 'center',
  //   width: 70,
  // },
  {
    title: 'Queue',
    dataIndex: 'queue',
    align: 'center',
    width: 50,
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
    title: 'Req Qty',
    dataIndex: 'quantity',
    align: 'center',
  },
  {
    title: 'Actual Qty',
    dataIndex: 'quantity',
    key: 'actuanQuantity',
    align: 'center',
  },
  {
    title: 'UOM',
    dataIndex: 'unit',
    align: 'center',
  },
  // {
  //   title: 'BIN Location',
  //   dataIndex: 'bin',
  //   align: 'center',
  // }, 
  {
    title: 'PO',
    dataIndex: 'processOrder',
    align: 'center',
  },
];