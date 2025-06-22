import React from 'react';
import NavBar from '../navbar';
import favicon from '@images/favicon.png';
import { ReactComponent as Logo } from '@images/shared/logo.svg';

const Header = () => {
  return (
    <div>
      {/* <img src={favicon} alt="logo" /> */}
      {/* <Logo /> */}
      <NavBar></NavBar>
    </div>
  );
};

export default Header;
