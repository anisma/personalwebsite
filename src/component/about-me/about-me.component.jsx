import React from 'react';
import { useSpring, animated } from 'react-spring';

import { Section } from '../section/section.component';

import './about-me.styles.scss';

export const AboutMe = (props) => {
   let toggle = false;
   props.active === 1 ? (toggle = true) : (toggle = false);
   const motion = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'translateY(0)' : ' translateY(100px)',
      delay: 700,
   });
   return (
      <Section
         className={props.className}
         background='aboutme'
         title='about me'
         toggle={toggle}
      >
         <animated.p style={motion}>
            Hi! I'm Anis Maghfiroh. I have strong passion for design and
            technology. I specialize in Front End Development. Interest and
            exploring UI/UX design field. My passion is all about building
            elegant and professional user interface and website. Exceptional
            attention to detail and highly motivated individual to continuosly
            learn.
         </animated.p>
      </Section>
   );
};
