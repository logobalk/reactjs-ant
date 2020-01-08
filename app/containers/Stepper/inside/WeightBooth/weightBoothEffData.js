import React from 'react';
import {
  FormControlLabel,
  TextField,
  Typography,
  Checkbox,
} from '@material-ui/core';

export default {
  create: (dataList, valueChangeHandler, classes) => {
    const weightBoothEffData = Object.values(dataList).map(data => {
      if (data.type === 'Input') {
        return {
          key: data.header,
          display: data.display,
          textAlign: data.textAlign,
          items: [{
            key: data.type,
            component: TextField,
            props: {
              value: data.value,
              variant: 'standard',
              fullWidth: true,
              onChange: valueChangeHandler('input'),
            },
          }],
        };
      } if (data.type === 'Text') {
        return {
          key: data.header,
          display: data.display,
          textAlign: data.textAlign,
          items: [{
            key: data.type,
            component: Typography,
            props: {
              className:classes.marginR,
              value: data.display,
              variant: 'body1',
              gutterBottom: true,
            },
          }],
        };
      }
      if (data.type === 'Checkbox') {
        return {
          key: data.header,
          display: data.display,
          textAlign: data.textAlign,
          items: [{
            component: FormControlLabel,
            props: {
              label: data.display,
              value: data.value,
              checked: true,
              disabled: !data.enabled,
              control: <Checkbox
                color="default"
                classes={{
                  root: classes.rootCheckBox,
                  checked: classes.checked,
                }} onChange={valueChangeHandler('Checkbox')} />,
            },
          }],
        };
      }
      return null;
    });
    return weightBoothEffData.filter(data => data);
  },
};
