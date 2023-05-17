import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScaleUpProps {
  className?: string;
  direction: 'left' | 'right';
  offset?: number;
  delay?: number;
  viewTriggerOffset?: string;
  children?: React.ReactNode;
}

export const SlideHorizontal = ({
  direction,
  className,
  children,
  delay = 0,
  offset = 24,
  viewTriggerOffset = '0px',
}: ScaleUpProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: viewTriggerOffset,
  });

  const fadeInVariants = {
    initial: {
      opacity: 0,
      x: direction === 'left' ? offset : -offset,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={inView ? 'animate' : 'initial'}
      variants={fadeInVariants}
      className={className}
      initial={false}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
