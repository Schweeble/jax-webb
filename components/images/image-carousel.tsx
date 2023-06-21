'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';
import useSWR from 'swr';
import { ImageButton } from '../buttons';
import { Image } from './image';
import { Grid } from '@mui/material';

type ImageData = string[];

export const SlideShow = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());
  const { data }: { data: string[] } = useSWR('/api/product-images', fetcher);

  const imageIndex = wrap(0, data?.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      {!data && <div>Loading...</div>}
      {data && (
        <Grid
          className="flex justify-center items-center"
          container
          width={'100%'}
          height={'100%'}
        >
          <Grid item xs={2} width='100%' height='100%'>
            <ImageButton position="right" onClick={() => paginate(-1)} />
          </Grid>
          <Grid item xs={6} direction={'row'} width='100%' height='100%'>
            <AnimatePresence initial={false} custom={{ direction, isLoading }}>
              <Image
                src={data[imageIndex]}
                page={page}
                direction={direction}
                paginate={paginate}
              />
            </AnimatePresence>
          </Grid>
          <Grid item xs={2} width='100%' height='100%'>
            <ImageButton position="left" onClick={() => paginate(1)} />
          </Grid>
        </Grid>
      )}
    </>
  );
};
