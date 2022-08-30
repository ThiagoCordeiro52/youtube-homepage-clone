import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  appBar: {
    boxShadow: 'none',
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
  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.logoContainer}>
            <IconButton
              edge="start"
              className={classes.menuIcon}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <img
              src="/images/black.png"
              alt="Youtube logo"
              className={classes.logo}
            />
          </div>
          <div>
            <IconButton className={classes.icons} color="inherit">
              <VideoCallIcon />
            </IconButton>
            <IconButton className={classes.icons} color="inherit">
              <AppsIcon />
            </IconButton>
            <IconButton className={classes.icons} color="inherit">
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
    </div>
  );
}

export default TopBar;
