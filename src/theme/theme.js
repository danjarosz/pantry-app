import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00796b',
      light: '#48a999',
      dark: '#004c40',
      contrastText: '#fff'
    },
    secondary: {
      main: '#795548',
      light: '#a98274',
      dark: '#4b2c20',
      contrastText: '#fff'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#eee',
    },
  }
});

export default theme;