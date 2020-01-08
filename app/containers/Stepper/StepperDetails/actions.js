import {
  SET_FILEDS_DETAIL,
} from './constants';

export function setFiledsDetail(fields) {
  return {
    type: SET_FILEDS_DETAIL,
    fields,
  };
}

