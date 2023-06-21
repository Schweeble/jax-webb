import { motion } from 'framer-motion';
import { useState } from 'react';
import { ThreeDotsWave } from '../loading/loading-image';

type ImageProps = {
  src: string;
  page: number;
  direction: number;
  paginate: (n: number) => void;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Image = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };

  const direction = props.direction;

  return (
    <>
      <motion.img
        className="rounded-3xl flex justify-center items-center"
        width={500}
        height={500}
        key={props.page}
        src={props.src}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);

          if (swipe < -swipeConfidenceThreshold) {
            props.paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            props.paginate(-1);
          }
        }}
        onLoad={imageLoaded}
      />
    </>
  );
};
