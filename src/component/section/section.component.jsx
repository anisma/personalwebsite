import React from 'react';

import { useSpring, animated } from 'react-spring';

import './section.styles.scss';

export const Section = (props) => {
   const toggle = props.toggle;
   const motion1 = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'translateY(0)' : ' translateY(100px)',
      delay: 500,
      // top: toggle ? '0%' : '100%',
   });
   const motion2 = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'translateX(0)' : ' translateX(-200px)',
   });
   return (
      <div className={props.className}>
         <section>
            <animated.div className='background' style={motion2}>
               <span>{props.background}</span>
            </animated.div>
            <animated.div style={motion1}>
               <h1 className='title'>{props.title}</h1>
            </animated.div>
            <div className='content'>{props.children}</div>
         </section>
      </div>
   );
};
