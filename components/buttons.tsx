import { on } from 'events';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

type ButtonProps = {
  position: 'left' | 'right';
  onClick: MouseEventHandler<HTMLDivElement>;
};

export const ImageButton = ({ position, onClick }: ButtonProps) => {
  let className = 'absolute bg-white rounded-3xl top-[calc(50%-20px)] w-9 h-9 flex justify-center items-center select-none cursor-pointer weight-bold text-2xl z-10 ';
  if (position === 'left') { 
    className += 'left-3 -scale-100';
  } else {
    className += 'right-3';
  }

  return (
    <div
      className={className}
      onClick={onClick}
    >
      {'‣'}
    </div>
  );
};
