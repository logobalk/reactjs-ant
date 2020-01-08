import ProcessOrderList from 'containers/ProcessOrderList/Loadable';
import DispensingMaterialGroupList from 'containers/DispensingMaterialGroupList/Loadable';
import DispensingMaterialGroupDetail from 'containers/DispensingMaterialGroup/Loadable';
import DispensingSummarizeMaterial from 'containers/DispensingSummarizeMaterial/Loadable';
import DispensingProcess from 'containers/DispensingProcess/Loadable';
import DispensingAdjustment from 'containers/DispensingAdjustment/Loadable';

import DispensingGroupList from 'containers/DispensingProcess/MaterialGroupList';
import DispensingGroupDetail from 'containers/DispensingProcess/MaterialGroupDetail';
import DispensingStep from 'containers/DispensingProcess/DispensingStep';

import {
  PROCESS_ORDER_PATH,
  PROCESS_ORDER_CREATE_PATH,
  PROCESS_ORDER_DETAIL_PATH,
  DISPENSING_GROUP_LIST_PATH,
  DISPENSING_GROUP_DETAIL_PATH,
  DISPENSING_SUMMARIZE_PATH,
  DISPENSING_SUMMARIZE_DETAIL_PATH,
  DISPENSING_PROCESS_PATH,
  DISPENSING_PROCESS_GROUP_PATH,
  DISPENSING_PROCESS_STEP_PATH,
  DISPENSING_ADJUSTMENT_PATH,
} from 'containers/Navigator/constants';

export default [
  {
    key: 'processOrderList',
    path: PROCESS_ORDER_PATH,
    component: ProcessOrderList,
    exact: true,
  }, {
    key: 'processOrderCreate',
    path: PROCESS_ORDER_CREATE_PATH,
    component: ProcessOrderList,
  }, {
    key: 'processOrderDetail',
    path: PROCESS_ORDER_DETAIL_PATH,
    component: ProcessOrderList,
  }, {
    key: 'dispensingGroupList',
    path: DISPENSING_GROUP_LIST_PATH,
    component: DispensingMaterialGroupList,
    exact: true,
  }, {
    key: 'dispensingGroupDetail',
    path: DISPENSING_GROUP_DETAIL_PATH,
    component: DispensingMaterialGroupDetail,
  }, {
    key: 'dispensingSummarizeList',
    path: DISPENSING_SUMMARIZE_PATH,
    component: DispensingSummarizeMaterial,
    exact: true,
  }, {
    key: 'dispensingSummarizeDetail',
    path: DISPENSING_SUMMARIZE_DETAIL_PATH,
    component: DispensingSummarizeMaterial,
  }, {
    key: 'dispensingProcess',
    path: DISPENSING_PROCESS_PATH,
    component: DispensingProcess,
  }, {
    key: 'dispensingAdjustment',
    path: DISPENSING_ADJUSTMENT_PATH,
    component: DispensingAdjustment,
  },
];

export const dispensingProcessRoutes = [
  {
    key: 'dispensingProcessList',
    path: DISPENSING_PROCESS_PATH,
    component: DispensingGroupList,
    exact: true,
  }, {
    key: 'dispensingProcessGroup',
    path: DISPENSING_PROCESS_GROUP_PATH,
    component: DispensingGroupDetail,
    exact: true,
  }, {
    key: 'dispensingProcessStep',
    path: DISPENSING_PROCESS_STEP_PATH,
    component: DispensingStep,
    exact: true,
  },
];