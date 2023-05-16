import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  className?: string;
  delay?: number;
  viewTriggerOffset?: string;
  noVertical?: boolean;
  children?: React.ReactNode;
}

export const FadeIn = ({
  children,
  className,
  noVertical,
  delay = 0,
  viewTriggerOffset = '0px',
}: FadeInProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: viewTriggerOffset,
  });

  const fadeInVariants = {
    initial: {
      opacity: 0,
      y: noVertical ? 0 : 24,
    },
    animate: {
      opacity: 1,
      y: 0,
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
        duration: 1,
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};
