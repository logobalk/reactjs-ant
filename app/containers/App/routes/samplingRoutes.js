import InspecitonList from 'containers/InspectionList/Loadable';
import MaterialGroup from 'containers/MaterialGroup/Loadable';
import SummarizeMaterialListStore from 'containers/SummarizeMaterialListStore/Loadable';
import SummarizeMaterialListQC from 'containers/SummarizeMaterialListQc/Loadable';
import SummarizeMaterialStore from 'containers/SummarizeMaterialStore/Loadable';
import SummarizeMaterialQC from 'containers/SummarizeMaterialQc/Loadable';
// import MaterialLoading from 'containers/MaterialLoading/Loadable';
// import MaterialIdentityLabel from 'containers/MaterialIdentityLabel/Loadable';
import InspectionReport from 'containers/InspectionReport/Loadable';
import MaterialGroupList from 'containers/MaterialGroupList/Loadable';
import SamplingProcess from 'containers/SamplingProcess/Loadable';

import SamplingGroupList from 'containers/SamplingProcess/MaterialGroupList';
import SamplingGroupDetail from 'containers/SamplingProcess/MaterialGroupDetail';
import SamplingStep from 'containers/SamplingProcess/SamplingStep';

import {
  INSPECTION_LIST_PATH,
  INSPECTION_REPORT_PATH,
  SAMPLING_MATERIAL_GROUP_LIST_PATH,
  SAMPLING_MATERIAL_GROUP_DETAIL_PATH,
  SAMPLING_SUMMARIZE_STORE_PATH,
  SAMPLING_SUMMARIZE_STORE_DETAIL_PATH,
  SAMPLING_SUMMARIZE_QC_PATH,
  SAMPLING_SUMMARIZE_QC_DETAIL_PATH,
  SAMPLING_PROCESS_PATH,
  SAMPLING_PROCESS_GROUP_PATH,
  SAMPLING_PROCESS_STEP_PATH,
} from 'containers/Navigator/constants';

export default [
  {
    key: 'inspectionList',
    path: INSPECTION_LIST_PATH,
    component: InspecitonList,
  }, {
    key: 'inspectionDetail',
    path: INSPECTION_REPORT_PATH,
    component: InspectionReport,
  }, {
    key: 'samplingMaterialGroup',
    path: SAMPLING_MATERIAL_GROUP_LIST_PATH,
    component: MaterialGroupList,
  }, {
    key: 'samplingMaterialGroupDetail',
    path: SAMPLING_MATERIAL_GROUP_DETAIL_PATH,
    component: MaterialGroup,
  }, {
    key: 'samplingSummarizeStore',
    path: SAMPLING_SUMMARIZE_STORE_PATH,
    component: SummarizeMaterialListStore,
    exact: true,
  }, {
    key: 'samplingSummarizeStoreDetail',
    path: SAMPLING_SUMMARIZE_STORE_DETAIL_PATH,
    component: SummarizeMaterialStore,
  }, {
    key: 'samplingSummarizeQC',
    path: SAMPLING_SUMMARIZE_QC_PATH,
    component: SummarizeMaterialListQC,
    exact: true,
  }, {
    key: 'samplingSummarizeQCDetail',
    path: SAMPLING_SUMMARIZE_QC_DETAIL_PATH,
    component: SummarizeMaterialQC,
  }, {
    key: 'samplingProcess',
    path: SAMPLING_PROCESS_PATH,
    component: SamplingProcess,
  },
];

export const samplingProcessRoutes = [
  {
    key: 'samplingProcessList',
    path: SAMPLING_PROCESS_PATH,
    component: SamplingGroupList,
    exact: true,
  },
  {
    key: 'samplingProcessGroup',
    path: SAMPLING_PROCESS_GROUP_PATH,
    component: SamplingGroupDetail,
    exact: true,
  },
  {
    key: 'samplingProcessStep',
    path: SAMPLING_PROCESS_STEP_PATH,
    component: SamplingStep,
    exact: true,
  },
];