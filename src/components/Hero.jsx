import React from "react";
import { Link } from 'react-scroll';

import MyImage from '../resources/Nathan.jpg';  

import FadeIn from "./FadeIn";

const Hero = ({ changeSectionStatus }) => {
  // tw-bg-gradient-to-br tw-from-sky-300 tw-via-sky-400 tw-to-cyan-700 tw-bg-clip-text tw-text-transparent

  return (
    <section className="container-lg p-0 tw-flex tw-items-center tw-justify-center lg:tw-justify-between">
      <div className="tw-flex tw-flex-col tw-w-fit tw-items-center lg:tw-items-start">
        <div className="tw-text-center lg:tw-text-left tw-mb-6 lg:tw-mb-8 xl:tw-mb-9 tw-text-neutral-900">
          <FadeIn>
            <h1 className="tw-font-serif tw-text-7xl tw-drop-shadow-lg xl:tw-text-7xl fw-bold mb-3">
              <span className="tw-hidden xl:tw-inline">Nathanael</span> Martinez<span className="tw-hidden lg:tw-inline xl:tw-hidden">, N.</span>
            </h1>
            <h4 className="tw-font-serif fs-3 tw-text-stone-700">Front-End Developer</h4>
          </FadeIn>
        </div>
        <div className="tw-w-full tw-text-center lg:tw-text-left">
          <FadeIn>
            <Link
              className="tw-font-serif tw-text-lg lg:tw-text-2xl tw-w-52 lg:tw-w-80 tw-cursor-pointer tw-font-semibold tw-text-center tw-group tw-no-underline tw-relative tw-inline-block tw-text-gray-900 focus:tw-outline-none focus:tw-ring active:tw-text-gray-700"
              to={"about"}
              spy={true}
              smooth={true}
              duration={300}
              onClick={() => changeSectionStatus("about")}
            >
              <span className="tw-absolute tw-inset-0 tw-translate-x-0.5 tw-translate-y-0.5 tw-bg-gray-900 tw-transition-transform group-hover:tw-translate-x-0 group-hover:tw-translate-y-0"></span>
              <span className="tw-relative tw-flex tw-items-center tw-justify-center tw-font-semibold tw-border tw-border-current tw-bg-yellow-100 tw-px-8 tw-py-3">
                {" "}
                About{" "}
              </span>
            </Link>
          </FadeIn>  
        </div>
      </div>

        <figure className="tw-outline tw-outline-offset-4 tw-outline-stone-700 m-0 tw-w-2/6 tw-max-w-96 tw-rounded-xl tw-shadow-xl tw-hidden lg:tw-block">
         <FadeIn>
            <img 
            src={MyImage} 
            alt="Me" 
            className="tw-w-full tw-object-cover tw-rounded-xl" 
            />
          </FadeIn>
        </figure>
    </section>
  );
};

export default Hero;
