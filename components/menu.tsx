'use client';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GiSuperMushroom, GiChiliPepper, GiStrawberry } from 'react-icons/gi';

import { MdOutlineMenuOpen, MdOutlineMenu } from 'react-icons/md';

const MenuItemVariants: Variants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -200,
  },
};

const iconBackgroundVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type WithChildrenProps = {
  children: React.ReactNode;
};

type IconLinkProps = WithChildrenProps;

type AnimatedIconLinkProps = IconLinkProps & {
  currentIndex: number | null;
  index: number;
  onEnter: (index: number | null) => void;
};

export const Menu = () => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <motion.nav
      className="flex flex-row justify-between gap-4 py-10 px-5 text-4xl text-white bg-red fixed top-0 w-full" 
      layout
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key="menu"
          className="flex h-full w-full flex-row items-center justify-end bg-red m-0"
          variants={MenuItemVariants}
          initial="enter"
          animate="enter"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 1, damping: 30 },
            opacity: { duration: 0.3 },
          }}
        >
          {/* <Image
            src='branding-JAX.svg'
            width={100}
            height={100}
            alt="Jax Designs"
          /> */}
          {open ? (
            <MenuOpen setOpen={setOpen} />
          ) : (
            <motion.button
              className="flex h-full justify-end bg-red text-xl"
              onClick={() => setOpen(true)}
            >
              <MdOutlineMenu />
            </motion.button>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.nav>
  );
};

const MenuOpen = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [social, setLink] = useState<number | null>(null);
  const icons = [
    [GiSuperMushroom, 'Home'],
    [GiChiliPepper, 'Shop'],
    [GiStrawberry, 'Contact'],
  ];

  return (
    <div className='flex flex-row'>
      <menu
        className="flex flex-row items-center justify-center gap-4 text-3xl text-white"
        onMouseLeave={() => setLink(null)}
      >
        {icons.map(([Icon, text], i) => (
          <AnimatedIconLink
            index={i}
            key={i}
            currentIndex={social}
            onEnter={setLink}
          >
            <div className="flex space-x-2 items-center">
              <Icon />
              <Link href={'/' + (text === 'Home' ? "" : text.toString().toLowerCase())}>
                {text.toString()}
              </Link>
            </div>
          </AnimatedIconLink>
        ))}
      </menu>
      <button className="p-4 text-xl items-center float-right relative" onClick={() => setOpen(false)}>
        <MdOutlineMenuOpen />
      </button>
    </div>
  );
};

export const AnimatedIconLink = ({
  children,
  currentIndex,
  index,
  onEnter,
}: AnimatedIconLinkProps) => {
  return (
    <li
      onMouseEnter={() => onEnter(index)}
      key={index}
      className="relative flex items-center justify-center overflow-visible rounded p-2 text-xl transition-all"
    >
      <AnimatePresence>
        {index === currentIndex && (
          <motion.div
            className="absolute mx-auto h-full w-full rounded bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops)) from-transparent to-white"
            layoutId="social"
            key="social"
            variants={iconBackgroundVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
        )}
      </AnimatePresence>
      <div className="relative z-10">{children}</div>
    </li>
  );
};
