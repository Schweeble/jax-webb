'use client';

import { SlideShow } from '@/components/images/image-carousel';
import { Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    // grid
    <Grid
      minHeight={"89vh"}
      direction={'row'}
      container
      xs={12}
    >
      <Grid container item xs={6}>
        <Paper
          className='bg-white rounded-3xl p-12'
          elevation={24}
          sx={{
            width: '100%',
            height: '100%',
            padding: '3rem',
          }}>
          <SlideShow />
        </Paper>
      </Grid>
      <Grid container item xs={6}></Grid>
    </Grid>
  );
};

export default Home;
