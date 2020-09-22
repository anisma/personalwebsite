import React from 'react';
import { useSpring, animated } from 'react-spring';
import './loading.styles.scss';

export const LoadingPage = () => {
   const motion1 = useSpring({
      from: {
         transform: 'translateY(100px)',
         opacity: 1,
      },
      to: async (next) => {
         await next({ transform: 'translateY(-10px)' });
         await next({ transform: 'translateY(0)' });
         await next({ transform: 'translateY(-1000px)' });
         await next({ opacity: 0 });
      },
   });

   const motion2 = useSpring({
      from: {
         transform: 'translateY(100px)',
      },
      to: async (next, cancel) => {
         await next({ transform: 'translateY(-10px)' });
         await next({ transform: 'translateY(0)' });
         await next({ transform: 'translateY(-1000px)' });
         await next({ opacity: 0 });
      },
      delay: 2000,
   });

   const motion3 = useSpring({
      config: { duration: 500 },
      from: { top: 0 },
      to: { top: -1500 },
      delay: 4200,
   });
   const motion31 = useSpring({
      config: { duration: 600 },
      from: { bottom: 0 },
      to: { bottom: 1500 },
      delay: 4200,
   });
   const motion4 = useSpring({
      config: { duration: 700 },
      from: { top: 0 },
      to: { top: -1500 },
      delay: 4250,
   });

   const motion5 = useSpring({
      from: { display: 'flex' },
      to: { display: 'none' },
      delay: 5000,
   });
   return (
      <animated.div className='load' style={motion5}>
         <animated.div className='base b1' style={motion3} />
         <animated.div className='base b2' style={motion4} />
         <animated.span className='text t1' style={motion1}>
            ANIS MAGHFIROH
         </animated.span>
         <animated.span className='text t2' style={motion2}>
            FRONT-END DEVELOPER
         </animated.span>
         <animated.div className='layer l1' style={motion3}></animated.div>
         <animated.div className='layer l2' style={motion31}></animated.div>
      </animated.div>
   );
};
