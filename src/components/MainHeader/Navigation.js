import React from 'react';
import AuthContext from '../../store/auth-context'

import classes from './Navigation.module.css';

const Navigation = (props) => { 

  return (<AuthContext.Consumer>
  
    {value => 
      (
      <nav className={classes.nav}>
      <ul>
        {value.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {value.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {value.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    )}
  </AuthContext.Consumer>)
}
//   return (
//     <nav className={classes.nav}>
//       <ul>
//         {props.isLoggedIn && (
//           <li>
//             <a href="/">Users</a>
//           </li>
//         )}
//         {props.isLoggedIn && (
//           <li>
//             <a href="/">Admin</a>
//           </li>
//         )}
//         {props.isLoggedIn && (
//           <li>
//             <button onClick={props.onLogout}>Logout</button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

export default Navigation