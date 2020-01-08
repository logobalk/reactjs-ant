import moment from 'moment';
import { statisticConfig as config } from './config';

const {
  withDate,
  withGLP,
  dateFormat,
  dividerStr,
  lineLength,
} = config;

const {
  idx,
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



export function processStatisticMode(data, line, divider) {
  try {
    console.log(data);

    if (data === dividerStr) {
      return 'divider';
    }

    // 0. handle GLP input (GLP mode)
    if (withGLP) {
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
    // if (line > numReadLine) {
    //   return false;
    // }


    // 2. handle date input
    if (withDate) { // "withDate" config for receiving date value
      const validDate = moment(data, dateFormat).isValid(); // validation
      if (validDate) {
        return { time: data };
      }
    }

    // 3. process weight value
    const comp = data.substring(...keyword); // get weight type
    const index = comp.substring(...idx).trim();
    const obj = {
      [index]: {
        keyword: comp.trim(),
        symbol: data.substring(...symbol).trim(),
        value: data.substring(...value).trim(),
        unit: data.substring(...unit).trim(),
      },
    };

    // 4. return arr for component data
    if (!withGLP && divider === 0) {
      return [ obj ];
    }

    return obj;
  }
  catch (err) {
    console.error(err);
    throw new Error('Incorrect data!');
  }
}