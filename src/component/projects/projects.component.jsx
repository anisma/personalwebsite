import React from 'react';

import { useSpring, animated } from 'react-spring';

import { Section } from '../section/section.component';

import './projects.styles.scss';

export const Projects = (props) => {
   let toggle = false;
   props.active === 3 ? (toggle = true) : (toggle = false);
   const motion = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'translateY(0)' : ' translateY(100px)',
      delay: 700,
   });
   return (
      <Section
         className={props.className}
         background='portofolios'
         title='portofolio'
         toggle={toggle}
      >
         <animated.ul className='project__list' style={motion}>
            <li className='item'>
               <a href='https://cacti-id.herokuapp.com/' target='blank'>
                  CACTI
               </a>
            </li>
            <li className='item'>
               <a href='https://crwn-clothing-id.herokuapp.com/' target='blank'>
                  CRWN-CHLOTING
               </a>
            </li>
            <li className='item'>
               <a href='https://bloom-id.netlify.app' target='blank'>
                  BLOOM
               </a>
            </li>
         </animated.ul>
      </Section>
   );
};
