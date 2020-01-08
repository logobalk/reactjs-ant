export default {
  root: [{
    id: 0,
    text: 'Criteria',
    enabled: true,
  }, {
    id: 1,
    text: 'Acceptance Criteria',
    enabled: true,
  }, {
    id: 2,
    text: 'Recording Result',
    enabled: true,
  }, {
    id: 3,
    text: 'Pass/Failed',
    enabled: true,
  }],
  data: [
    {
      id: 0,
      text: {
        criteria: 'Temperature',
        acceptanceCriteria: '20-24',
        recordingResult: 'xx',
      },
      checkbox: true,
      enabled: true,
    },
    {
      id: 1,
      text: {
        criteria: 'Relative humidity(%)',
        acceptanceCriteria: '<25',
        recordingResult: 'xx',
      },
      checkbox: true,
      enabled: true,
    },
  ],
};
