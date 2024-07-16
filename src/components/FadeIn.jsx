import React from "react";
import '../index.css'

import { useInView } from 'react-intersection-observer';

const FadeIn = ({ children }) => {

    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1,     // Trigger when 10% of the element is visible
      });

  return (
    <div
      ref={ref}
      className={`tw-transition-opacity tw-duration-1000 ${inView ? 'tw-opacity-100' : 'tw-opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
