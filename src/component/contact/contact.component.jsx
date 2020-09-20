import React from 'react';
import { useSpring, animated } from 'react-spring';

import './contact.styles.scss';

export const Contact = (props) => {
   let toggle = false;
   let fixed = false;
   props.active === 0 ? (fixed = false) : (fixed = true);
   props.active === 0 ? (toggle = false) : (toggle = true);
   const motion = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'translateY(0)' : ' translateY(100px)',
      position: fixed ? 'fixed' : 'absolute',
      delay: 700,
   });
   return (
      <animated.div className='contacts sectin' id='contact' style={motion}>
         <h1 className='contacts__title'>Yo!</h1>
         <ul className='contacts__list'>
            <h3 className='contacts__list__title'>FIND ME ON</h3>
            <li>
               <a href='mailto:anismaghfiroh63@gmail.com'>Email</a>
            </li>
            <li>
               <a href='http://linkedin.com/in/anismaghfiroh' target='blank'>
                  Linkedin
               </a>
            </li>
            <li>
               <a href='http://github.com/anisma' target='blank'>
                  Github
               </a>
            </li>
            <li>
               <a href='http://behance.net/anismaghfiroh' target='blank'>
                  Behance
               </a>
            </li>
         </ul>
      </animated.div>
   );
};
