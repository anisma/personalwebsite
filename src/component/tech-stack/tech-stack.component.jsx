import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Section } from '../section/section.component';

import './tech-stack.styles.scss';

export const TechStack = (props) => {
   let toggle = false;
   props.active === 2 ? (toggle = true) : (toggle = false);
   const motion = useSpring({
      opacity: toggle ? 1 : 0,
      transform: toggle ? 'translateY(0)' : ' translateY(100px)',
      delay: 700,
   });
   return (
      <Section
         className={props.className}
         background='techstack'
         title='tech-stack'
         toggle={toggle}
      >
         <animated.p style={motion}>
            The tools and technology that I used to develop the projects
         </animated.p>
         <animated.ul className='items' style={motion}>
            <li>
               <span className='tooltip'>HTML</span>
               <img src={require('../../assets/html5.svg')} alt='html5' />
            </li>
            <li>
               <span className='tooltip'>CSS</span>
               <img src={require('../../assets/css3.svg')} alt='css3' />
            </li>
            <li>
               <span className='tooltip'>Javascript</span>

               <img
                  src={require('../../assets/javascript.svg')}
                  alt='javascript'
               />
            </li>
            <li>
               <span className='tooltip'>Saas</span>
               <img src={require('../../assets/sass.svg')} alt='sass' />
            </li>
            <li>
               <span className='tooltip'>Bootstrap</span>
               <img
                  src={require('../../assets/bootstrap.svg')}
                  alt='bootstrap'
               />
            </li>
            <li>
               <span className='tooltip'>React</span>
               <img src={require('../../assets/reactjs.svg')} alt='reactjs' />
            </li>
         </animated.ul>
      </Section>
   );
};
