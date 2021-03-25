import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Switch from "@material-ui/core/Switch";
import CssBaseline from '@material-ui/core/CssBaseline';

//import { Provider } from 'react-redux'  //no need, been handle by wrapper.with redux

import theme  from './../src/theme'  // theme configuration is here

import {wrapper} from './../src/redux/storessr';


//const MyApp = ({Component, pageProps}) => {
function MyApp({ Component, pageProps}) { //

    React.useEffect(() => {
      // Remove the server-side injected CSS.
      
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentElement.removeChild(jssStyles);
      }
    }, []);



    // theme management
    const [darkState, setDarkState] = React.useState(false);
    const handleThemeChange = () => {
      setDarkState(!darkState);
    };
    

    return (
        //<Provider store={store}> // no need to do this, wrapper has done it
          
          <ThemeProvider theme={theme(darkState)}>
            <CssBaseline />
            <Switch checked={darkState} onChange={handleThemeChange} />
            
              <Component {...pageProps} />
            
          </ThemeProvider>
        //</Provider>
      )
    
    
}


 MyApp.getInitialProps = async (Component, ctx) => {

  //console.log('server side rendering')
  return {
    pageProps: {
      // Call page-level getInitialProps
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {})
    }
  };
} 
 

//export default MyApp

export default wrapper.withRedux(MyApp);

