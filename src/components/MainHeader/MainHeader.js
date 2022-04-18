import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Not sure what this app is yet</h1> 
      <Navigation onLogout={props.onLogout} />
      {/* <button onClick={props.onLogout}>Logout</button> */}
    </header>
  );
};

export default MainHeader;