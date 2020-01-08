import {
  SET_START_STATUS,
} from './constants';

export function setStartStatus(isStart) {
  console.log('setStartStatus===>',isStart)
  return {
    type: SET_START_STATUS,
    isStart,
  };
}

