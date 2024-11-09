"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SlideButton from "../slide-button";
import Link from "next/link";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const text = "Ankit".toUpperCase();
  const inView = useInView(ref, { amount: 0.5 });
  const textArray = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.2 * i,
        // delayChildren: 0.0,
        staggerDirection: -1,
      },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -25,
      rotateY: -25,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: "tween",
        damping: 10,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };
  const routes = [
    { title: "Home", route: "/home" },
    { title: "Services", route: "/services" },
    { title: "Contact", route: "/contact" },
    { title: "About", route: "/about" },
  ];
  const accessData = [
    { title: "STYLE GUIDE", route: "/style-guide" },
    { title: "Changelog", route: "/changelog" },
    { title: "Licences", route: "/licences" },
  ];
  const socialData = [
    {
      title: "Facebook",
      route: "/facebook",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      title: "Instagram",
      route: "/instagram",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          viewBox="0 0 32 32"
        >
          <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
          <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      route: "/linkedin",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path
            d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      title: "Youtube",
      route: "/youtube",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 -3 20 20"
          version="1.1"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-300.000000, -7442.000000)"
              fill="#ffffff"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                  id="youtube-[#168]"
                  fill="#ffffff"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      ),
    },
    {
      title: "Youtube",
      route: "/youtube",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ffffff"
        >
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.165-10.141-5.144-.423.722-.666 1.561-.666 2.457 0 1.69.861 3.179 2.169 4.055-.8-.026-1.554-.245-2.213-.612v.061c0 2.362 1.679 4.337 3.911 4.779-.409.111-.84.171-1.285.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.6 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.395 0-.779-.023-1.158-.067 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.21 0-.423-.015-.634.961-.695 1.8-1.562 2.46-2.549z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <footer
        className="flex items-center flex-col justify-center w-full h-screen bg-zinc-950"
        ref={ref}
      >
        <div>
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex"
          >
            {textArray.map((letter, index) => (
              <motion.span
                variants={letterVariants}
                key={index}
                transition={{ type: "tween", damping: 10, stiffness: 100 }}
                className="md:text-[300px] font-bold  text-center tracking-widest text-white uppercase"
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className=" w-full px-24">
          <div className="flex justify-between items-center px-12 text-white ">
            <div>
              <h1 className="uppercase text-2xl font-bold">Ankit</h1>
            </div>
            <div className="flex flex-wrap uppercase">
              {routes.map((route, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center mb-4"
                  >
                    <div className="w-24 cursor-pointer">
                      <Link href={route.route}>
                        <SlideButton route={route.title} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <ul className="flex gap-3">
                {socialData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center mb-4"
                    >
                      <div className="w-7 cursor-pointer ">
                        <Link href={data.route}>{data.svg}</Link>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className=" px-12 flex flex-col items-center justify-center">
            <hr className=" w-full bg-zinc-600  opacity-50 mt-10 " />
            <div className="my-12">
              <ul className="uppercase text-white flex">
                {accessData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-center mb-4"
                    >
                      <div className="min-w-40 cursor-pointer">
                        <Link href={data.route}>
                          <SlideButton route={data.title} />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
