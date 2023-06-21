'use client';

import { SlideShow } from '@/components/images/image-carousel';
import { Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    // grid
    <Grid
      data-text='home-outer-grid'
      height='90%'
      display='flex'
      flexDirection='row'
      margin-top='3rem'
      container
    >
      <Grid container item xs={4}>
        <Paper
          elevation={24}
          sx={{
            width: '100%',
            margin: '3rem',
          }}>
          <SlideShow />
        </Paper>
      </Grid>
      <Grid container item xs={8}></Grid>
    </Grid>
  );
};

export default Home;
