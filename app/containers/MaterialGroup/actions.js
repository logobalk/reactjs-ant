/*
 *
 * MaterialGroup actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_MATERIAL_GROUP,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };

}

export function setMaterialGroup(materialGroup) {
  return {
    type: SET_MATERIAL_GROUP,
    materialGroup,
  };
}
