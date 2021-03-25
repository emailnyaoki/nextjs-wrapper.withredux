import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';




// Create a theme instance.
// accept mode as param, for example, let it be dark or light

const theme = (darkState) => createMuiTheme({
  palette: {
    type: darkState ? 'dark' : 'light',
    text:{                       
        primary: darkState?'#f50057':'rgba(0, 0, 0, 0.87)',
        secondary: darkState?'rgba(0, 0, 0, 0.87)':'rgba(0, 0, 0, 0.87)'
    }
  },
  typography: {
    body2:{
      fontWeight:500
    }
  }
});

export default theme;