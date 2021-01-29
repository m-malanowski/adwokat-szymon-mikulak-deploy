import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
const TriggerText = ({children}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else{
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, clipPath: "circle(250% at 100% 100%)",
          transition: { delay: .2, duration: 2.8}
        },
        hidden: { opacity: 0, y: -20, clipPath: "circle(16.2% at 48% 0)" }
      }}
    >
      {/*<h2>{`Header inside viewport ${inView}.`}</h2>*/}
      {children}
    </motion.div>
  );
};
export default TriggerText