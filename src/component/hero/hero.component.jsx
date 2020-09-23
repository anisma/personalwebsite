import React from 'react';
import { useSpring, animated } from 'react-spring';

import img from '../../assets/img.png';

import './hero.styles.scss';

export const Hero = (props) => {
   let toggle = false;
   props.active === 0 ? (toggle = true) : (toggle = false);
   const motion = useSpring({
      opacity: toggle ? 1 : 0,
      top: toggle ? 0 : -100,
   });
   const motion1 = useSpring({
      opacity: toggle ? 1 : 0,
   });
   const motion2 = useSpring({
      config: { duration: 1000 },
      from: { top: 0 },
      to: { top: -1500 },
   });

   return (
      <div className={`${props.className} hero-wrapper`}>
         <animated.div className='cover' style={motion2}>
            cover
         </animated.div>
         <div className='hero'>
            <animated.div className='hero__title' style={motion}>
               <h3 className='text'>Hello! I'm</h3>
               <h1 className='title'>anis maghfiroh</h1>
               <h2 className='text'>a Front-end Developer</h2>
            </animated.div>
            <animated.div className='hero__images' style={motion1}>
               <img className='hero__images__image' src={img} alt='' />
            </animated.div>
         </div>
         <div className='scroll'>
            <span className='chevron'></span>
         </div>
      </div>
   );
};
