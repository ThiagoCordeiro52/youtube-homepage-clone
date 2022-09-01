import Store from '../stores/darkStore';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';

import Switch from '@material-ui/core/Switch';

import { useTheme } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: 25,
  },
  menuIcon: {
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(4),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function TopBar() {
  const classes = useStyles();
  const theme = useTheme();
  const store = useContext(Store);
  const { darkMode, setDarkMode } = store;
  return (
    <>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logoContainer}>
            <IconButton
              edge="start"
              className={classes.menuIcon}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <img
              src={
                theme.palette.type === 'dark'
                  ? '/images/white.png'
                  : '/images/black.png'
              }
              alt="Youtube logo"
              className={classes.logo}
            />
          </div>
          <div>
            <Switch
              value={darkMode}
              onChange={() => setDarkMode()}
              className={classes.icons}
            ></Switch>
            <IconButton className={classes.icons}>
              <VideoCallIcon />
            </IconButton>
            <IconButton className={classes.icons}>
              <AppsIcon />
            </IconButton>
            <IconButton className={classes.icons}>
              <MoreVertIcon />
            </IconButton>
            <Button
              startIcon={<AccountCircleIcon />}
              variant="outlined"
              color="secondary"
            >
              Fazer Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default observer(TopBar);
