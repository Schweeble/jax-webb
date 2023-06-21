import { IconButton } from '@mui/material';
import { MouseEventHandler } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

type CarouselButtonProps = {
  position: 'left' | 'right';
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const CarouselButton = ({ position, onClick }: CarouselButtonProps) => {
  return (
    <IconButton
      aria-label={'carosel' + position}
      size="small"
      onClick={onClick}
    >
      {position === 'left' && <AiOutlineArrowLeft />}
      {position === 'right' && <AiOutlineArrowRight />}
    </IconButton>
  );
};
