import { processGMode } from './g-mode';
import { ntgModeConfig as config } from './config';

const {
  numOfReadLine,
} = config;


export function processNTGMode(data, line, divider) {
  return processGMode(data, line, divider, numOfReadLine);
}