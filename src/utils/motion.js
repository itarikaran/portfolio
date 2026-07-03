export const smoothEase = [0.22, 1, 0.36, 1];

export const containerReveal = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const itemReveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.62,
      ease: smoothEase,
    },
  },
};

export const cardHover = {
  y: -5,
  transition: {
    duration: 0.28,
    ease: smoothEase,
  },
};
