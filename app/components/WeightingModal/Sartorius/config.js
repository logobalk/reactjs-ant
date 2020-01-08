const global = {
  withDate: true,
  withGLP: true,
  dateFormat: 'DD-MMM-YYYY HH:mm:ss',
  grossKeyword: 'G',
  netKeyword: 'N',
  tareKeyword: 'T',
  dividerStr: '--------------------',
  lineLength: 20,
  subStrIndex: {
    type: 0,
    keyword: [0, 6],
    symbol: [6, 7],
    value: [8, 16],
    unit: [17, 18],
    glpTitle: [0 ,7],
    glpValue: [7, 20],
  },
};

export const gModeConfig = {
  ...global,
  numOfReadLine: 1,
};

export const ntgModeConfig = {
  ...global,
  numOfReadLine: 3,
};

export const statisticConfig = {
  ...global,
  subStrIndex: {
    ...global.subStrIndex,
    idx: [4, 6],
  },
};

export const keywordMaster = {
  [global.grossKeyword]: 'gross',
  [global.netKeyword]: 'net',
  [global.tareKeyword]: 'tare',
};