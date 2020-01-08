import { createMuiTheme } from '@material-ui/core/styles';
import {
  deepOrange, blue, red, pink,
} from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: red,
    secondary: deepOrange,
    backgroundWarningLabel: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  icon: {
    red,
    pink,
  },
  typography: {
    fontFamily: [
      'Prompt',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
