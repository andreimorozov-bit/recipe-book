import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: pink[700],
    },
    secondary: {
      main: teal[400],
    },
  },
});
