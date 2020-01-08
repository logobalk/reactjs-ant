import React from 'react';
import { Button, Dropdown, Menu, Icon } from 'antd';
import styles from '../../index.less';

const buildStatusBox = (status) => {
  const style = {
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '4px',
  };

  if (status === 'Completed') {
    return (<span style={{ ...style, background: '#389e0d' }}>Completed</span>);
  }
  if (status === 'Rejected') {
    return (<span style={{ ...style, background: '#f5222d' }}>Rejected</span>);
  }
  return <span />;
};

export default [
  {
    title: 'No.',
    dataIndex: 'id',
    align: 'center',
    width: 50,
  },
  {
    title: 'Action',
    align: 'center',
    dataIndex: 'id',
    key: 'action',
    render: (id) => {
      if ([2, 5].indexOf(id) > -1) {
        return <Button type="primary" icon="poweroff" id="start">Dispense</Button>;
      }
      if ([1, 3, 4].indexOf(id) > -1) {
        return (
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="1">
                  <Icon type="plus" id="increase" /> Increase
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="minus" id="decrease" /> Decrease
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="redo" id="redispense" /> Re-dispense
                </Menu.Item>
              </Menu>
            }
            trigger={['click']}>
            <Button id="move" icon="caret-down" type="primary" ghost>Adjustment</Button>
          </Dropdown>
          // <Button type="primary" icon="shrink">Adjust</Button>
        );
      }
      return <span />;
    },
  },
  {
    title: 'Detail',
    dataIndex: 'id',
    key: 'detail',
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
      if ([1, 3, 4].indexOf(id) > -1) {
        return <Button icon="ordered-list" id="detail">Info</Button>;
      }
      return <span />;
    },
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
  // {
  //   title: 'Queue',
  //   dataIndex: 'queue',
  //   align: 'center',
  //   width: 50,
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
  }, {
    title: 'Req Qty',
    dataIndex: 'quantity',
    align: 'center',
    width: 100,
  },
  {
    title: 'Req Qty (Adjust)',
    dataIndex: 'adjustQty',
    align: 'center',
    width: 100,
  },
  {
    title: 'Actual Qty',
    dataIndex: 'actualQty',
    align: 'center',
    width: 100,
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
  {
    title: 'Reason',
    dataIndex: 'reason',
    align: 'center',
    width: 150,
  },
];