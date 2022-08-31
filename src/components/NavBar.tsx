import {
  makeStyles,
  Box,
  Typography,
  Button,
  ListSubheader,
} from '@material-ui/core';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none',
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  listItemText: {
    fontSize: 14,
  },
  boxContainer: {
    padding: theme.spacing(3),
  },
  loginContainer: {
    marginTop: theme.spacing(1),
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Início'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<WhatshotIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Em alta'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Inscrições'}
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Biblioteca'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Histórico'}
            />
          </ListItem>
        </List>
        <Divider />
        <Box className={classes.boxContainer}>
          <Typography variant="body2">
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Box className={classes.loginContainer}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircleIcon />}
            >
              {' '}
              Fazer login
            </Button>
          </Box>
        </Box>
        <Divider />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subheader}
            >
              O Melhor do youtube
            </ListSubheader>
          }
        >
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<MusicNoteIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Música'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<SportsSoccerIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Esportes'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<SportsEsportsIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Jogos'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<LocalMoviesIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Filmes'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<AnnouncementIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Notícias'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<LiveTvIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Ao vivo'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<AddToQueueIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Destaques'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<TrackChangesIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Videos 360'}
            />
          </ListItem>
          <ListItem
            button
            classes={{
              root: classes.listItem,
            }}
          >
            <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Procurar canais'}
            />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}
export default NavBar;
