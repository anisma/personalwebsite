import React from 'react';
import { useSpring, animated } from 'react-spring';

import { Section } from '../section/section.component';

import './contact-section.styles.scss';

export const ContactSection = (props) => {
   let toggle = false;
   props.active === 4 ? (toggle = true) : (toggle = false);
   const motion = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'translateY(0)' : ' translateY(200px)',
   });
   return (
      <Section
         className={props.className}
         background='contacts'
         title=''
         toggle={toggle}
      >
         <animated.div className='contacts-section' id='contact' style={motion}>
            <h1 className='contacts-section__title'>Yo!</h1>
            <ul className='contacts-section__list'>
               <h3 className='contacts-section__list__title'>FIND ME ON</h3>
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
      </Section>
   );
};
