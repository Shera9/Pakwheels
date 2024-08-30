import React from 'react';
import { BrowserRouter as Router, Route, redirect } from 'react-router-dom';

// import Navbar from './components/Navbar';

const Auth = () => {
  return (
    <Router>
      {/* <Navbar /> */}
    
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        {/* <Route path="/home" component={Home} /> */}
        <Route path="/logout" component={Logout} />
        {/* <redirect from="/" to="/login" /> */}
      
    </Router>
  );
};

export default Auth;
