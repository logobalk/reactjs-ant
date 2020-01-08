import React from 'react';
import { Icon } from 'antd';
import { newIconStyle, conformIconStyle, incidentIconStyle, rejectIconStyle } from './statusIcon.styles';

export default [
  {
    title: 'Lot Status',
    dataIndex: 'inspectionStatus',
    align: 'center',
    render: status => {
      let icon;
      switch (status) {
        case '2':
          icon = <Icon type="check-circle" theme="filled" style={conformIconStyle} />;
          break;
        case '3':
          icon = <Icon type="exclamation-circle" theme="filled" style={incidentIconStyle} />;
          break;
        case '4':
          icon = <Icon type="issues-close" style={incidentIconStyle} />;
          break;
        case '5':
          icon = <Icon type="close-circle" theme="filled" style={rejectIconStyle} />;
          break;
        default:
          icon = <Icon type="question-circle" theme="filled" style={newIconStyle} />;
          break;
      }

      return <div style={{ fontSize: 30 }}>{icon}</div>;
    },
  }, {
    title: 'No.',
    dataIndex: 'id',
  }, {
    title: 'Inspection Lot',
    dataIndex: 'inspectionLot',
    align: 'center',
  }, {
    title: 'Start Date',
    dataIndex: 'startDate',
  }, {
    title: 'Mat.Code',
    dataIndex: 'materialCode',
  }, {
    title: 'Mat.Name',
    dataIndex: 'materialName',
    width: 100,
  }, {
    title: 'Batch',
    dataIndex: 'batch',
  }, {
    title: 'Container',
    dataIndex: 'container',
    width: 100,
  }, {
    title: 'Lot Container',
    dataIndex: 'lotContainer',
    width: 100,
  }, {
    title: 'Lot Qty',
    dataIndex: 'lotQty',
  },
  {
    title: 'UOM',
    dataIndex: 'uom',
  },
  {
    title: 'Actual Lot.Qty',
    dataIndex: 'actualLotQty',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];