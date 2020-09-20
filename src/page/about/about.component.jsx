import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import { Container } from '../../component/container/container.component';
import { Hero } from '../../component/hero/hero.component';
import { AboutMe } from '../../component/about-me/about-me.component';
import { TechStack } from '../../component/tech-stack/tech-stack.component';
import { Projects } from '../../component/projects/projects.component';
import { Contact } from '../../component/contact/contact.component';

import './about.styles.scss';

export const AboutPage = () => {
   const [active, setActive] = useState(0);

   const onLeave = (origin, destination, direction) => {
      setActive(destination.index);
   };

   return (
      <Container>
         <Contact active={active} />

         <ReactFullpage
            licenseKey={null}
            scrollingSpeed={1000}
            autoScrolling={true}
            navigation={true}
            navigationPosition={'right'}
            loopBottom={true}
            loopTop={true}
            onLeave={onLeave}
            fixedElements={'#contacts'}
            css3={true}
            render={(state, fullPageApi) => (
               <ReactFullpage.Wrapper>
                  <Hero className='section' active={active} />
                  <AboutMe className='section' active={active} />
                  <TechStack className='section' active={active} />
                  <Projects className='section' active={active} />
               </ReactFullpage.Wrapper>
            )}
         />
      </Container>
   );
};

export default AboutPage;
