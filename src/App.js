import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {

  //state 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  

   React.useEffect(() => {
      //  '1' means logged in
      const storedLogin = localStorage.getItem('isLoggedIn')
      if (storedLogin === '1') {setIsLoggedIn(true)}
    }, [])


  const loginHandler = (email, password) => {
   
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

export default App;
