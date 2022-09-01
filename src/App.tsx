import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core';
import { useContext } from 'react';
import Store from '../src/stores/darkStore';
import { observer } from 'mobx-react-lite';

import Home from './pages/Home';

const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh',
  },
});

function App() {
  const { darkMode, setDarkMode } = useContext(Store);
  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5',
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        paper: darkMode ? '#232323' : '#FFF',
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default observer(App);
