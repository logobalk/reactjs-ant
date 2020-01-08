import moment from 'moment';
import { gModeConfig as config, keywordMaster } from './config';

const {
  withDate,
  withGLP,
  dateFormat,
  numOfReadLine,
  dividerStr,
  lineLength,
} = config;

const {
  type,
  keyword,
  symbol,
  value,
  unit,
  glpTitle,
  glpValue,
} = config.subStrIndex;


function processGLP(data, line) {
  if (data.trim().length !== lineLength || line === 0) { // ignore first line of header (date)
    return {};
  }
  return { [data.substring(...glpTitle).trim()]: data.substring(...glpValue).trim() };
}



export function processGMode(data, line, divider, manaulNumOfReadLine) {
  try {
    let numReadLine = numOfReadLine;
    if (manaulNumOfReadLine) {
      numReadLine = manaulNumOfReadLine;
    }

    // 0. handle GLP input (GLP mode)
    if (withGLP) {
      if (divider <= 2) {
        numReadLine = line;
      }
      if (data === dividerStr) {
        return 'divider';
      }
      if (divider === 1) {
        return processGLP(data, line);
      }
      if (divider > 2) { // handle GLP footer
        if (data.startsWith('Name:')) {
          return false;
        }
        return {};
      }
    }
    if (data.trim() === '') return {};

    // 1. ignore value when current line more than number of read line (config)
    if (line > numReadLine) {
      return false;
    }


    // 2. handle date input
    if (withDate) { // "withDate" config for receiving date value
      const validDate = moment(data, dateFormat).isValid(); // validation
      if (validDate) {
        return { time: data };
      }
    }

    // 3. process weight value
    const weightType = data[type]; // get weight type
    const obj = {
      [keywordMaster[weightType]]: {
        keyword: data.substring(...keyword).trim(),
        symbol: data.substring(...symbol).trim(),
        value: data.substring(...value).trim(),
        unit: data.substring(...unit).trim(),
      },
    };

    return obj;
  }
  catch (err) {
    throw new Error('Incorrect data!');
  }
}