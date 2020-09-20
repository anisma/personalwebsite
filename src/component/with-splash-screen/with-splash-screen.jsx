import React, { Component } from 'react';
import { LoadingPage } from '../loading/loading.component';

export const withSplashScreen = (WrappedComponent) => {
   return class extends Component {
      constructor(props) {
         super(props);
         this.state = {
            loading: true,
         };
      }

      async componentDidMount() {
         try {
            setTimeout(() => {
               this.setState({
                  loading: false,
               });
            }, 5000);
         } catch (err) {
            console.log(err);
            this.setState({
               loading: false,
            });
         }
      }

      render() {
         // while checking user session, show "loading" message
         if (this.state.loading) return <LoadingPage />;

         // otherwise, show the desired route
         return <WrappedComponent {...this.props} />;
      }
   };
};
