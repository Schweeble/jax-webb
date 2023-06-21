import { motion } from 'framer-motion';
import { useState } from 'react';

type ImageProps = {
  src: string;
  page: number;
  direction: number;
  paginate: (n: number) => void;
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

  return (
    <motion.img
      className="absolute max-w-fit rounded-3xl"
      width={500}
      height={500}
      key={props.page}
      src={props.src}
      initial={{ height: '16rem', opacity: 0 }}
      animate={{
        height: isLoading ? '16rem' : 'auto',
        opacity: isLoading ? 0 : 1,
      }}
      exit={{ height: 'auto', opacity: 0 }}
      transition={[
        { height: { delay: 0, duration: 0.4 } },
        { opacity: { delay: 0.5, duration: 0.4 } },
      ]}
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
  );
};
