import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScaleUpProps {
  className?: string;
  initialScale?: number;
  delay?: number;
  viewTriggerOffset?: string;
  children?: React.ReactNode;
}

export const ScaleUp = ({
  className,
  children,
  initialScale = 0,
  delay = 0,
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
      scale: initialScale,
    },
    animate: {
      opacity: 1,
      scale: 1,
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
