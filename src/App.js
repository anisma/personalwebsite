import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Header } from './component/header/header.component';
import HomePage from './page/home/home.component';
import AboutPage from './page/about/about.component';
import PageContext from './context/PageContext';
import { withSplashScreen } from './component/with-splash-screen/with-splash-screen';

import './App.scss';

export const App = (props) => {
   const [page, setPage] = useState(true);
   const [width, setWidth] = useState(0);

   useEffect(() => {
      if (props.location.pathname === '/') {
         setPage(true);
      } else {
         setPage(false);
      }
      setWidth(window.innerWidth);
   }, [props.location.pathname, width]);
   return (
      <PageContext.Provider value={[page, setPage]}>
         <div className='App'>
            <Header />
            <Switch>
               <Route exact path='/' component={HomePage} />
               <Route path='/about' component={AboutPage} />
            </Switch>
         </div>
      </PageContext.Provider>
   );
};

export default withSplashScreen(withRouter(App));
