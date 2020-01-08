import IncidentForm from 'containers/IncidentForm/Loadable';
import IncidentList from 'containers/IncidentList/Loadable';
import IncidentInfo from 'containers/IncidentInfo/Loadable';
import WeighingModalExample from 'containers/WeighingModalExample/Loadable';
import MaterialIndentificationList from 'containers/MaterialIndentificationList/Loadable';
import MaterialIndentificationForm from 'containers/MaterialIndentificationForm/Loadable';
import TableMaterial from 'containers/Stepper/tableMaterial';
import QualityReport from 'containers/Stepper/report/qualityReport';
import ActivityLog from 'containers/Stepper/activityLog';
import ImageGallery from 'containers/ImageGallery';
import QualityFormStepper from 'containers/Stepper';

import {
  INCIDENT_LIST_PATH,
  INCIDENT_DETIAL_PATH,
  INCIDENT_CREATE_PATH,
  IMAGE_GALLARY_PATH,
  WEIGHING_PATH,
  ENVIRONMENT_CHECKING_PATH,
  ENVIRONMENT_CHECKING_STEPPER_PATH,
  ENVIRONMENT_CHECKING_MATERIAL_PATH,
  ENVIRONMENT_CHECKING_QUALITY_PATH,
  MATERIAL_IDENTIFICATION_PATH,
  MATERIAL_IDENTIFICATION_CREATE_PATH,
  MATERIAL_IDENTIFICATION_DETAIL_PATH,
  ENVIRONMENT_CHECKING_STEPPER_PATH_N2GAS,
  ENVIRONMENT_CHECKING_STEPPER_PATH_WEIGHING_SCALE_EFF,
  ENVIRONMENT_CHECKING_STEPPER_PATH_PRESSURE_DIFF,
  ENVIRONMENT_CHECKING_STEPPER_PATH_WEIGHING_BOOTH_EFF,
} from 'containers/Navigator/constants';
import N2Gas from 'containers/Stepper/inside/N2Gas';
import WeightScaleEff from 'containers/Stepper/inside/WeightScale';
import PressureDiff from 'containers/Stepper/inside/PressureDiff';
import WeightBoothEff from 'containers/Stepper/inside/WeightBooth';

export default [
  {
    key: 'incidentList',
    path: INCIDENT_LIST_PATH,
    component: IncidentList,
  }, {
    key: 'weighingExample',
    path: WEIGHING_PATH,
    component: WeighingModalExample,
  }, {
    key: 'incidentCreate',
    path: INCIDENT_CREATE_PATH,
    component: IncidentForm,
  }, {
    key: 'incidentDetail',
    path: INCIDENT_DETIAL_PATH,
    component: IncidentInfo,
  }, {
    key: 'imageGallery',
    path: IMAGE_GALLARY_PATH,
    component: ImageGallery,
  }, {
    key: 'environmentChecking',
    path: ENVIRONMENT_CHECKING_PATH,
    component: ActivityLog,
    exact: true,
  }, {
    key: 'environmentCheckingStepper',
    path: ENVIRONMENT_CHECKING_STEPPER_PATH,
    component: QualityFormStepper,
  }, {
    key: 'n2Gas',
    path: ENVIRONMENT_CHECKING_STEPPER_PATH_N2GAS,
    component: N2Gas,
  }, {
    key: 'weighingScaleEfficiency',
    path: ENVIRONMENT_CHECKING_STEPPER_PATH_WEIGHING_SCALE_EFF,
    component: WeightScaleEff,
  }, {
    key: 'weightBoothEfficiency',
    path: ENVIRONMENT_CHECKING_STEPPER_PATH_WEIGHING_BOOTH_EFF,
    component: WeightBoothEff,
  }, {
    key: 'pressureDiff',
    path: ENVIRONMENT_CHECKING_STEPPER_PATH_PRESSURE_DIFF,
    component: PressureDiff,
  }, {
    key: 'environmentCheckingMaterialGroup',
    path: ENVIRONMENT_CHECKING_MATERIAL_PATH,
    component: TableMaterial,
  }, {
    key: 'environmentCheckingQualityForm',
    path: ENVIRONMENT_CHECKING_QUALITY_PATH,
    component: QualityReport,
  }, {
    key: 'materialIdentificationList',
    path: MATERIAL_IDENTIFICATION_PATH,
    component: MaterialIndentificationList,
    exact: true,
  }, {
    key: 'materialIdentificationCreate',
    path: MATERIAL_IDENTIFICATION_CREATE_PATH,
    component: MaterialIndentificationForm,
  }, {
    key: 'materialIdentificationDetail',
    path: MATERIAL_IDENTIFICATION_DETAIL_PATH,
    component: MaterialIndentificationForm,
  },
];
