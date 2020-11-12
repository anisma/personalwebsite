import React, { useState, useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import { Container } from '../../component/container/container.component';
import { Hero } from '../../component/hero/hero.component';
import { AboutMe } from '../../component/about-me/about-me.component';
import { TechStack } from '../../component/tech-stack/tech-stack.component';
import { Projects } from '../../component/projects/projects.component';
import { Contact } from '../../component/contact/contact.component';
import { ContactSection } from '../../component/contact-section/contact-section.component';

import './about.styles.scss';

export const AboutPage = () => {
   const [active, setActive] = useState(0);
   const [width, setWidth] = useState(0);
   const [height, setHeight] = useState(0);

   const onLeave = (origin, destination, direction) => {
      setActive(destination.index);
   };

   useEffect(() => {
      window.addEventListener('resize', () => {
         setWidth(window.innerWidth);
         setHeight(window.innerHeight);
      });

      return () => {
         window.addEventListener('resize', () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
         });
      };
   }, []);

   useEffect(() => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
   }, [width, height]);

   return (
      <Container>
         {/* width > 576 || */}
         {(height < 720 && width > 768) || (width > 576 && height > 720) ? (
            <div>
               <Contact active={active} />
               <ReactFullpage
                  licenseKey={'YOUR KEY HERE'}
                  scrollingSpeed={1000}
                  autoScrolling={true}
                  navigation={true}
                  navigationPosition={'right'}
                  loopBottom={true}
                  loopTop={true}
                  onLeave={onLeave}
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
            </div>
         ) : (
            <div>
               <ReactFullpage
                  licenseKey={'YOUR KEY HERE'}
                  scrollingSpeed={1000}
                  autoScrolling={true}
                  navigation={true}
                  navigationPosition={'right'}
                  loopBottom={true}
                  loopTop={true}
                  onLeave={onLeave}
                  css3={true}
                  render={(state, fullPageApi) => (
                     <ReactFullpage.Wrapper>
                        <Hero className='section' active={active} />
                        <AboutMe className='section' active={active} />
                        <TechStack className='section' active={active} />
                        <Projects className='section' active={active} />
                        <ContactSection className='section' active={active} />
                     </ReactFullpage.Wrapper>
                  )}
               />
            </div>
         )}
      </Container>
   );
};

export default AboutPage;
