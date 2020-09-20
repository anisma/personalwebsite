import React, { useContext, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import PageContext from '../../context/PageContext';

import './header.styles.scss';

export const Header = () => {
   const [page] = useContext(PageContext);
   const props = useSpring({
      config: { duration: 500 },
      to: { transform: 'translate(0,0)', opacity: 1 },
      from: { transform: 'translate(0,-50px)', opacity: 0 },
   });
   return (
      <header>
         <animated.div className='nav' style={props}>
            <nav className='nav__left'>
               <Link to='/'>
                  <h3 className='nav__left__brand'>anisma.</h3>
               </Link>
            </nav>
            <nav className='nav__right'>
               <ul>
                  <li
                     id='click'
                     className='nav_right__item__about'
                     onClick={() => {
                        // setPage(!page);
                        // set((state) => !flipped);
                     }}
                  >
                     {page ? (
                        <Link to='/about'>
                           <span>about</span>
                        </Link>
                     ) : (
                        <Link to='/'>
                           <pan>back</pan>
                        </Link>
                     )}
                  </li>
               </ul>
            </nav>
         </animated.div>
      </header>
   );
};
