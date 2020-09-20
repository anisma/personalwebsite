import React, { Component } from 'react';

import './cursor.styles.scss';

class Cursor extends Component {
   render() {
      return (
         <div>
            <div
               className='cursor'
               style={{ top: this.props.y, left: this.props.x }}
            ></div>
            <div
               className='cursor-follower'
               style={{ top: this.props.y, left: this.props.x }}
            ></div>
         </div>
      );
   }
}

export default Cursor;
