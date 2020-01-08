import React from 'react';
import { Button } from 'antd';

export default [
  {
    title: 'Loading Status',
    dataIndex: 'status',
    align: 'center',
    width: 100,
    onCell: record => ({
      record,
      text: (record.status === 1) ? 'Loaded' : 'Wait',
      isValidStatus: true,
    }),
  },
  {
    title: 'Seq No.',
    dataIndex: 'seqNo',
    width: 50,
    align: 'center',
  },
  {
    title: 'Inspection Lot Origin',
    dataIndex: 'inspectionLotOrigin',
    key: 'lotOrigin',
    width: 100,
  }, {
    title: 'Queue',
    dataIndex: 'queue',
    key: 'queue',
    width: 50,
    align: 'center',
  }, {
    title: 'Item Code',
    dataIndex: 'itemCode',
    key: 'itemCode',
    width: 100,
  }, {
    title: 'Checking (Item Code)',
    className: 'spanColumn',
    children: [
      {
        title: 'By (Name)',
        dataIndex: 'name1',
        className: 'spanColumn',
        width: 100,
      }, {
        title: 'Time',
        dataIndex: 'time1',
        className: 'spanColumn',
      }, {
        title: '',
        dataIndex: 'barcode1',
        className: 'spanColumn',
        align: 'center',
        width: 50,
        render: (action) => (
          <Button icon="scan" type="primary" id="barcode" />
        ),
      },
    ],
  }, {
    title: 'Name',
    dataIndex: 'itemName',
    key: 'itemName',
    width: 150,
  }, {
    title: 'Batch No.',
    dataIndex: 'batchNo',
    key: 'batchNo',
    align: 'center',
    width: 130,
  }, {
    title: 'Checking (Batch No.)',
    className: 'spanColumn',
    children: [
      {
        title: 'By (Name)',
        dataIndex: 'name2',
        className: 'spanColumn',
        width: 100,
      }, {
        title: 'Time',
        dataIndex: 'time2',
        className: 'spanColumn',
      }, {
        title: '',
        dataIndex: 'barcode2',
        className: 'spanColumn',
        align: 'center',
        width: 50,
        render: (action) => (
          <Button icon="scan" type="primary" id="barcode" />
        ),
      },
    ],
  }, {
    title: 'Storage Location',
    dataIndex: 'storageLocation',
    key: 'storageLocation',
    width: 100,
    align: 'center',
  }, {
    title: 'BIN',
    dataIndex: 'bin',
    key: 'bin',
    align: 'center',
  }, {
    title: 'Normal Plan',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        align: 'center',
        dataIndex: 'normalPlan',
        className: 'spanColumn',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'unit',
        className: 'spanColumn',
        width: 50,
      },
    ],
  }, {
    title: 'Deviation Plan',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        align: 'center',
        dataIndex: 'deviationPlan',
        className: 'spanColumn',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'unit1',
        className: 'spanColumn',
        width: 50,
      },
    ],
  }, {
    title: 'Total',
    className: 'spanColumn',
    children: [
      {
        title: 'Qty',
        dataIndex: 'totalSampling',
        align: 'center',
        className: 'spanColumn',
        width: 80,
      },
      {
        title: 'UOM',
        dataIndex: 'unit2',
        className: 'spanColumn',
        width: 50,
      },
    ],
  },
];