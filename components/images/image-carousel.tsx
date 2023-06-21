'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { wrap } from 'popmotion';
import { useState } from 'react';
import useSWR from 'swr';
import { CarouselButton } from '../buttons';
import { Image } from './image';
import { Grid, Paper } from '@mui/material';

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
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          container
          height={'100%'}
          width={'100%'}
        >
          <Grid
            item
            xs={3}
            width="100%"
            alignItems="start"
            display="flex"
            justifyContent="center"
          >
            <CarouselButton position="left" onClick={() => paginate(1)} />
          </Grid>
          <Grid
            item
            xs={6}
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
          >
            <AnimatePresence initial={false} custom={direction}>
              <Image
                src={data[imageIndex]}
                page={page}
                direction={direction}
                paginate={paginate}
              />
            </AnimatePresence>
          </Grid>
          <Grid
            item
            xs={3}
            width="100%"
            justifyContent="center"
            alignItems="end"
            display="flex"
          >
            <CarouselButton position="right" onClick={() => paginate(-1)} />
          </Grid>
        </Grid>
      )}
    </>
  );
};
