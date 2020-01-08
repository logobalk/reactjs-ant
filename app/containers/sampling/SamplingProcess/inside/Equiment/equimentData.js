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
        criteria: 'Special Condition 6',
        acceptanceCriteria: 'CH:MC',
        recordingResult: 'MC',
      },
      checkbox: true,
      enabled: true,
    },
    {
      id: 1,
      text: {
        criteria: 'Special Condition 7',
        acceptanceCriteria: 'AM:SC',
        recordingResult: 'AM',
      },
      checkbox: true,
      enabled: true,
    },
  ],
};
