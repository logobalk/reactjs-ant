export default {
  root: [{
    id: 0,
    text: 'Weight Scale No :',
    rootData: 'weightScaleEfficiency',
    enabled: true,
  }, {
    id: 0,
    text: 'Volumn Metric Measuring :',
    rootData: 'volumnMetricMeasuring',
    enabled: true,
  }],
  weightScaleEfficiency: [{
    id: 0,
    text: 'Weight Scale No :',
    type: 'text',
    enabled: true,
  }, {
    id: 1,
    text: 'Caribation due date :',
    type: 'date',
    enabled: true,
  }, {
    id: 2,
    text: 'Date time :',
    type: 'date',
    enabled: true,
  }, {
    id: 3,
    text: 'Daily Check(FM-QA-CV-24) :',
    type: 'date',
    enabled: true,
  }],
  volumnMetricMeasuring: [{
    id: 0,
    text: 'Cylinder size :',
    type: 'text',
    enabled: true,
  }, {
    id: 1,
    text: 'Caribation due date :',
    type: 'date',
    enabled: true,
  }, {
    id: 2,
    text: 'Dip Tube :',
    type: 'text',
    enabled: true,
  }],
};
