import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Header } from './component/header/header.component';
import HomePage from './page/home/home.component';
import AboutPage from './page/about/about.component';
import Cursor from './component/cursor/cursor.component';
import PageContext from './context/PageContext';
import { withSplashScreen } from './component/with-splash-screen/with-splash-screen';

import './App.scss';

export const App = (props) => {
   const [page, setPage] = useState(true);
   const [x, setX] = useState(0);
   const [y, setY] = useState(0);

   const handleMouseMove = (e) => {
      setX(e.pageX);
      setY(e.pageY);
   };
   // console.log(props.location.pathname);

   useEffect(() => {
      if (props.location.pathname === '/') {
         setPage(true);
      } else {
         setPage(false);
      }
   });
   return (
      <PageContext.Provider value={[page, setPage]}>
         <div className='App' onMouseMove={handleMouseMove}>
            <Cursor x={x} y={y} />
            <Header />
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route exact path='/about' component={AboutPage} />
            </Switch>
         </div>
      </PageContext.Provider>
   );
};

export default withSplashScreen(withRouter(App));
