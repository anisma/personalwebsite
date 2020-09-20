import React from 'react';

import './container.styles.scss';

export const Container = (props) => (
   <div className='container'>{props.children}</div>
);
