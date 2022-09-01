import { makeStyles, Box } from '@material-ui/core';
import { useContext } from 'react';
import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';
import VideoList from '../components/VideoList';

import Store from '../stores/darkStore';

type StylesProps = {
  background: string;
};

const useStyles = makeStyles({
  root: {
    height: '100%',
    backgroundColor: (props: StylesProps) => props.background,
  },
  boxContainer: {
    display: 'flex',
  },
});

function Home() {
  const store = useContext(Store);
  const { darkMode } = store;
  const props = { background: darkMode ? '#181818' : '#f4f6f8' };
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <TopBar />
      <Box className={classes.boxContainer}>
        <NavBar />
        <VideoList />
      </Box>
    </div>
  );
}

export default Home;
