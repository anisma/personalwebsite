import React, { Component } from 'react';
import TypeIt from 'typeit';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';
import { Container } from '../../component/container/container.component';
import PageContext from '../../context/PageContext';

import './home.styles.scss';

class HomePage extends Component {
   static contextType = PageContext;

   constructor(props) {
      super(props);
      this.state = {
         page: true,
      };
   }
   getContext() {
      return {
         page: this.state.page,
      };
   }

   clickHandle = () => {
      this.setState({ page: false });
      console.log('clicked');
   };

   componentDidMount() {
      new TypeIt('#typing', {
         speed: 100,
         loop: true,
      })
         .pause(600)
         .type('I code interactive website.')
         .pause(500)
         .delete(27)
         .type('I design user interface for website.')
         .pause(500)
         .delete(20)
         .type('I watch movie during my non-coding hours.')
         .pause(500)
         .delete(43)
         .type("I'm noodle lover.")
         .pause(500)
         .delete(17)
         .type('I draw digital illustration as a hobby.')
         .pause(500)
         .delete(43)
         .type("I'm a big foodie.")
         .pause(500)
         .go();
   }
   render() {
      return (
         <Container>
            <div className='main'>
               <Spring
                  from={{ transform: 'translate(0,-50px)', opacity: 0 }}
                  to={{ transform: 'translate(0,0)', opacity: 1 }}
                  config={{ duration: 500 }}
                  delay={500}
               >
                  {(props) => (
                     <h1 className='main__title' style={props}>
                        Hi! I'm Anis Maghfiroh, a Front-end Developer based in
                        Indonesia
                     </h1>
                  )}
               </Spring>
               <Spring
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                  config={{ duration: 500 }}
                  delay={1000}
               >
                  {(props) => (
                     <h2 className='main__subtitle' id='typing' style={props}>
                        {''}
                     </h2>
                  )}
               </Spring>
               <Spring
                  from={{ transform: 'translate(0,-50px)', opacity: 0 }}
                  to={{ transform: 'translate(0,0)', opacity: 1 }}
                  config={{ duration: 500 }}
                  delay={1000}
               >
                  {(props) => (
                     <div style={props}>
                        <Link to='/about'>
                           <span
                              className='main__button'
                              onClick={this.clickHandle}
                           >
                              get to know me
                           </span>
                        </Link>
                     </div>
                  )}
               </Spring>
            </div>
         </Container>
      );
   }
}

export default HomePage;
