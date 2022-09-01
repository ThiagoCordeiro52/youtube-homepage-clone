import { makeStyles, Box, Typography, Toolbar, Grid } from '@material-ui/core';

import { videos } from '../data/fakeApi';

const useStyles = makeStyles((theme) => ({
  boxContainer: {
    padding: theme.spacing(7),
  },
}));

function VideoList() {
  const classes = useStyles();
  return (
    <Box className={classes.boxContainer}>
      <Toolbar />
      <Typography variant="h5" color="textPrimary" style={{ fontWeight: 600 }}>
        Recomendados
      </Typography>
      <Grid container spacing={3}>
        {videos.map((item, index) => (
          <Grid item key={index} lg={3} md={4} sm={6} xs={12} spacing={3}>
            <Box>
              <img
                style={{ width: '100%' }}
                src={item.thumb}
                alt={item.title}
              />
              <Box>
                <Typography
                  style={{ fontWeight: 600 }}
                  variant="body1"
                  color="textPrimary"
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography
                  display="block"
                  variant="body2"
                  color="textSecondary"
                >
                  {item.channel}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {`${item.views} - ${item.date}`}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default VideoList;
