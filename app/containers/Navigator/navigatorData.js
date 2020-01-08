import React from 'react';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';

import {
  INSPECTION_LIST_PATH,
  SAMPLING_MATERIAL_GROUP_LIST_PATH,
  SAMPLING_SUMMARIZE_STORE_PATH,
  SAMPLING_SUMMARIZE_QC_PATH,
  ENVIRONMENT_CHECK_LIST_PATH,
  SAMPLING_PROCESS_PATH,
  PROCESS_ORDER_PATH,
  DISPENSING_GROUP_LIST_PATH,
  DISPENSING_SUMMARIZE_PATH,
  DISPENSING_PROCESS_PATH,
  DISPENSING_ADJUSTMENT_PATH,
  MATERIAL_IDEN_PATH,
  INCIDENT_LIST_PATH,
  AUDIT_PATH,
  MASTER_PATH,
  IMAGE_GALLARY_PATH,
  WEIGHING_PATH,
} from './constants';

const menuItems = [
  {
    id: 'Sampling',
    rootIcon: 'appstore',
    display: 'SAMPLING',
    open: false,
    children: [
      { id: 'inpectionList', path: INSPECTION_LIST_PATH, childDisplay: 'Inspection List', icon: <PeopleIcon />, active: true },
      { id: 'materialGroup', path: SAMPLING_MATERIAL_GROUP_LIST_PATH, childDisplay: 'Material Group List', icon: <DnsRoundedIcon /> },
      { id: 'summarizeStore', path: SAMPLING_SUMMARIZE_STORE_PATH, childDisplay: 'Summarize Material Store' },
      { id: 'summarizeQC', path: SAMPLING_SUMMARIZE_QC_PATH, childDisplay: 'Summarize Material QC' },
      // { id: 'materialLoading', path: '/material-loading', childDisplay: 'Material Loading' },
      { id: 'qualityForm', path: ENVIRONMENT_CHECK_LIST_PATH, childDisplay: 'Environment Checking', icon: <SettingsIcon /> },
      { id: 'samplingProcess', path: SAMPLING_PROCESS_PATH, childDisplay: 'Sampling Process' },
    ],
  },
  {
    id: 'Dispensing',
    rootIcon: 'branches',
    display: 'DISPENSING',
    open: false,
    children: [
      { id: 'processOrderList', path: PROCESS_ORDER_PATH, childDisplay: 'Process Order List', icon: <TimerIcon /> },
      { id: 'dispensingGroupList', path: DISPENSING_GROUP_LIST_PATH, childDisplay: 'Material Group List', icon: <TimerIcon /> },
      { id: 'summarizeMaterial', path: DISPENSING_SUMMARIZE_PATH, childDisplay: 'Summarize Material Store' },
      { id: 'qualityForm', path: ENVIRONMENT_CHECK_LIST_PATH, childDisplay: 'Environment Checking', icon: <SettingsIcon /> },
      { id: 'dispensingProcess', path: DISPENSING_PROCESS_PATH, childDisplay: 'Dispensing Process' },
      { id: 'dispensingAdjustment', path: DISPENSING_ADJUSTMENT_PATH, childDisplay: 'Dispensing Adjustment' },
    ],
  },
  {
    id: 'Forms',
    rootIcon: 'exception',
    display: 'FORMS',
    open: false,
    children: [
      { id: 'materialIndentification', path: MATERIAL_IDEN_PATH, childDisplay: 'Material Identification', icon: <SettingsIcon /> },
      { id: 'incidentList', path: INCIDENT_LIST_PATH, childDisplay: 'Incident List', icon: <TimerIcon /> },
    ],
  },
  {
    id: 'admin',
    rootIcon: 'team',
    display: 'ADMIN',
    open: false,
    children: [
      { id: 'auditTrail', path: AUDIT_PATH, childDisplay: 'Audit Trail Log', icon: <TimerIcon /> },
      { id: 'masterSetup', path: MASTER_PATH, childDisplay: 'Master Setup', icon: <TimerIcon /> },
    ],
  },
  {
    id: 'Dev',
    rootIcon: 'tool',
    display: 'DEVELOPMENT',
    open: false,
    children: [
      { id: 'imageGallery', path: IMAGE_GALLARY_PATH, childDisplay: 'Image Gallery', icon: <SettingsIcon /> },
      { id: 'weighingModalExample', path: WEIGHING_PATH, childDisplay: 'Weighing Modal Example', icon: <TimerIcon /> },
    ],
  },
];
export default {
  create: () => menuItems,
};
